<template>
  <div class="border-2 border-black mt-8 mb-4 p-2  sm:w-1/2 m-auto ">
    <ul class="w-1/2" v-for="message in messages" :key="message.id">
      <li >
        {{ message.text }}
      </li>


      <!-- <div class="flex flex-col bg-gray-200 rounded-md mb-2">
          <p class="bg-gray-100 pl-1" >{{ message.email }}</p>
          <p class="p-2"> {{ message.text }}</p>
        </div> -->

    </ul>
    <form @submit.prevent="sendMessage">
      <input class="border-2 border-black focus:outline-none mt-2 p-1 w-3/4" v-model="newMessage" type="text" required>
      <headerbtn type="submit">Send</headerbtn>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      messages: [],
      newMessage: '',

    }
  },
  async created() {

    const user = this.$fire.auth.currentUser
    if (user) {
      const userRef = await this.$fire.firestore.collection('users').doc(user.uid)
      await userRef.collection('messages')
        .orderBy('timestamp', "asc")
        .onSnapshot(querySnapshot => {
          console.log(querySnapshot)
          this.messages = querySnapshot.docs.map(doc => doc.data())
          console.log(this.messages)
        })
    }

  },
  methods: {
    async sendMessage() {
      const user = this.$fire.auth.currentUser
      if (user && this.newMessage != '') {
        const userRef = this.$fire.firestore.collection('users').doc(user.uid)
        await userRef.collection('messages').add({
          email: user.email,
          text: this.newMessage,
          timestamp: new Date()
        })
        this.newMessage = ''

      }
    }
  }
}
</script>


<!-- <template>
  <div class="border-2 border-black mt-8 mb-4 p-2 w-full md:w-1/2 m-auto">
    <ul >
      <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
    </ul>
    <form @submit.prevent="sendMessage">
      <input class="border-2 border-black focus:outline-none mt-2 p-1" v-model="newMessage" type="text">
      <headerbtn v-if="newMessage" type="submit">Send</headerbtn>
    </form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    }
  },
  created() {
    this.$fire.firestore.collection('messages')
      .orderBy('createdAt')
      .onSnapshot(querySnapshot => {
        this.messages = querySnapshot.docs.map(doc => doc.data())
      })
  },
  methods: {
    async sendMessage() {
      await this.$fire.firestore.collection('messages').add({
        text: this.newMessage,
        createdAt: new Date()
      })
      this.newMessage = ''
    }
  }
}
</script>
 -->
