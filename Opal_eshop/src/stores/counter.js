import { defineStore } from 'pinia';

import data from '../data.json';

export const store = defineStore('store', {
  state: () => ({
    fragrances: data,
  }),
  getters: {
    // Define your getters here if needed
  },
  actions: {
    // Define your actions here if needed
  },
});

export default function useStore() {
  return store();
}
