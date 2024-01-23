<template>

    <TheNavigation/>
    <SearchModal/>
    <router-view></router-view>
    <TheFooter/>
 
</template>

<script>
import { RouterView } from 'vue-router';
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';
import SearchModal from './components/SearchModal.vue';

export default {
  components: {
    TheNavigation, TheFooter, SearchModal
  },
};
</script>