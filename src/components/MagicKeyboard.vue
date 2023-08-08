<template>
    <div class="keyboard" id="keyboard">
        <div class="keyboardRow">
            <MagicKey
                class="op"
                :singleKey="keyboard.show['key-backtick']"
                :class="{
                    highlighted: highlighted['key-backtick'] === 1,
                    error: highlighted['key-backtick'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-1']"
                :class="{
                    highlighted: highlighted['key-1'] === 1,
                    error: highlighted['key-1'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-2']"
                :class="{
                    highlighted: highlighted['key-2'] === 1,
                    error: highlighted['key-2'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-3']"
                :class="{
                    highlighted: highlighted['key-3'] === 1,
                    error: highlighted['key-3'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-4']"
                :class="{
                    highlighted: highlighted['key-4'] === 1,
                    error: highlighted['key-4'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-5']"
                :class="{
                    highlighted: highlighted['key-5'] === 1,
                    error: highlighted['key-5'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-6']"
                :class="{
                    highlighted: highlighted['key-6'] === 1,
                    error: highlighted['key-6'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-7']"
                :class="{
                    highlighted: highlighted['key-7'] === 1,
                    error: highlighted['key-7'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-8']"
                :class="{
                    highlighted: highlighted['key-8'] === 1,
                    error: highlighted['key-8'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-9']"
                :class="{
                    highlighted: highlighted['key-9'] === 1,
                    error: highlighted['key-9'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-0']"
                :class="{
                    highlighted: highlighted['key-0'] === 1,
                    error: highlighted['key-0'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-minus']"
                :class="{
                    highlighted: highlighted['key-minus'] === 1,
                    error: highlighted['key-minus'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-equal']"
                :class="{
                    highlighted: highlighted['key-equal'] === 1,
                    error: highlighted['key-equal'] === -1
                }"
            />
            <MagicKey
                class="backspace op"
                :singleKey="keyboard.show['key-backspace']"
                :class="{
                    highlighted: highlighted['key-backspace'] === 1,
                    error: highlighted['key-backspace'] === -1
                }"
            />
        </div>
        <div class="keyboardRow">
            <MagicKey
                class="tab op"
                :singleKey="keyboard.show['key-tab']"
                :class="{
                    highlighted: highlighted['key-tab'] === 1,
                    error: highlighted['key-tab'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-q']"
                :class="{
                    highlighted: highlighted['key-q'] === 1,
                    error: highlighted['key-q'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-w']"
                :class="{
                    highlighted: highlighted['key-w'] === 1,
                    error: highlighted['key-w'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-e']"
                :class="{
                    highlighted: highlighted['key-e'] === 1,
                    error: highlighted['key-e'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-r']"
                :class="{
                    highlighted: highlighted['key-r'] === 1,
                    error: highlighted['key-r'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-t']"
                :class="{
                    highlighted: highlighted['key-t'] === 1,
                    error: highlighted['key-t'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-y']"
                :class="{
                    highlighted: highlighted['key-y'] === 1,
                    error: highlighted['key-y'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-u']"
                :class="{
                    highlighted: highlighted['key-u'] === 1,
                    error: highlighted['key-u'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-i']"
                :class="{
                    highlighted: highlighted['key-i'] === 1,
                    error: highlighted['key-i'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-o']"
                :class="{
                    highlighted: highlighted['key-o'] === 1,
                    error: highlighted['key-o'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-p']"
                :class="{
                    highlighted: highlighted['key-p'] === 1,
                    error: highlighted['key-p'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-left-bracket']"
                :class="{
                    highlighted: highlighted['key-left-bracket'] === 1,
                    error: highlighted['key-left-bracket'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-right-bracket']"
                :class="{
                    highlighted: highlighted['key-right-bracket'] === 1,
                    error: highlighted['key-right-bracket'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-backslash']"
                :class="{
                    highlighted: highlighted['key-backslash'] === 1,
                    error: highlighted['key-backslash'] === -1
                }"
            />
        </div>
        <div class="keyboardRow">
            <MagicKey
                class="capslock op"
                :singleKey="keyboard.show['key-capslock']"
                :class="{
                    highlighted: capslock
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-a']"
                :class="{
                    highlighted: highlighted['key-a'] === 1,
                    error: highlighted['key-a'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-s']"
                :class="{
                    highlighted: highlighted['key-s'] === 1,
                    error: highlighted['key-s'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-d']"
                :class="{
                    highlighted: highlighted['key-d'] === 1,
                    error: highlighted['key-d'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-f']"
                :class="{
                    highlighted: highlighted['key-f'] === 1,
                    error: highlighted['key-f'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-g']"
                :class="{
                    highlighted: highlighted['key-g'] === 1,
                    error: highlighted['key-g'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-h']"
                :class="{
                    highlighted: highlighted['key-h'] === 1,
                    error: highlighted['key-h'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-j']"
                :class="{
                    highlighted: highlighted['key-j'] === 1,
                    error: highlighted['key-j'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-k']"
                :class="{
                    highlighted: highlighted['key-k'] === 1,
                    error: highlighted['key-k'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-l']"
                :class="{
                    highlighted: highlighted['key-l'] === 1,
                    error: highlighted['key-l'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-semicolon']"
                :class="{
                    highlighted: highlighted['key-semicolon'] === 1,
                    error: highlighted['key-semicolon'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-quote']"
                :class="{
                    highlighted: highlighted['key-quote'] === 1,
                    error: highlighted['key-quote'] === -1
                }"
            />
            <MagicKey
                class="enter op"
                :singleKey="keyboard.show['key-enter']"
                :class="{
                    highlighted: highlighted['key-enter'] === 1,
                    error: highlighted['key-enter'] === -1
                }"
            />
        </div>
        <div class="keyboardRow">
            <MagicKey
                class="shift op"
                :singleKey="keyboard.show['key-shift-left']"
                :class="{
                    highlighted: highlighted['key-shift-left'] === 1,
                    error: highlighted['key-shift-left'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-z']"
                :class="{
                    highlighted: highlighted['key-z'] === 1,
                    error: highlighted['key-z'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-x']"
                :class="{
                    highlighted: highlighted['key-x'] === 1,
                    error: highlighted['key-x'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-c']"
                :class="{
                    highlighted: highlighted['key-c'] === 1,
                    error: highlighted['key-c'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-v']"
                :class="{
                    highlighted: highlighted['key-v'] === 1,
                    error: highlighted['key-v'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-b']"
                :class="{
                    highlighted: highlighted['key-b'] === 1,
                    error: highlighted['key-b'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-n']"
                :class="{
                    highlighted: highlighted['key-n'] === 1,
                    error: highlighted['key-n'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-m']"
                :class="{
                    highlighted: highlighted['key-m'] === 1,
                    error: highlighted['key-m'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-comma']"
                :class="{
                    highlighted: highlighted['key-comma'] === 1,
                    error: highlighted['key-comma'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-period']"
                :class="{
                    highlighted: highlighted['key-period'] === 1,
                    error: highlighted['key-period'] === -1
                }"
            />
            <MagicKey
                :singleKey="keyboard.show['key-slash']"
                :class="{
                    highlighted: highlighted['key-slash'] === 1,
                    error: highlighted['key-slash'] === -1
                }"
            />
            <MagicKey
                class="shift op"
                :singleKey="keyboard.show['key-shift-right']"
                :class="{
                    highlighted: highlighted['key-shift-right'] === 1,
                    error: highlighted['key-shift-right'] === -1
                }"
            />
        </div>
        <div class="keyboardRow">
            <div class="spaceLeft">{{ leftInfo }}</div>
            <MagicKey
                class="space"
                :singleKey="keyboard.show['key-space']"
                :class="{
                    highlighted: highlighted['key-space'] === 1,
                    error: highlighted['key-space'] === -1
                }"
            />
            <div class="spaceRight">oimaster</div>
        </div>
    </div>
</template>

<script>
import Keys from '@/assets/keys.json';
import MagicKey from '@/components/MagicKeyboard/MagicKey.vue';

export default {
    name: 'MagicKeyboard',
    emits: ['input'],
    components: {
        MagicKey
    },
    props: {
        keyboard: {
            type: Object,
            required: true
        },
        leftInfo: {
            type: String,
            default: 'oimaster'
        }
    },
    data() {
        return {
            keys: Keys,
            capslock: false,
            highlighted: {}
        };
    },
    methods: {
        input(value) {
            this.$emit('input', value);
        },
        highlightKey(code) {
            var keyId = this.keys[code];
            if (!keyId) return;
            this.highlighted[keyId] = 1;
        },
        unHighlightKey(code) {
            var keyId = this.keys[code];
            if (!keyId) return;
            this.highlighted[keyId] = 0;
        },
        errorKey(code) {
            var keyId = this.keys[code];
            if (!keyId) return;
            this.highlighted[keyId] = -1;
        },
        handleKeyDown(event) {
            const keyCode = event.code;
            const hasShift = event.shiftKey;
            const hasMeta = event.metaKey;
            const hasAlt = event.altKey;
            const hasCtrl = event.ctrlKey;
            if (hasMeta || hasAlt || hasCtrl) return;
            if (keyCode === 'CapsLock') {
                this.capslock = !this.capslock;
            } else if (keyCode.startsWith('Shift')) {
                this.highlightKey(keyCode);
            } else {
                var keyId = this.keys[keyCode];
                if (!keyId) return;
                var content = this.keyboard.type[keyId];
                var finalContent = '';
                if (hasShift && content.shift) {
                    finalContent = content.shift;
                } else if ((hasShift || this.capslock) && content.capslock) {
                    finalContent = content.capslock;
                } else {
                    finalContent = content.default;
                }
                // console.log(this.capslock, hasShift, content, finalContent);
                if (finalContent) {
                    this.input(finalContent);
                    this.highlightKey(keyCode);
                } else {
                    this.errorKey(keyCode);
                }
            }
            event.preventDefault();
        },
        handleKeyUp(event) {
            const keyCode = event.code;
            if (!this.keys[keyCode]) return;
            this.unHighlightKey(keyCode);
        },
        handleResize() {
            const keyboard = document.getElementById('keyboard');
            keyboard.style.height = `${Math.max(
                keyboard.offsetWidth / 3,
                250
            )}px`;
        }
    },
    mounted() {
        this.capslock = false;
        addEventListener('keydown', this.handleKeyDown);
        addEventListener('keyup', this.handleKeyUp);
        addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeUnmount() {
        removeEventListener('keydown', this.handleKeyDown);
        removeEventListener('keyup', this.handleKeyUp);
        removeEventListener('resize', this.handleResize);
    }
};
</script>

<style scoped>
div.keyboard {
    margin: 15px auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 30px;
    background-color: #f2f2f2;
    box-shadow:
        0px 0px 20px rgba(0, 0, 0, 0.2),
        0px 0px 10px rgba(0, 0, 0, 0.1);
    font-family: monospace;
}

@media (max-width: 420px) {
    div.keyboard {
        display: none;
    }
}

div.keyboardRow {
    flex: 20%;
    display: flex;
    justify-content: space-between;
}

div.key.op {
    font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Open Sans',
        'Helvetica Neue',
        sans-serif;

    background-color: #eeeeee;
}

rt {
    font-size: 16px;
}

div.backspace,
div.tab {
    flex: 1.5;
}

div.capslock,
div.enter {
    flex: 1.7;
}

div.shift {
    flex: 2.2;
}

div.space {
    flex: 5;
}

div.spaceLeft {
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
}

div.spaceRight {
    flex: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
}

div.highlighted {
    transition: ease-in-out 0.1s;
    background-color: #333 !important;
    color: white;
}

div.error {
    transition: ease-in-out 0.1s;
    background-color: #cc0000 !important;
    color: white;
}

@media (prefers-color-scheme: dark) {
    div.keyboard {
        background-color: #222;
        box-shadow:
            0px 0px 20px rgba(255, 255, 255, 0.2),
            0px 0px 10px rgba(255, 255, 255, 0.1);
    }

    div.key.op {
        background-color: #222;
    }

    div.highlighted {
        background-color: #ccc !important;
        color: black;
    }
    div.error {
        background-color: #ff0000 !important;
        color: white;
    }

    div.spaceLeft, div.spaceRight {
        color: #444;
    }
}
</style>
