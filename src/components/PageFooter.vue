<template>
    <footer>&copy; {{ copyright }} oimasterkafuu</footer>
</template>

<script>
export default {
    name: 'PageFooter',
    computed: {
        copyright() {
            const startYear = 2023;
            const currentYear = new Date().getFullYear();
            return `${startYear}${
                startYear !== currentYear ? `-${currentYear}` : ''
            }`;
        }
    }
};
</script>

<style scoped>
footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>
