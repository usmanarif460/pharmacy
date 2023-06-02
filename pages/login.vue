<template>
  <div class="mx-auto container flex items-center" id="nav">
        <div class="w-full pt-2 p-4">

            <div class="mx-auto md:p-6 md:w-1/2">
                <div class="flex flex-wrap justify-between">
                    <h1 class="text-2xl text-orange-500 hover:text-orange-500 transition duration-500 p-4">
                        <i class="fas fa-sign-in-alt fa-fw fa-lg"></i>
                        Sign-in
                    </h1>
                    <a href="#home" class="mt-8 text-orange-400 hover:text-orange-600 transition duration-500">
                        <svg class=" w-6 h-6 inline-block align-bottom" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        Back to Home
                        <i class="fas fa-chevron-circle-left fa-fw"></i>
                    </a>
                </div>

                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form method="POST" action="#login">
                        <div class="mb-8">
                            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
                                <span class="text-red-500">&nbsp;*</span>
                                username
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </div>
                                <input id="username" class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="you@example.com" />
                            </div>
                            <strong class="text-red-500 text-xs italic">username is require</strong>
                        </div>

                        <div class="mb-8">
                            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">
                                <span class="text-red-500">&nbsp;*</span>
                                Password
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </div>
                                <input name="password" id="password" type="text" class="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out">
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <label class="block text-gray-500 font-bold" for="remember">
                                        <input class="ml-2 leading-tight" type="checkbox" id="remember" name="remember">
                                        <span class="text-sm">
                                            remember me
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <a class="font-bold text-sm text-orange-500 hover:text-orange-800" href="#password-request">
                                        forgot password
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="mb-4 text-center">
                            <button class="transition duration-500 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Login
                            </button>
                        </div>
                        <hr>
                        <div class="mt-8">
                            <p class="text-sm">
                                no account
                                <a class="font-bold text-sm text-orange-500 hover:text-orange-800" href="#register">
                                    sign up
                                </a>
                            </p>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </div>
  <!-- <div class="login-box flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div class="w-full max-w-md space-y-8">

      <form class=" space-y-6 p-9 shadow-2xl bg-gray-100" @submit.prevent="loginUser">
        <input type="hidden" name="remember" value="true">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="mb-2">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-6"
              placeholder="Email address" v-model="email">
          </div>
          <div>
            <label for="password" class="mb-2">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
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
              <svg class="h-5 w-15 text-indigo-200 group-hover:text-white" viewBox="0 0 20 20" fill="currentColor"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Login
          </button>
        </div>
      </form>
      <div class="container flex justify-center ">
        <button class="bg-indigo-600 p-2 rounded-md text-yellow-50" @click="googleSignIn">SignIn With Google</button>
      </div>
    </div>
  </div> -->
</template>

<script>

export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    loginUser() {
      this.$fire.auth.signInWithEmailAndPassword(
        this.email,
        this.password
      )
        .then(() => {
          this.email = '',
            this.password = '',
            this.$router.push("/")
        })
        .catch((e) => alert(e))

    },
    googleSignIn() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => console.log(error.message))
    },
  }
};
</script>
