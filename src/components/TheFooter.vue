<template>
    <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-success border-bottom pb-3 border-light logo">E-parfuméria</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li v-for="(item, index) in contact" :key="index">
                            <i :class="item.class"></i>
                            <template v-if="item.IsHref"><a class="text-decoration-none" :href="item.link">{{ item.text }}</a></template>
                            <template v-else>{{ item.text }}</template>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5" style="margin-bottom: 100px;">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="#">Fragrances</a></li>
                        <li><a class="text-decoration-none" href="#">Special for men</a></li>
                        <li><a class="text-decoration-none" href="#">Special for women</a></li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><router-link class="text-decoration-none" to="/">Home</router-link></li>
                        <li><router-link to="/about" class="text-decoration-none">About us</router-link></li>
                        <li><router-link to="/shop" class="text-decoration-none">Shop</router-link></li>
                        <li><router-link to="/contact" class="text-decoration-none">Contact</router-link></li>
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center" v-for="link in social"
                            :key="link.url">
                            <a class="text-light text-decoration-none" :href="link.url" target="_blank">
                                <i :class="[link.class, 'fa-lg', 'fa-fw']"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" disabled class="form-control bg-dark border-light" id="subscribeEmail"
                            placeholder="Email address">
                        <div class="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-100 bg-black py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2024 Peter Opal | Template: 
                            <a href="https://themewagon.com/themes/free-bootstrap-5-html-5-ecommerce-website-template-zay-shop/" target="_blank">Zay Shop</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            social: [
                { url: 'http://facebook.com/', class: 'fab fa-facebook-f' },
                { url: 'https://www.instagram.com/', class: 'fab fa-instagram' },
                { url: 'https://twitter.com/', class: 'fab fa-twitter' },
                { url: 'https://www.linkedin.com/', class: 'fab fa-linkedin' }
            ],
            contact: [
            { class: 'fas fa-map-marker-alt', text: ' 123 Bratislava' },
            { class: 'fa fa-phone', IsHref: true, link: 'tel:+421915999999', text: ' +421915999999' },
            { class: 'fa fa-envelope', IsHref: true, link: 'mailto:peter.opal@student.ukf.sk', text: ' peter.opal@student.ukf.sk' }
            ]
        };
    },
}
</script>
