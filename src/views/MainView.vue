<template>
    <v-carousel cycle height="700" hide-delimiters show-arrows="hover">
        <v-carousel-item v-for="(aktualny_text, i) in text" :key="i">
            <v-sheet height="100%" style="background-color: #efefef;">
                <div class="container">
                    <div class="row p-5">
                        <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img class="img-fluid" style="opacity: 0.55; border-radius: 20px;" :src="`/src/assets/img/slide_${i + 1}.jpg`" alt="">
                        </div>
                        <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left align-self-center">
                                <h1 class="h1 text-success"><b>{{ title[i] }}</b></h1>
                                <p>{{ aktualny_text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>


    <section class="container py-5">
        <div class="row text-center pt-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1"><b>Fragrances of The Year</b></h1>
                <p>
                    Each year brings a unique olfactory experience, featuring a carefully chosen collection of perfumes or
                    candles that embody a particular theme or mood. Subscribers eagerly anticipate the unveiling of these
                    aromatic treasures, exploring new fragrances that add a touch of luxury and sophistication to their
                    daily lives.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 p-5 mt-3" v-for="(img_name, fragrance) in top_fragnance" :key="fragrance">
                <img :src="'/src/assets/img/' + img_name" class="rounded-circle img-fluid border">
                <h5 class="text-center mt-3 mb-3">{{ fragrance }}</h5>
            </div>
            <p class="text-center"><router-link to="/shop" class="btn btn-success">Shop</router-link></p>
        </div>
    </section>

    <section class="bg-light">
        <div class="container py-5">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1"><b>Discount</b></h1>
                    <p>
                        Unlock free shipping! Enjoy an exclusive welcome discount on your order.
                    </p>
                </div>
            </div>

            <CountDown :time="time" v-slot="{ days, hours, minutes, seconds }">
                <div class="row">
                    <div class="col-md-3" v-for="(unit, index) in timeUnits" :key="unit.label">
                        <div class="card">
                            <div class="card-body text-center">
                                <p class="card-text">{{ [days, hours, minutes, seconds][index] }}</p>
                                <h5 class="card-title">{{ unit }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </CountDown>

            <v-item-group selected-class="bg-primary" style="padding-top: 20px; padding-bottom: 30px;">
                <v-item v-slot="{ }">
                    <v-card :class="['d-flex align-center']" height="100" @click="copy">
                        <div class="text-h3 flex-grow-1 text-center" style="font-size: 30px !important;">
                            {{ clicked ? 'Copied!' : 'Use code: VERSACE' }}
                        </div>
                    </v-card>
                </v-item>
            </v-item-group>
        </div>
    </section>
</template>

<script>
import CountDown from '@chenfengyuan/vue-countdown';
export default {
    data() {
        const actualDate = new Date();
        const discount = new Date(2024, 6, 7, 12, 0);
        return {
            clicked: false,
            time: discount - actualDate,
            title: [
                'Discover the Signature Fragrances Redefining Your Everyday Style',
                'The Essence of Elegance',
                'Choose us',
                'A Tale of Luxury at Our Bratislava Flagship Store and Online E-Store'
            ],
            text: [
                'Elevate your everyday with the enchanting aromas of our signature fragrances. Unveil a world of olfactory delights that not only complement your style but also define it. Our diverse collection ensures there is a perfect scent for every mood and occasion.',
                "Fragrances play a pivotal role in our lives, transcending mere scents to become powerful expressions of individuality and personality. Firstly, they enhance our personal allure, leaving a lasting impression on those around us. The right fragrance has the ability to evoke memories and emotions, creating a sensory experience that lingers in the minds of others. Additionally, perfumes can boost confidence, acting as a subtle yet impactful accessory that complements one's style.",
                "Choosing us means embracing a world of unparalleled olfactory sophistication and refinement. Our commitment to quality ensures that each fragrance is meticulously crafted, embodying the epitome of luxury and elegance. With a diverse collection curated for every mood and occasion, we guarantee you'll find the perfect scent to complement your unique style.",
                "Experience the charm of our flagship store in Bratislava, where a sensory journey awaits you amidst opulent displays of our exclusive fragrances, allowing you to immerse yourself in a world of olfactory delight. For the convenience of a seamless shopping experience, explore our e-store from the comfort of your home, where the same level of quality and sophistication is just a click away."
            ],
            top_fragnance: {
                'BVLGARI': 'bvlgari.webp',
                'Versace Eros': 'versace.jpg',
                'Dior Sauvage': 'dior.webp'
            },
            timeUnits: ["DAYS", "HOURS", "MINUTES", "SECONDS"],
        }
    },
    components: {
        CountDown
    },
    methods: {
        copy() {
            if (this.clicked === false) {
                this.clicked = !this.clicked;
                navigator.clipboard.writeText("VERSACE");
            }
        }
    }
}
</script>

<style scoped>
.card-text {
    font-size: 50px !important;
}
</style>