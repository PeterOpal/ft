<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:peter.opal@student.ukf.sk">peter.opal@student.ukf.sk</a>
                    <i class="fa fa-phone mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:+421915999999">+421915999999</a>
                </div>
                <div>
                    <a class="text-light" v-for="link in social" :href="link.url" target="_blank" :key="link.url">
                        <i :class="[link.class, 'fa-sm', 'fa-fw', 'me-2']"></i>
                    </a>
                </div>

            </div>
        </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
            <router-link class="navbar-brand text-success logo h1 align-self-center" to="/">E-parfuméria</router-link>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                        <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
                        <li class="nav-item"><router-link to="/shop" class="nav-link">Shop</router-link></li>
                        <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
                    </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
                            <div class="input-group-text">
                                <i class="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search"><i class="fa fa-fw fa-search text-dark mr-2"></i></a>
                    <router-link class="nav-icon position-relative text-decoration-none" to="/shoppingCart">
                        <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{{ cartStore.total }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { useCartStore } from '../stores/CartStore';

export default {
    data() {
        return {
            cartStore: useCartStore(),
            social: [
                { url: 'https://fb.com/', class: 'fab fa-facebook-f' },
                { url: 'https://www.instagram.com/', class: 'fab fa-instagram' },
                { url: 'https://twitter.com/', class: 'fab fa-twitter' },
                { url: 'https://www.linkedin.com/', class: 'fab fa-linkedin' }
            ],
        };
    },
};
</script>