<template>
        <i class="fa fa-star text-warning" v-for="i in rating"></i>
        <i class="text-muted fa fa-star" v-for="i in (5-rating)"></i>
</template>

<script>
export default {
    props: {
        rating: {
            type: Number,
            required: true
        }
    }
}
</script>