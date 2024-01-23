<template>
  <div class="container pt-5 pb-5">
    <div class="row text-center">
      <h1>Shopping cart</h1>
      <p class="text-danger">Note: you can buy maximally 15 fragrances!</p>
    </div>
  </div>

  <div class="container table-responsive py-5">
    <table v-if="cartStore.total > 0" class="table table-bordered table-hover align-middle text-center"
      style="margin-bottom: 150px;">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col" colspan="2">Fragrance</th>
          <th scope="col" colspan="3">Quantity</th>
          <th scope="col">Price/quantity</th>
          <th scope="col">Delete</th>
          <th scope="col">Total price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="item.id">
          <th>{{ index + 1 }}</th>
          <td><img :src="getProductDetails(item.id).image" widht="80px" height="80px"></td>
          <td>{{ getProductDetails(item.id).fragrance_name }} </td>
          <td><button class="rounded-circle quantity" @click="decrement(item.id)">-</button></td>
          <td>{{ item.quantity }} * {{ getProductDetails(item.id).quantity }}</td>
          <td><button class="rounded-circle quantity" @click="increment(item.id)">+</button></td>
          <td>{{ getProductDetails(item.id).price }} EUR</td>
          <td><button @click="removeItem(item.id)"><img class="remove" src="/src/assets/img/remove.png" height="40px" width="40px"></button></td>
          <td>{{ getProductDetails(item.id).price * item.quantity }} EUR</td>
        </tr>
        <tr>
          <td colspan="8" style="text-align:right;"><b>Total</b></td>
          <td><b>{{ totalPrice.toFixed(2) }} EUR</b></td>
        </tr>
        <tr>
          <td colspan="9">
            <v-dialog v-model="dialog" persistent width="800">
              <template v-slot:activator="{ props }">
                <v-btn color="#59ab6e" v-bind="props">Checkout</v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field label="First name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Last name*" required></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field label="Phone number*" required></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field label="City&address*" required></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field type="number" label="Postal code*" required></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-select :items="['DHL', 'Post']" label="Shipping*" required></v-select>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-select v-model="paymentMethod" :items="['Crypto', 'Credit Card', 'Debit Card', 'PayPal']"
                          label="Payment*" required></v-select>
                      </v-col>

                    </v-row>
                  </v-container>
                  <small>*required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#59ab6e" variant="text" @click="dialog = false">
                    Back to shop
                  </v-btn>
                  <v-btn color="#59ab6e" variant="text" @click="pay">
                    Pay
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="text-center">
      <h3><i>Shopping cart is empty!</i></h3>
      <p style="padding-bottom: 200px">Click <router-link to="/shop" style="color: #59ab6e">here</router-link> to buy
        something elegant.</p>
    </div>
  </div>
</template>

<script>
import fragrance_data from '../assets/data.json';
import { useCartStore } from '../stores/CartStore';

export default {
  data() {
    return {
      cartStore: useCartStore(),
      cartItems: [],
      dialog: false,
      paymentMethod: '',
    };
  },
  created() {
    this.cartStore = useCartStore();
    this.cartItems = this.cartStore.kosik;
  },

  methods: {
    increment(id) {
      this.cartStore.incrementQuantity(id);
    },
    decrement(id) {
      this.cartStore.decrementQuantity(id);
    },
    removeItem(id) {
      this.cartStore.removeItemFromCart(id);
    },
    getProductDetails(id) {
      return fragrance_data.find(product => product.id === id);
    },
    total(item) {
      return this.getProductDetails(item.id).price * item.quantity;
    },
    pay() {
      alert('Backend is not ready yet! We are sorry! The shopping cart will be reseted...');
      this.dialog = false;
      this.cartStore.kosik = [];
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => {
        const productDetails = this.getProductDetails(item.id);
        return sum + (productDetails.price * item.quantity);
      }, 0);
    }
  }
};

</script>


<style scoped>
.quantity {
  color: #59ab6e;
  width: 30px;
  font-weight: 500;
  border: 1px solid #59ab6e;
}

.quantity:hover {
  background: #a7e0b5;
}

.remove:hover {
  background-color: red;
  border-radius: 10px;
}
</style>
