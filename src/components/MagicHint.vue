<template>
    <div>
        <div class="hint" v-if="showHint">
            <MagicKey
                v-for="(key, index) in answer"
                :singleKey="keyboard.show[key[0]]"
                :key="index"
                class="hint-key"
                :class="{ unactive: !key[1] }"
            />
        </div>
        <div class="no-hint" v-else>
            按下
            <MagicKey :singleKey="keyboard.show['key-control']" class="hint-key" />
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
                    return [[typeKey, true]];
                } else if (this.keyboard.type[typeKey].shift === content) {
                    return [
                        ['key-shift-left', true],
                        [typeKey, true],
                        ['key-shift-left', false]
                    ];
                } else if (this.keyboard.type[typeKey].capslock === content) {
                    return [
                        ['key-capslock', true],
                        [typeKey, true],
                        ['key-capslock', false]
                    ];
                }
            }

            return [];
        },
        simplifyHint(hint) {
            for (var i = 1; i < hint.length; i++) {
                if (hint[i][1] === false && hint[i][0] === hint[i - 1][0]) {
                    hint.splice(i - 1, 2);
                    i--;
                }
            }

            return hint;
        }
    },
    mounted() {
        this.answer = this.makeHint(this.content);
        this.answer = this.simplifyHint(this.answer);
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

.unactive {
    /* draw a big red cross on the key */
    position: relative;
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #f00;
    }
    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
}
</style>
