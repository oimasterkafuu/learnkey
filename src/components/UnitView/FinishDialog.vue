<template>
    <BoomDialog :header="header" :content="content" />
</template>

<script>
import BoomDialog from './BoomDialog.vue';

export default {
    name: 'PageFooter',
    components: {
        BoomDialog
    },
    data() {
        return {
            headers: [
                '太棒了！',
                '好！',
                '妙啊！',
                '干得漂亮！',
                '你真棒！',
                '我们佩服得五体投地！',
                '你是最棒的！',
                '泰裤辣！',
                '我整个人都被震撼了！',
                '高手！',
                '轻轻松松！'
            ],
            contents: [
                '你完成了这个单元。',
                '你轻轻松松地通过了这个单元！',
                '这点难度对你来说太简单了！',
                '你的水平已经远远超过了这个单元！',
                '我还没见过像你这么厉害的人呢！',
                '我的饼干还没拿出来，你就完成啦？！',
                '吓得我零食都掉了一地！'
            ]
        };
    },
    computed: {
        header() {
            return this.headers[Math.floor(Math.random() * this.headers.length)];
        },
        content() {
            return this.contents[Math.floor(Math.random() * this.contents.length)];
        }
    }
};
</script>
