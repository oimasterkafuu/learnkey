<template>
    <router-view />
    <PageFooter />
</template>

<script>
import '@/assets/style.css';
import PageFooter from '@/components/PageFooter.vue';
export default {
    name: 'App',
    components: {
        PageFooter
    }
};

console.log(
    '%cMade by oimaster with ❤️',
    'color: #8db3f1; font-size: 2em; font-weight: bold;'
);
</script>
