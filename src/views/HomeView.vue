<template>
    <PageHeader title="欢迎来到 Learn Key" :description="aisatsu" />
    <main>
        <SelectBar :options="options" @selected="optionSelected" v-if="loaded" />
    </main>
    <SpinLoader v-if="!loaded" />
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import SelectBar from '@/components/SelectBar.vue';
import SpinLoader from '@/components/SpinLoader.vue';

export default {
    name: 'HomeView',
    components: {
        PageHeader,
        SelectBar,
        SpinLoader
    },
    data() {
        return {
            options: [],
            loaded: false
        };
    },
    computed: {
        aisatsu() {
            const now = new Date();
            const hour = now.getHours();
            if (hour > 3 && hour < 7) {
                return '这么早就来看我啦？是有什么高兴的事吗？';
            } else if (hour < 9) {
                return '一日之际在于晨，要不来练个单元？';
            } else if (hour < 12) {
                return '今天一天也要加油哦！';
            } else if (hour < 13) {
                return '睡一个午觉，能让人下午更有精神哦！';
            } else if (hour < 17) {
                return '今天的单元练习做完了吗？';
            } else if (hour < 19) {
                return '一天的工作辛苦了！';
            } else if (hour < 22) {
                return '晚上好，一天过得真快呀！';
            } else {
                return '熬夜对身体不太好，偶尔一次也是挺有意思的呢！';
            }
        }
    },
    methods: {
        async fetchOptions() {
            const response = await fetch('/lessons/oimaster.json');
            const data = await response.json();
            this.options = data;
            this.loaded = true;
        },
        optionSelected(index) {
            this.$router.push(`/lesson/${index}`);
        }
    },
    mounted() {
        this.fetchOptions();
    }
};
</script>
