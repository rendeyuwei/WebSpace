<template>
    <v-carousel
        v-model="model"
        class="movieCarousel"
        hide-delimiter-background
        style="height: 400px"
    >
        <v-carousel-item
            v-for="(item, i) in popularMoviesImages"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
import { getHotMovies } from "@/api/movies";
import axios from "axios";
export default {
    data: () => {
        return {
            model: 0,
            popularMoviesImages: [],
            popularMovies: [],
            api_key: "",
        };
    },
    created() {
        axios.get("/config.json").then((res) => {
            this.api_key = res.data.api_key;
            let params = {
                api_key: this.api_key,
                language: "en-US",
                page: 1,
            };
            getHotMovies(params)
                .then((result) => {
                    this.popularMovies = result.data.results;
                    this.getPopularMovieImages();
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    },
    methods: {
        getPopularMovieImages() {
            for (let i = 0; i < 4; i++) {
                this.popularMoviesImages.push({
                    src:
                        "https://image.tmdb.org/t/p/original" +
                        this.popularMovies[i]["backdrop_path"],
                });
            }
        },
    },
};
</script>

<style>
.movieCarousel {
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>