<template>
    <v-navigation-drawer permanent app>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h4">
                    电影空间
                </v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-1">
                    Space Of Movie
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list shaped nav>
            <v-list-item-group v-model="defaultSelect">
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    color="pink"
                    height="270px"
                    @click="handleClickSiderItem(item)"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "web-sider",
    data() {
        return {
            defaultSelect: 0,
            items: [
                { key: "movies", title: "电影", icon: "mdi-view-dashboard" },
                { key: "tvs", title: "电视剧", icon: "mdi-image" },
                { key: "about", title: "关于", icon: "mdi-help-box" },
            ],
        };
    },
    methods: {
        handleClickSiderItem(item) {
            this.$router.push('/' + item.key)
        }
    }
};
</script>

<style>
</style>