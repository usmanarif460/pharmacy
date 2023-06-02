
<template>
  <div class="login-box flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="w-full max-w-lg space-y-8">

      <form class=" space-y-6 p-9 shadow-2xl bg-gray-100" @submit.prevent="handleSubmit">
        <input type="hidden" name="remember" value="true">
        <div class=" flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Product Image
            </label>
            <input type="file" ref="fileInput"
              class=" bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Product Name
            </label>
            <input
              class=" appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required type="text" id="productName" placeholder="Enter Product Name" v-model="productName">

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Product Description
            </label>
            <textarea
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required type="text" id="description" placeholder="Enter Product Description"
              v-model="description"></textarea>
          </div>

          <div class="-space-y-px rounded-md shadow-sm">

            <label class="">Product Price</label>
            <input id="price" name="price" type="number" required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder=" Enter Product Price" v-model="price">
          </div>

        </div>

        <div>
          <button type="submit"
            class="group relative flex w-md justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

            Add Product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      description: '',
      price: 0,
      imageUrl: null,
    }
  },
  methods: {

    async handleSubmit() {
      const file = this.$refs.fileInput.files[0]
      const storageRef = this.$fire.storage.ref()
      const imageRef = storageRef.child(`images/${file.name}`)
      const snapshot = await imageRef.put(file)
      this.imageUrl = await snapshot.ref.getDownloadURL()

      this.$fire.firestore.collection('products').add({
        name: this.productName,
        description: this.description,
        price: this.price,
        imageUrl: this.imageUrl,
      })
        .then(() => {
          alert('Product added successfully!')
          this.productName = '',
            this.description = '',
            this.price = 0,
            this.$refs.fileInput.files = null,
            this.$router.push('/medicines')
        })
        .catch(error => {
          console.error(error)
          alert('Error adding product')
        })

    }
  }
}

</script> 


<!-- methods: {
  <input class="border-2" type="text" placeholder="Enter Name" v-model="product.name" /> 
  saveProduct(product) {
    this.$fire.firestore.collection('products').doc(product.id).update({
      name: product.name,
      description: product.description,
      price: product.price,
    });
  },
} -->