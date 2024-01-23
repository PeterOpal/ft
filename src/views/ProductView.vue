<template>
    <section class="bg-light">

        <div class="container pb-5">
            <div v-if="error">
                <div class="row text-center" style="padding-bottom: 200px; padding-top: 200px;">
                    <h1>Error!</h1>
                    <h4 class="text-warning">Product was removed!</h4>
                </div>
            </div>

            <div v-else class="row">
                <div class="col-lg-5 mt-5 pt-8">
                    <div class="card mb-3">
                        <img class="card-img img-fluid" :src="actualFragrance.image" alt="Card image cap"
                            id="product-detail" style="border: 3px solid rgb(0, 0, 0)">
                    </div>
                </div>

                <div class="col-lg-7 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="h2" style="font-family: Comic Sans MS, cursive"> {{ actualFragrance.fragrance_name }} </h1>
                            <p class="h3 py-2">{{ actualFragrance.price }}€</p>
                            <Rating :rating="actualFragrance.rating" />
                            <span class="list-inline-item text-dark"> - rating by fragratica magazine</span>
                            
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <h6>Brand:</h6>
                                </li>
                                <li class="list-inline-item">
                                    <p class="text-muted"><strong>{{ actualFragrance.company }}</strong></p>
                                </li>
                            </ul>

                            <h6>Description:</h6>
                            <p>{{ actualFragrance.description }}</p>

                            <h6>Specification:</h6>
                            <ul class="list-unstyled pb-3">
                                <li>for {{ actualFragrance.gender }}, quantity: {{ actualFragrance.quantity }}</li>
                            </ul>

                            <div class="row">
                                <div class="col-auto">
                                    <ul class="list-inline pb-3">
                                        <li class="list-inline-item text-right">Quantity
                                            <input type="hidden" name="product-quanity" id="product-quanity" value="1">
                                        </li>
                                        <li class="list-inline-item"><span class="btn btn-success" @click="decrementQuantity">-</span></li>
                                        <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">{{ quantity }}</span></li>
                                        <li class="list-inline-item"><span class="btn btn-success" @click="incrementQuantity">+</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col d-grid">
                                    <button @click="addToCart" class="btn btn-success btn-lg">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import fragrance_data from '../assets/data.json';
import { useCartStore } from '../stores/CartStore';
import Rating from '@/components/Rating.vue';

export default {

    data() {
        return {
            fragrances: fragrance_data,
            id: null,
            actualFragrance: null,
            quantity: 1,
            error: false
        };
    },
    components: {
        Rating,
    },
    created() {
        this.id = this.$route.query.id;
        this.actualFragrance = this.fragrances.find(({ id }) => id === parseInt(this.id));
        this.cartStore = useCartStore();
        if (!this.actualFragrance) this.error = true;  
    },
    methods: {
        incrementQuantity() {
            this.quantity += 1;
        },
        decrementQuantity() {
            this.quantity -= 1;
        },
        addToCart() {
            if (this.quantity > 1) {
                this.cartStore.addItemToCartWithQuantity(this.actualFragrance.id, this.quantity);
                this.quantity = 1;
            } else {
                this.cartStore.addItemToCart(this.actualFragrance.id);
            }
        }
    },
    watch: {
        quantity(value) {
            if (value < 1) {
                this.quantity = 1;
            }
            if (value >= 15 - this.cartStore.total) {
                this.quantity = 15 - this.cartStore.total;
            }
        },
    },
}
</script>


