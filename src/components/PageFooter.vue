<template>
    <footer>Version {{ version }}, &copy; {{ copyright }} oimasterkafuu</footer>
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
        },
        version() {
            var version = process.env.VUE_APP_VERSION;
            var versionArr = version.split('.');
            if (versionArr[0] < 1) {
                version += '-beta';
            }
            return 'v' + version;
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
