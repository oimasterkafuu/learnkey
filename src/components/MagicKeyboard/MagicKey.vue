<template>
    <div class="key">
        <div v-if="typeof singleKey === 'string'">{{ singleKey }}</div>
        <ruby v-else>
            {{ singleKey[0] }}
            <rt>{{ singleKey[1] }}</rt>
        </ruby>
    </div>
</template>

<script>
export default {
    name: 'MagicKey',
    props: {
        singleKey: {
            type: [String, Array],
            required: true
        }
    }
};
</script>

<style scoped>
div.key {
    flex: 1;
    margin: 2px;
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow:
        0px 0px 5px rgba(0, 0, 0, 0.2),
        0px 0px 2px rgba(0, 0, 0, 0.1);
    font-size: 24px;
}

@media (prefers-color-scheme: dark) {
    div.key {
        border: 1px solid #fff;
        background-color: #333;
        box-shadow:
            0px 0px 5px rgba(255, 255, 255, 0.2),
            0px 0px 2px rgba(255, 255, 255, 0.1);
    }
}
</style>
