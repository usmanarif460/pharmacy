<template>
  <div class="container m-auto">
    <table v-if="!showEditForm" class="  shadow-lg bg-white border-separate m-auto mt-12 mb-8">
      <tr>
        <th class="w-48  bg-gray-400 border text-center px-8 py-4">Image</th>
        <th class="bg-gray-400 border text-center px-8 py-4">Name</th>
        <th class="w-56 bg-gray-400 border text-center px-8 py-4 ">Description</th>
        <th class="bg-gray-400 border text-center px-8 py-4">Price</th>

      </tr>
      <tr v-for="(product, index) in products" :key="index">
        <td class="border-2 px-2 py-2 bg-gray-100 ">
          <img class="h-24 w-full" :src="product.imageUrl" />
        </td>
        <td class="border-2 px-2 py-2 bg-gray-100">
          {{ product.name }}
        </td>
        <td class=" border-2 px-2 py-2 bg-gray-100">
          {{ product.description }}
        </td>
        <td class="border-2 px-2 py-2 text-center bg-gray-100">
          {{ product.price }}
        </td>
        <td>
          <button @click="$router.push({
            query: { id: product.id }
          })" class="border px-4 py-2 rounded-lg text-black bg-gray-300 hover:scale-105 font-bold ">Edit</button>
        </td>
        <td>
          <button @click="deleteProduct(product.id)"
            class="border px-4 py-2 rounded-lg text-black bg-gray-300 hover:scale-105 font-bold ">Delete</button>
        </td>
      </tr>
    </table>
    <div v-else="showEditForm">
      <h2 class="font-bold text-xl text-center mt-4">Product Details</h2>
      <div class="login-box flex min-h-full items-center justify-center py-4 px-4 sm:px-6 lg:px-8 ">
        <div class="w-full max-w-lg space-y-2">
          <form class="  p-9 shadow-2xl bg-gray-100" @submit.prevent="updateProduct">
            <input type="hidden" name="remember" value="true">
            <div class=" flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-2">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Choose Image
                </label>
                <input type="file" ref="fileInput">
              </div>
              <div class="w-full md:w-1/2 px-3 mb-2">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Product Name
                </label>
                <input
                  class=" appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required type="text" id="productName" v-model="editedProduct.name">

              </div>
              <div class="w-full md:w-1/2 px-3 mb-2">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Product Description
                </label>
                <textarea
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required type="text" id="description" v-model="editedProduct.description"></textarea>
              </div>

              <div class="w-full md:w-1/2 px-3 ">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
                  Product Price
                </label>
                <input
                  class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  required type="number" id="price" v-model="editedProduct.price">
              </div>

            </div>

            <div class="flex gap-2">
              <button type="submit"
                class="group relative flex w-md justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Save
              </button>
              <button type="button" @click="cancelEdit"
                class="group relative flex w-md justify-center rounded-md border border-transparent bg-gray-200 py-2 px-4 text-sm font-medium text-black hover:bg-gray-100 focus:outline focus:ring-2  focus:ring-indigo-500 focus:ring-offset-2">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
      
<script>

export default {

  data: () => ({
    products: [],
    editedProduct: {},
    originalProduct: {},

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
  },
  computed: {
    showEditForm() {
      return this.$route?.query?.id
    }
  },
  watch: {
    showEditForm: {
      immediate: true,
      handler(value) {
        if (!value) {
          return
        }
        this.fetchProductAndEdit(value)
      }
    }
  },
  methods: {
    async fetchProductAndEdit(productId) {

      const productRef = this.$fire.firestore.collection('products').doc(productId)
      const productSnapshot = await productRef.get()
      this.editedProduct = {
        id: productSnapshot.id,
        ...productSnapshot.data(),
      }
      this.originalProduct = { ...this.editedProduct }

    },
    async updateProduct() {
      // const file = this.$refs.fileInput.files[0]
      // const storageRef = this.$fire.storage.ref()
      // const imageRef = storageRef.child(`images/${file.name}`)
      // const snapshot = await imageRef.put(file)
      // this.imageUrl = await snapshot.ref.getDownloadURL()

      const { id, ...updatedProduct } = this.editedProduct
      await this.$fire.firestore.collection('products').doc(id).update(updatedProduct)
      this.showEditForm = false
      this.$router.push('/productlist')

    },
    async deleteProduct(productId) {
      await this.$fire.firestore.collection('products').doc(productId).delete()

        .then(() => {
          this.$router.push('/productlist')
        })

    },
    cancelEdit() {
      this.editedProduct = { ...this.originalProduct }
      this.showProductList = true
      this.showEditForm = false
    },

  }

};
</script>
