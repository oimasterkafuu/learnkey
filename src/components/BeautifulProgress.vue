<template>
    <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progress * 100 + '%' }">
            <div class="progress-text" v-if="Math.round(progress * 100) > 0">{{ Math.round(progress * 100) }}%</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BeautifulProgress',
    props: {
        progress: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped>
.progress {
    height: 0.5rem;
    width: 100%;
    background-color: #e9ecef;
    border-radius: 0.25rem;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #000000;
    transition: width 0.6s ease;
}

.progress-text {
    margin-left: auto;
    font-size: 0.5rem;
}

@media (prefers-color-scheme: dark) {
    .progress {
        background-color: #333333;
    }
    .progress-bar {
        background-color: #ffffff;
    }

    .progress-text {
        color: #000000;
    }
}
</style>
