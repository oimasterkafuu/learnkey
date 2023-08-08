<template>
    <PageHeader :title="unitTitle" :description="unitDescription" />
    <main>
        <MagicViewer
            :row="unitContent[rowId]"
            :currInput="currInput"
            v-if="loaded && !finished"
            :key="currInput"
        />
        <MagicHint
            :keyboard="keyboardJson"
            :content="nextChar"
            v-if="loaded && !finished"
            :showHint="showHint"
            :key="currInput"
        />
        <div class="unit-interaction">
            <MagicKeyboard
                @input="input"
                :keyboard="keyboardJson"
                :leftInfo="
                    kpmSpeed > 10
                        ? '当前速度：' + kpmSpeed + '键 / 分钟'
                        : 'oimaster'
                "
                :rightInfo="rightInfo"
                v-if="loaded && !finished"
            />
            <BeautifulProgress
                :progress="rowId / unitContent.length"
                v-if="loaded && !finished"
            />
        </div>
    </main>
    <SpinLoader v-if="!loaded" />
    <FinishDialog v-if="finished" />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import MagicKeyboard from '@/components/MagicKeyboard.vue';
import MagicHint from '@/components/MagicHint.vue';
import MagicViewer from '@/components/MagicViewer.vue';
import SpinLoader from '@/components/SpinLoader.vue';
import BeautifulProgress from '@/components/BeautifulProgress.vue';
import FinishDialog from '@/components/UnitView/FinishDialog.vue';

import Bell1 from '@/assets/sounds/bell1.wav';
import Bell2 from '@/assets/sounds/bell2.wav';

export default {
    name: 'UnitView',
    components: {
        PageHeader,
        MagicKeyboard,
        MagicHint,
        MagicViewer,
        SpinLoader,
        BeautifulProgress,
        FinishDialog
    },
    data() {
        return {
            unitTitle: '',
            unitDescription: '',
            id: this.$route.params.id,
            unit: this.$route.params.unit,
            unitContent: [],
            rowId: 0,
            keyboardJson: {},
            currInput: '',
            showHint: false,
            loaded: false,
            finished: false,
            keysIn10Seconds: 0,
            kpmSpeed: 0,
            kpmTimer: null,
            savedTimeout: null,
            rightInfo: 'oimaster'
        };
    },
    computed: {
        nextChar() {
            var unitRow = this.unitContent[this.rowId];
            var unitRaw = '';
            for (var i of unitRow) {
                if (typeof i === 'string') unitRaw += i;
                else if (Array.isArray(i)) unitRaw += i[1];
            }

            for (var maxMatch = 0; maxMatch < unitRaw.length; maxMatch++) {
                if (unitRaw[maxMatch] !== this.currInput[maxMatch]) break;
            }
            if (maxMatch === unitRaw.length) return null;
            // console.log('nextChar: ' + unitRaw[maxMatch]);
            return unitRaw[maxMatch];
        }
    },
    methods: {
        input(value) {
            ++this.keysIn10Seconds;

            if (value !== '\b') this.currInput += value;
            else this.currInput = this.currInput.slice(0, -1);

            do {
                var found = false;
                for (var key in this.keyboardJson.multi) {
                    if (this.currInput.endsWith(key)) {
                        this.currInput =
                            this.currInput.slice(0, -key.length) +
                            this.keyboardJson.multi[key];
                        found = true;
                        break;
                    }
                }
            } while (found);

            // console.log(this.currInput);

            if (this.nextChar === null) {
                ++this.rowId;
                // save to local storage
                localStorage.setItem(
                    `oimaster-${this.id}-${this.unit}`,
                    this.rowId
                );
                this.currInput = '';
                if (this.rowId === this.unitContent.length) {
                    this.finished = true;
                    --this.rowId;
                    // remove from local storage
                    localStorage.removeItem(`oimaster-${this.id}-${this.unit}`);
                }

                this.rightInfo = '进度已经保存';
                clearTimeout(this.savedTimeout);
                this.savedTimeout = setTimeout(() => {
                    this.rightInfo = 'oimaster';
                }, 5000);

                try {
                    var list = [Bell1, Bell2];
                    var enter = new Audio(
                        list[Math.floor(Math.random() * list.length)]
                    );
                    enter.play();
                } catch (e) {
                    console.log(e);
                }
            }
        },
        async fetchHeader() {
            try {
                const response = await fetch(
                    `/lessons/${this.id}/oimaster.json`
                );
                const data = await response.json();
                if (!data[this.unit]) {
                    throw new Error('Invalid unit id');
                }
                this.unitTitle = data[this.unit].title;
                this.unitDescription = data[this.unit].description;
                this.fetchUnitContent();
            } catch (error) {
                console.log(error.message);
                this.$router.push(`/lesson/${this.id}/`);
                return;
            }
        },
        async fetchUnitContent() {
            const response = await fetch(
                `/lessons/${this.id}/${this.unit}.json`
            );
            const data = await response.json();
            this.unitContent = data;
            // read from local storage
            var savedRowId = localStorage.getItem(
                `oimaster-${this.id}-${this.unit}`
            );
            if (savedRowId) {
                this.rowId = parseInt(savedRowId);
            }
            this.fetchKeyboardJson();
        },
        async fetchKeyboardJson() {
            const response = await fetch(`/lessons/${this.id}/keyboard.json`);
            const data = await response.json();
            this.keyboardJson = data;
            this.loaded = true;
        },
        pressShowHint(event) {
            if (event.key === 'Control') this.showHint = true;
        },
        pressHideHint(event) {
            if (event.key === 'Control') this.showHint = false;
        },
        countKpm() {
            this.kpmSpeed = this.keysIn10Seconds * 6;
            this.keysIn10Seconds = 0;
        }
    },
    mounted() {
        this.fetchHeader();
        document.addEventListener('keydown', this.pressShowHint);
        document.addEventListener('keyup', this.pressHideHint);
        this.kpmTimer = setInterval(this.countKpm, 10000);
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.pressShowHint);
        document.removeEventListener('keyup', this.pressHideHint);
        clearInterval(this.kpmTimer);
    }
};
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
div.unit-interaction {
    width: 100%;
}
</style>
