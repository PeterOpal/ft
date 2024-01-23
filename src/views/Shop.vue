<template>
    <div class="container py-5">
        <div class="row">
            <div class="row">
                <div class="col-md-6">
                    <ul class="list-inline shop-top-menu pb-3 pt-1">
                        <li class="list-inline-item">
                            <button class="h3 text-dark text-decoration-none mr-3">All</button>
                        </li>
                        <li class="list-inline-item">
                            <button @click="filterProducts('men')" class="h3 text-dark text-decoration-none mr-3">Men's</button>
                        </li>
                        <li class="list-inline-item">
                            <button @click="filterProducts('women')" class="h3 text-dark text-decoration-none mr-3">Women's</button>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 pb-4">
                    <div class="d-flex">
                        <select class="form-control" @change="change($event)">
                            <option value="featured">Featured</option>
                            <option value="lowestToHighest">Lowest to Highest</option>
                            <option value="highestToLowest">Highest to Lowest</option>
                        </select>
                    </div>
                </div>
            </div>
            <ProductCard v-for="item in filtered_products" :fragrance="item" />
        </div>
    </div>
    <div class="bg-light">
        <Brands/>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import Brands from '@/components/BrandsCarousel.vue';
import fragrance_data from '../assets/data.json';

export default {
    data() {
        return {
            fragrances: fragrance_data,
            filtered_products: fragrance_data
        }
    },
    components: {
        ProductCard, Brands
    },
    methods: {
        filterProducts(gender) {
            if(gender=='all') { this.filtered_products=this.fragrances; }
            else { this.filtered_products = this.fragrances.filter(product => product.gender === gender); }
        },
        change(event) {
            const sort = event.target.value;
            if (sort === 'lowestToHighest') {
                this.sortLowestToHighest();
            } else if (sort === 'highestToLowest') {
                this.sortHighestToLowest();
            } 
        },
        sortLowestToHighest() {
            this.filtered_products.sort((a, b) => a.price - b.price);
        },
        sortHighestToLowest() {
            this.filtered_products.sort((a, b) => b.price - a.price);
        }
    }
}
</script>