import { defineStore } from "pinia";

const max_quantity = 15;

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        kosik: [],
    }),
    actions: {
        updateCartItem(id, quantity = 1) {
            const item = this.kosik.find(item => item.id === id);
            const newTotal = this.total + quantity;

            if (newTotal > max_quantity) {
                alert("Exceeding the cart limit of " + max_quantity);
                return;
            }

            if (item) {
                item.quantity += quantity;
            } else {
                this.kosik.push({ id, quantity });
            }
        },

        addItemToCart(id) {
            this.updateCartItem(id);
        },
        addItemToCartWithQuantity(id, quantity) {
            this.updateCartItem(id, quantity);
        },

        incrementQuantity(id) {
            const item = this.kosik.find(item => item.id === id);
            if (item && this.total < max_quantity) {
                item.quantity += 1;
            }
        },
        decrementQuantity(id) {
            const item = this.kosik.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeItemFromCart(id) {
            const index = this.kosik.findIndex(item => item.id === id);
            if (index !== -1) {
                this.kosik.splice(index, 1);
            }
        }
    },
    getters: {
        total: (state) => {
            return state.kosik.reduce((total, item) => total + item.quantity, 0);
        },
    },
});
