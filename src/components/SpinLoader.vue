<template>
    <div class="loading-mask">
        <div class="loading-spinner"></div>
    </div>
</template>

<script>
export default {
    name: 'SpinLoader'
};
</script>

<style scoped>
/* Add loading mask animation */
.loading-mask {
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

.loading-spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #333;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@media (prefers-color-scheme: dark) {
    .loading-mask {
        background-color: rgba(255, 255, 255, 0.3);
    }

    .loading-spinner {
        border: 16px solid #333;
        border-top: 16px solid #fff;
    }
}
</style>
