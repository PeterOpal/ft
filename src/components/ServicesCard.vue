<template>
    <div class="col-md-6 col-lg-3 pb-5">
        <div class="h-100 py-5 services-icon-wap shadow">
            <div class="h1 text-success text-center"><i :class="content.class"></i></div>
                <h2 class="h5 mt-4 text-center">{{content.text}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        },
    },
}
</script>