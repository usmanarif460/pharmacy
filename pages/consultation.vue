<template>
  <div class="border-2 border-black mt-8 mb-4 p-2  sm:w-1/2 m-auto chat-window ">
    <ul >
      <li class="w-2/3" v-for="message in messages" :key="message.id">
        <div class="flex flex-col border border-gray-300  rounded-lg mb-3 position ">
          
            <p class="flex justify-between  pl-1 text-orange-400 bg-gray-100">{{ message.email }}
            </p>
            <p class="p-2"> {{ message.text }}</p>
          
        </div>
      </li>
    </ul>
    <form class="flex align-center gap-2" v-if="user" @submit.prevent="sendMessage">
      <textarea class="border-2 border-black focus:outline-none mt-2 p-1 w-4/5 h-10 " v-model="newMessage" type="text"
        required></textarea>
      <button class=" p-2">
        <svg width="24px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill="#000000"></path> <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
    </form>
    <div v-if="!user" class="text-red-600 text-center text-lg">
      <p>Plese join us with Register or login to chat with us</p>
      <headerbtn class="mt-4">
        <nuxt-link to="/login">Login</nuxt-link>
      </headerbtn>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      messages: [],
      newMessage: '',
      user: '',
      
    }
  },
  async created() {

    this.user = this.$fire.auth.currentUser
    if (this.user) {
      const userRef = await this.$fire.firestore.collection('users').doc(this.user.uid)
      await userRef.collection('messages')
        .orderBy('timestamp', "asc")
        .onSnapshot(querySnapshot => {
          this.messages = querySnapshot.docs.map(doc => doc.data())
        })
    }

  },
  methods: {
    async sendMessage() {

      if (this.user && this.newMessage != '') {
        const userRef = this.$fire.firestore.collection('users').doc(this.user.uid)
        await userRef.collection('messages').add({
          email: this.user.email,
          text: this.newMessage,
          timestamp: new Date()
        })
        this.newMessage = ''

      }
    }
  }
}
</script>

<style scoped>
.chat-window{
  height: 500px; 
  overflow-y: auto;
}
</style>