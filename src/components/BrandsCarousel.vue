<template>
    <section class="container">
        <div class="row text-center pt-5">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Our Brands</h1>
                <p>
                    Discover the essence of luxury with our exclusive collection of premium brands, where each fragrance tells a story of sophistication and allure.
                </p>
            </div>
        </div>

    </section>
    <v-carousel hide-delimiters>
        <v-carousel-item>
            <v-row justify="center" class="fill-height makeItCenter">
                <v-col cols="12" md="3" class="d-flex justify-center" v-for="image_path in first_slideshowImages" :key="image_path">
                    <v-card class="mx-auto" width="400" height="400" :image="image_path"></v-card>
                </v-col>
            </v-row>
        </v-carousel-item>

        <v-carousel-item>
            <v-row justify="center" class="fill-height makeItCenter">
                <v-col cols="12" md="3" class="d-flex justify-center" v-for="image_path in second_slideshowImages" :key="image_path">
                    <v-card class="mx-auto" width="400" height="400" :image="image_path"></v-card>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>
  
<style scoped>
.makeItCenter {
    align-items: center;
}
</style>
  

<script>
export default {
    data() {
        return {
            first_slideshowImages: [
                '/src/assets/img/brands/versace.jpg',
                '/src/assets/img/brands/gucci.webp',
                '/src/assets/img/brands/tf.jpg'
            ],
            second_slideshowImages: [
                '/src/assets/img/brands/dior.jpg',
                '/src/assets/img/brands/prada.jpg',
                '/src/assets/img/brands/dolce.webp'
            ],
        }
    },
}
</script>