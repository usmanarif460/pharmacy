<template>
  <div class="login-box flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="w-full max-w-lg space-y-8">

      <form class=" space-y-6 p-9 shadow-2xl bg-gray-100" @submit.prevent="registerUser">
        <input type="hidden" name="remember" value="true">
        <div class="flex flex-wrap -mx-3 mb-6">

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input
              class=" appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name" required type="text" placeholder="Enter First Name" v-model="firstName">

          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name" required type="text" placeholder="Enter last Name" v-model="lastName">
          </div>
        </div>
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Email address</label>
            <input id="email-address" name="email" type="email" required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder="Email address" v-model="email">
          </div>
          <div>
            <label for="password" class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Password</label>
            <input id="password" name="password" type="password"  required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder="Password" v-model="password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-15 text-indigo-400 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            SignUp
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }),
  methods: {
    registerUser() {

      this.$fire.auth.createUserWithEmailAndPassword(
        this.email,
        this.password,
      )
        .then(async (userCredential) => {
          await this.$fire.firestore.collection("users").doc(userCredential.user.uid).set({
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
          })
          this.firstName = '',
            this.lastName = '',
          this.email = '',
            this.password = '',
          this.$router.push('/login')
        })
        .catch((e) => console.log(e.message))
    },
  }

}
</script>