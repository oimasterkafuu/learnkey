<template>
    <div class="boom-mask" @click="back">
        <div class="boom-main">
            <h1>
                {{ header }}
            </h1>
            <p>{{ content }}点击任意位置返回。</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BoomDialog',
    props: {
        header: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    methods: {
        back() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>
.boom-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    z-index: 9999;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
.boom-main {
    color: #fff;
}

@media (prefers-color-scheme: dark) {
    .boom-mask {
        background-color: rgba(255, 255, 255, 0.3);
    }
}
</style>
