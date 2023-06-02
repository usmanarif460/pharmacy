
<template>
  <!-- Main navigation container -->

  <div>

    <nav class="fixed z-40 w-full p-2 nav-bg">
      <div class="flex justify-between align-center md:p-3">
        <!-- navbar -->
        <div class="flex justify-between w-full align-middle ">
          <!-- Header logo -->
          <div>
            <span>
              Logo
            </span>
          </div>
          <!-- Navbar -->
          <div class="hidden md:block">
            <ul class="flex space-x-8 font-sans text-sm align-middle">
              <li><a href="#" class="pb-1 border-b-2 border-blue-500 active">Home</a></li>
              <li><a href="#" class="">Services</a></li>
              <li><a href="#" class="">Features</a></li>
              <li><a href="#" class="">FAQ</a></li>
              <li><a href="#" class="">Contact</a></li>
              <li>
                <NuxtLink to="signup"
                  class="px-3 py-2 font-semibold text-white bg-blue-500 rounded cta hover:bg-blue-600">Sign
                  Up</NuxtLink>
              </li>
            </ul>
          </div>
          <!-- Mobile toggle -->
          <div class="md:hidden">
            <button @click="drawer">
              <svg class="w-8 h-8 text-black fill-current" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>






        <!-- Dark Background Transition -->
        <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
          leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
          <div @keydown.esc="isOpen = false" v-show="isOpen" class="fixed inset-0 z-10 transition-opacity">
            <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
          class="fixed top-0 left-0 z-30 w-full h-screen overflow-auto transition-all duration-300 ease-in-out transform bg-white "
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

          <div class="flex justify-between px-3 py-2 align-middle nav-bg">
            <span @click="isOpen = false">
              logo
            </span>
            <div class="close">
              <button @click="isOpen = false">
                <svg class="w-8 h-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>


          <ul class="container flex flex-col justify-center p-5 mx-auto font-sans divide-y align-center">
            <li><a href="#" @click="isOpen = false" class="block my-4 text-center ">Services</a></li>
            <li><a href="#" @click="isOpen = false" class="block my-4 text-center">Home</a></li>
            <li><a href="#" @click="isOpen = false" class="block my-4 text-center">Features</a></li>
            <li><a href="#" @click="isOpen = false" class="block my-4 text-center">FAQ</a></li>
            <li><a href="#" @click="isOpen = false" class="block my-4 text-center">Contact</a></li>
            <li class="flex justify-center gap-3"><a href="#" @click="isOpen = false"
                class="inline-block px-3 py-2 my-8 font-semibold text-center text-white bg-blue-500 rounded cta hover:bg-blue-600">Login</a>
              <a href="#" @click="isOpen = false"
                class="inline-block px-3 py-2 my-8 font-semibold text-center text-white bg-blue-500 rounded cta hover:bg-blue-600">Sign
                Up</a>
            </li>
          </ul>

          <div class="follow ">
            <p class="text-xl italic font-bold text-center">follow us:</p>
            <div class="flex justify-center gap-16 mt-6 align-center ">
              <div>
                <a href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-full mx-auto hover:scale-110 " fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

              </div>
              <div>
                <a href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-full mx-auto hover:scale-110" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="#!">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-full mx-auto hover:scale-110" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>


<!-- <div class="z-40 items-center justify-between w-full px-6 py-2 text-white bg-gray-600 md:flex">
    <div class="logo">
      <NuxtLink to="/">
        <img class="logo-img" src="~/assets/images/logo.png" alt="logo">
      </NuxtLink>
    </div>
    <ul class="flex items-center text-lg font-bold sm:mt-2">
      <li v-for="link in links" :key="link.id" class="my-2  md:mx-3 sm:mb-2">
        <NuxtLink :to="link.link" class=" hover:text-gray-300">{{ link.name }}
        </NuxtLink>
      </li>

      <headerbtn v-if="!user">
        <NuxtLink :to="login.link">{{ login.name }}</NuxtLink>
      </headerbtn>
      <headerbtn v-if="!user">
        <NuxtLink :to="signup.link">{{ signup.name }}</NuxtLink>
      </headerbtn>
      <headerbtn v-if="user">
        <button  @click="logoutbtn">{{ signout.name }}</button>
      </headerbtn>


    </ul>


  </div> -->


<!-- <script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    user: '',
    login: { name: "Login", link: "login" },
    signup: { name: "SignUp", link: "signup" },
    signout: { name: "LogOut" },

  }),

  mounted() {
    this.$fire.auth.onAuthStateChanged(user => {
      this.user = user
    })
  },
  methods: {
    logoutbtn() {
      this.$fire.auth.signOut()
      this.user = ''
      this.$router.push('/medicines')
    }
  }
};
</script> 
-->

<style scoped>
.logo-img {
  width: 10rem;
  height: 2.5rem;
}

.nav-bg {
  background-image: linear-gradient(to right, hsl(217, 88%, 33.7%), hsl(217, 88%, 75.1%));
}
</style> 

 
