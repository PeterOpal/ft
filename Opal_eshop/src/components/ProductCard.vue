<template>
    <div class="col-md-3">
        <div class="card mb-4 product-wap rounded-0">
            <div class="card rounded-0">
                <img class="card-img rounded-0 img-fluid" :src="fragrance.image">
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
     
                        <li><router-link class="btn btn-success text-white mt-2" :to="'/shop/' + fragrance.id"
                                :key="fragrance.id"><i class="far fa-eye"></i></router-link></li>
                        <li><button class="btn btn-success text-white mt-2"
                                @click="cartStore.addItemToCart(fragrance.id)"><i class="fas fa-cart-plus"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <router-link class="h3 text-decoration-none greenhover" :to="'/shop/' + fragrance.id" :key="fragrance.id"><strong>{{
                    fragrance.fragrance_name }}</strong> 
                </router-link>
                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>category: {{ fragrance.gender }}</li>
                </ul>
                <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                        <Rating :rating="fragrance.rating" />
                    </li>
                </ul>
                <p class="text-center mb-0">{{ fragrance.price }}€</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.greenhover:hover{
    color: green;
}
</style>

<script>
import { useCartStore } from '../stores/CartStore';
import Rating from '@/components/Rating.vue';
export default {
    props: {
        fragrance: {
            type: Object,
            required: true,
        },
    },
    created() {
        this.cartStore = useCartStore();
    },
    components:{
        Rating
    }
}
</script>