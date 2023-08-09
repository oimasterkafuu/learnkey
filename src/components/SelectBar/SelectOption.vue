<template>
    <div class="select-option">
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'SelectOption',
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
.select-option {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: box-shadow 0.3s ease-in-out;
}

.title {
    margin: 0;
    font-size: 20px;
}

.description {
    margin: 0;
    color: #666;
}

.select-option:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}

@media (prefers-color-scheme: dark) {
    .select-option {
        border-color: #555;
        background-color: #222;
    }

    .title {
        color: #fff;
    }

    .description {
        color: #ccc;
    }

    .select-option:hover {
        box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.5);
    }
}
</style>
