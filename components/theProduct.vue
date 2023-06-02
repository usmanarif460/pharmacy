<template>
  <div class="product-box ">
    <div>
      <div class="hover:scale-110 ">
        <img class="w-full h-48" :src="product.imageUrl" alt="productImage">
      </div>
      <div class="p-4">
        <h1 class="text-xl font-bold">{{ product.name }}</h1>
        <p class="mb-2">{{ product.description }}</p>
        <p class="font-bold mb-2">{{ product.price }}</p>
        <div class="btn-align">
          <headerbtn>
            ADD TO CART
          </headerbtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },

  },
};

</script>

<style lang="css" scoped>
.product-box {
  width: 280px;
  border-radius: 10px;
  background-color: rgb(236, 233, 233);
  overflow: hidden;
  box-shadow: black 1px 2px 7px 1px;
}

.btn-align {
  text-align: center;
}
</style>