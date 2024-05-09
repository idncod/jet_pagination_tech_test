<template>
    <div class="product-card-container">
        <div class="image-container" v-bind:style="{'background-image':'url(' + product.thumbnail + ')'}"></div>
        <div class="description-container">{{ product.description }}</div>
        <div class="price-container">Price &pound;{{product.price}}</div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    

    export default defineComponent({
        props: {product: Object},
        setup(props) {
            props.product
        }
    })
</script>

<style scoped>
    .product-card-container {
        background-color: lightgray;
        padding: 20px;
    }

    .product-card-container .image-container  {
        width: 100%;
        height: 200px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .product-card-container .description-container {
        margin-top: 20px;
        font-size: 18px;
        text-align: justify;
        height: 135px;
        overflow-y: hidden;
    }

    .product-card-container .price-container {
        margin-top: 20px;
        font-size: 18px;
        text-align: right;
    }
</style>