<template>
    <div class="viewer">
        <div class="viewer-main">
            <span v-for="(content, index) in render" :key="index">
                <span v-if="typeof content.char === 'string'" :class="{ finished: content.finished }">
                    <del v-for="(more, ind) in content.more" :key="ind">
                        {{ more }}
                    </del>
                    <span>
                        {{ content.char }}
                    </span>
                </span>
                <ruby
                    v-else
                    :class="{
                        finished: content.finished[content.finished.length - 1]
                    }"
                >
                    <span
                        :class="{
                            typing: !content.finished[content.finished.length - 1] && content.finishNum
                        }"
                        :style="{
                            '--finished': Math.round((content.finishNum / content.finished.length) * 100) + '%'
                        }"
                    >
                        {{ content.char[0] }}
                    </span>

                    <rt>
                        <span
                            v-for="(char, index) in content.char[1]"
                            :key="index"
                            :class="{ finished: content.finished[index] }"
                        >
                            <del v-for="(more, ind) in content.more[index]" :key="ind">
                                {{ more }}
                            </del>
                            <span>
                                {{ char }}
                            </span>
                        </span>
                    </rt>
                </ruby>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MagicViewer',
    props: {
        row: {
            type: [String, Array],
            required: true
        },
        currInput: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            render: [],
            newRow: []
        };
    },
    computed: {
        finished() {
            var result = 0;
            var currIndex = 0;
            for (var i of this.newRow) {
                if (typeof i === 'string') {
                    for (let j of i) {
                        if (this.currInput[currIndex] != j) {
                            return result - 1;
                        }
                        ++currIndex;
                        ++result;
                    }
                } else if (Array.isArray(i)) {
                    for (let j of i[1]) {
                        if (this.currInput[currIndex] != j) {
                            return result - 1;
                        }
                        ++currIndex;
                        ++result;
                    }
                }
            }
            return result - 1;
        }
    },
    methods: {
        autoSize() {
            var viewerWidth = this.$el.offsetWidth - 32;
            var viewerMainWidth = this.$el.querySelector('.viewer-main').scrollWidth;
            var widthScale = viewerWidth / viewerMainWidth;

            // var viewerHeight = this.$el.offsetHeight - 32;
            // var viewerMainHeight =
            //     this.$el.querySelector('.viewer-main').scrollHeight;
            // var heightScale = viewerHeight / viewerMainHeight;

            // console.log('width', viewerWidth, viewerMainWidth, widthScale);
            // console.log('height', viewerHeight, viewerMainHeight, heightScale);

            // var scale = Math.min(widthScale, heightScale);
            var scale = widthScale;

            var currScale = parseFloat(getComputedStyle(this.$el.querySelector('.viewer-main')).fontSize);

            var targetSize = Math.min(32, scale * currScale);

            this.$el.querySelector('.viewer-main').style.fontSize = targetSize + 'px';
        }
    },
    mounted() {
        this.newRow = this.row;
        if (typeof this.newRow === 'string') this.newRow = [this.newRow];

        var finished = this.finished;
        var curr = 0;
        for (var i = 0; i < this.newRow.length; ++i) {
            if (typeof this.newRow[i] === 'string') {
                for (var j = 0; j < this.newRow[i].length; ++j) {
                    this.render.push({
                        char: this.newRow[i][j],
                        finished: curr <= finished,
                        more: curr === finished + 1 ? this.currInput.slice(curr) : ''
                    });
                    ++curr;
                }
            } else if (Array.isArray(this.newRow[i])) {
                var finishArray = [];
                var finishNum = 0;
                for (var _j = 0; _j < this.newRow[i][1].length; ++_j) {
                    finishArray.push({
                        finished: curr <= finished,
                        more: curr === finished + 1 ? this.currInput.slice(curr) : ''
                    });
                    if (curr <= finished) ++finishNum;
                    ++curr;
                }
                this.render.push({
                    char: this.newRow[i],
                    finishNum,
                    finished: finishArray.map((x) => x.finished),
                    more: finishArray.map((x) => x.more)
                });
            }
        }
        // console.log(this.render);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.autoSize);
    },
    updated() {
        this.autoSize();
        window.addEventListener('resize', this.autoSize);
    }
};
</script>

<style scoped>
.viewer {
    width: 100%;
    margin: 15px auto;
    font-size: 2em;
    border-radius: 2em;
    padding: 0.5em;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.viewer-main {
    white-space: nowrap;
    overflow: hidden;
}

rt {
    font-size: 0.7em;
}

.finished {
    color: #008800;
}
del {
    color: #cc0000;
    white-space: pre;
}
span.typing {
    background: linear-gradient(to right, #008800 0%, #008800 var(--finished), #000000 var(--finished), #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media (prefers-color-scheme: dark) {
    .viewer {
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
        background-color: #333333;
    }

    .finished {
        color: #00cc00;
    }
    del {
        color: #ff0000;
    }

    span.typing {
        background: linear-gradient(
            to right,
            #00cc00 0%,
            #00cc00 var(--finished),
            #000000 var(--finished),
            #000000 100%
        );
    }
}
</style>
