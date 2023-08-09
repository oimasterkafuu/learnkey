<template>
    <PageHeader :title="lessonTitle" :description="lessonDescription" />
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
    name: 'LessonView',
    components: {
        PageHeader,
        SelectBar,
        SpinLoader
    },
    data() {
        return {
            lessonTitle: '',
            lessonDescription: '',
            id: this.$route.params.id,
            options: [],
            loaded: false
        };
    },
    methods: {
        async fetchTitle() {
            try {
                const response = await fetch('/lessons/oimaster.json');
                const data = await response.json();
                if (!data[this.id]) {
                    throw new Error('Invalid lesson id');
                }
                this.lessonTitle = data[this.id].title;
                this.lessonDescription = data[this.id].description;
                this.fetchOptions();
            } catch (error) {
                // console.log(error.message);
                this.$router.push('/');
                return;
            }
        },
        async fetchOptions() {
            const response = await fetch(`/lessons/${this.id}/oimaster.json`);
            const data = await response.json();
            this.options = data;
            this.loaded = true;
        },
        optionSelected(index) {
            this.$router.push(`/lesson/${this.id}/${index}`);
        }
    },
    mounted() {
        this.fetchTitle();
    }
};
</script>
