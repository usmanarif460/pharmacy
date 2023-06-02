<template>
  <div class="product-page flex justify-around flex-wrap ">
    <the-product :product="product" v-for="(product, index) in products" :key="`${product.id}-product-${index}`">
    </the-product>
  </div>
</template>

<script>

import TheProduct from '../components/theProduct.vue';

export default {
  components: { TheProduct },
  data: () => ({
    products: [],
  }),
  async created() {
    const items = []
    await this.$fire.firestore.collection('products').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data()
        })

      });

      this.products = items
    })
  }
};
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 0;
  gap: 1.5rem;

}
</style>