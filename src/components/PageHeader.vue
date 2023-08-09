<template>
    <header>
        <h1 class="title">{{ title }}</h1>
        <p class="description">
            <span class="inner-description">{{ description }}</span>
        </p>
    </header>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.title {
    flex: 0.6;
    text-align: center;
}

.description {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inner-description {
    text-align: left;
}

@media (prefers-color-scheme: dark) {
    header {
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
    }
}

@media (max-width: 600px) {
    header {
        flex-direction: column;
    }

    .title {
        flex: 1;
    }
}
</style>
