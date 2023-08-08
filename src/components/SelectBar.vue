<template>
    <div class="select-bar">
        <SelectOption
            v-for="(option, index) in options"
            :key="index"
            :title="option.title"
            :description="option.description"
            @click="emitSelected(index)"
        />
    </div>
</template>

<script>
import SelectOption from './SelectBar/SelectOption.vue';

export default {
    name: 'SelectBar',
    components: {
        SelectOption
    },
    props: {
        options: {
            type: Object,
            required: true
        }
    },
    methods: {
        emitSelected(index) {
            // console.log(index);
            this.$emit('selected', index);
        }
    }
};
</script>

<style scoped>
.select-bar {
    height: 100%;
}
</style>
