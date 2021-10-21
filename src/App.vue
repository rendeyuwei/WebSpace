<template>
    <v-app>
        <web-sider></web-sider>

        <v-main>
            <router-view />
        </v-main>
        
    </v-app>
</template>

<script>
import WebSider from './components/WebSider.vue';

export default {
    name: "App",

    components: {
        WebSider,
    },

    data: () => ({
        //
    }),
};
</script>

<style lang="scss">

</style>
