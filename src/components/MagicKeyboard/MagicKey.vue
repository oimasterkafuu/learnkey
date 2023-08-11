<template>
    <div class="key">
        <span v-if="typeof singleKey === 'string'">
            <BackspaceIcon v-if="singleKey === 'Backspace'" />
            <CapslockIcon v-else-if="singleKey === 'Capslock'" />
            <ControlIcon v-else-if="singleKey === 'Control'" />
            <EnterIcon v-else-if="singleKey === 'Enter'" />
            <ShiftIcon v-else-if="singleKey === 'Shift'" />
            <TabIcon v-else-if="singleKey === 'Tab'" />
            <span v-else>{{ singleKey }}</span>
        </span>
        <ruby v-else>
            {{ singleKey[0] }}
            <rt>{{ singleKey[1] }}</rt>
        </ruby>
    </div>
</template>

<script>
import BackspaceIcon from '../SVGs/BackspaceIcon.vue';
import CapslockIcon from '../SVGs/CapslockIcon.vue';
import ControlIcon from '../SVGs/ControlIcon.vue';
import EnterIcon from '../SVGs/EnterIcon.vue';
import ShiftIcon from '../SVGs/ShiftIcon.vue';
import TabIcon from '../SVGs/TabIcon.vue';

export default {
    name: 'MagicKey',
    components: {
        BackspaceIcon,
        CapslockIcon,
        ControlIcon,
        EnterIcon,
        ShiftIcon,
        TabIcon
    },
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
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow:
        0px 0px 5px rgba(0, 0, 0, 0.2),
        0px 0px 2px rgba(0, 0, 0, 0.1);
    font-size: 24px;
}

div.highlighted {
    transition: ease-in-out 0.1s;
    background-color: #333 !important;
    color: white;
}
div.error {
    transition: ease-in-out 0.1s;
    background-color: #cc0000 !important;
    color: white;
}
div.highlighted svg,
div.error svg {
    transition: ease-in-out 0.1s;
    fill: white;
}

@media (prefers-color-scheme: dark) {
    div.key {
        border: 1px solid #fff;
        background-color: #333;
        box-shadow:
            0px 0px 5px rgba(255, 255, 255, 0.2),
            0px 0px 2px rgba(255, 255, 255, 0.1);
    }
    div.highlighted {
        background-color: #ccc !important;
        color: black;
    }
    div.error {
        background-color: #ff0000 !important;
        color: white;
    }

    div.highlighted svg {
        transition: ease-in-out 0.1s;
        fill: black;
    }
}
</style>
