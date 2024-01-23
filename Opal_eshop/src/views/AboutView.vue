<template>
    <section class="bg-success py-5">
        <div class="container">
            <div class="row align-items-center py-5">
                <div class="col-md-8 text-white">
                    <h1>About Us</h1>
                    <p>
                        Welcome to our world of exquisite fragrances, where each scent tells a story. At E-parfumeria, we are passionate about crafting unique and memorable aromas that enhance every moment of your day. Our journey began with a vision to blend traditional perfumery art with modern innovation, resulting in a collection of fragrances that are both timeless and contemporary. We pride ourselves on using only the finest ingredients, sourced from around the globe, to ensure the highest quality in every bottle. Our team of expert perfumers is dedicated to creating scents that evoke emotions and create lasting impressions. Thank you for choosing us to be a part of your fragrance journey, where every scent is a new discovery.
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="/src/assets/img/about-hero.svg" alt="About">
                </div>
            </div>
        </div>
    </section>

    <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
            <div class="col-lg-6 m-auto">
                <h1 class="h1">Our Services</h1>
                <p>
                    Our Services offer an unparalleled selection of handcrafted fragrances, personalized scent consultations, and exceptional customer care.
                </p>
            </div>
        </div>
        <div class="row pb-10">
            <ServicesCard v-for="item in services" :content="item"></ServicesCard>
        </div>

    </section>
    <div class="bg-light pt-10">
        <Brands/>
    </div>
</template>

<script>
import ServicesCard from '@/components/ServicesCard.vue';
import Brands from '@/components/BrandsCarousel.vue';

export default {
data() {
    return {
        services: [
            {
                class: 'fa fa-truck fa-lg',
                text: 'Delivery Services'
            },
            {
                class: 'fas fa-exchange-alt',
                text: 'Shipping & Return'
            },
            {
                class: 'fa fa-percent',
                text: 'Promotion'
            },
            {
                class: 'fa fa-user',
                text: '24 Hours Service'
            }
        ]
    };
    
},
    components: {
        ServicesCard, Brands
    },
}

</script>

