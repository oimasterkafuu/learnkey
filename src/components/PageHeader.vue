<template>
    <header>
        <router-link class="back-icon" v-if="prepath" :to="prepath">
            <BackIcon />
        </router-link>
        <span class="back-icon" v-else>
            <HomeIcon />
        </span>
        <h1 class="title">{{ title }}</h1>
        <p class="description">
            <span class="inner-description">{{ description }}</span>
        </p>
    </header>
</template>

<script>
import BackIcon from './SVGs/BackIcon.vue';
import HomeIcon from './SVGs/HomeIcon.vue';

export default {
    name: 'PageHeader',
    components: {
        BackIcon,
        HomeIcon
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        prepath: {
            type: String,
            default: ''
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

.back-icon {
    cursor: pointer;
    transition: scale 0.2s ease-in-out;
}

.back-icon svg {
    fill: #ccc;
    transition: fill 0.2s ease-in-out;
}

.back-icon:hover svg {
    fill: #000;
}
a.back-icon:hover {
    scale: 1.1;
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
    .back-icon svg {
        fill: #444;
    }
    .back-icon:hover svg {
        fill: #fff;
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
