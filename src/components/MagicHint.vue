<template>
    <div>
        <div class="hint" v-if="showHint">
            <MagicKey
                v-for="(key, index) in answer"
                :singleKey="keyboard.show[key]"
                :key="index"
                class="hint-key"
            />
        </div>
        <div class="no-hint" v-else>
            按下
            <MagicKey
                :singleKey="keyboard.show['key-control']"
                class="hint-key"
            />
            键显示提示！
        </div>
    </div>
</template>

<script>
import MagicKey from '@/components/MagicKeyboard/MagicKey.vue';

export default {
    name: 'MagicKeyboard',
    components: {
        MagicKey
    },
    props: {
        keyboard: {
            type: Object,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        showHint: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            answer: []
        };
    },
    methods: {
        makeHint(content) {
            // search for multi
            for (var multiKey in this.keyboard.multi) {
                if (this.keyboard.multi[multiKey] === content) {
                    var result = [];
                    for (var char of multiKey) {
                        result.push(...this.makeHint(char));
                    }
                    return result;
                }
            }

            for (var typeKey in this.keyboard.type) {
                if (this.keyboard.type[typeKey].default === content) {
                    return [typeKey];
                } else if (this.keyboard.type[typeKey].shift === content) {
                    return ['key-shift-left', typeKey];
                } else if (this.keyboard.type[typeKey].capslock === content) {
                    return ['key-capslock', typeKey];
                }
            }

            return [];
        }
    },
    mounted() {
        this.answer = this.makeHint(this.content);
    }
};
</script>

<style scoped>
.hint {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.hint-key {
    margin: 5px !important;
    padding: 5px;
    height: 30px;
    flex: unset !important;
}

.no-hint {
    display: flex;
    align-items: center;
    opacity: 0.3;
}
</style>
