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
            <v-list-item-group>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    color="pink"
                    height="270px"
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
            items: [
                { title: "电影", icon: "mdi-view-dashboard" },
                { title: "电视剧", icon: "mdi-image" },
                { title: "关于", icon: "mdi-help-box" },
            ],
            right: null,
        };
    },
};
</script>

<style>
</style>