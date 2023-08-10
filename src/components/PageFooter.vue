<template>
    <footer>
        <span>
            版本
            <a :href="'https://github.com/oimasterkafuu/learnkey/releases/tag/' + version"> {{ versionFull }} </a>，
            使用 <a href="https://github.com/oimasterkafuu/learnkey/blob/master/LICENSE">MIT</a> 协议开源
        </span>
        <span>
            <span v-if="offline" class="offline-message">
                <OfflineSVG />
                您目前处于离线状态，
            </span>
            &copy; {{ copyright }}
            <a href="https://github.com/oimasterkafuu/">oimasterkafuu</a>
        </span>
    </footer>
</template>

<script>
import OfflineSVG from './PageFooter/OfflineSVG.vue';

export default {
    name: 'PageFooter',
    components: {
        OfflineSVG
    },
    data() {
        return {
            appVersion: process.env.VUE_APP_VERSION,
            offline: navigator.onLine === false
        };
    },
    computed: {
        copyright() {
            const startYear = 2023;
            const currentYear = new Date().getFullYear();
            return `${startYear}${startYear !== currentYear ? `-${currentYear}` : ''}`;
        },
        version() {
            return 'v' + this.appVersion;
        },
        versionFull() {
            var versionArr = this.appVersion.split('.');
            var result = this.version;
            if (versionArr[0] < 1) {
                result += '-beta';
            }
            return result;
        }
    }
};
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
a {
    font-size: 15px;
    color: unset;
    text-decoration: underline #ddd;
    transition: text-decoration 0.3s ease-in-out;
}
a:hover {
    text-decoration: underline #000;
}

.offline-message svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.2em;
    vertical-align: middle;
}

@media (prefers-color-scheme: dark) {
    a {
        text-decoration-color: #777;
    }
    a:hover {
        text-decoration-color: #fff;
    }
}
</style>
