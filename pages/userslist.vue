<template>
  <div class="container m-auto">
    <h2 class="font-bold text-xl text-center mt-8">Users List </h2>
    <table class="  shadow-xlg bg-white border-separate m-auto mt-4 mb-8">
      <tr>
        <th class="bg-gray-400 border text-center px-8 py-4">User Name</th>
        <th class="bg-gray-400 border text-center px-8 py-4 ">User Email</th>

      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td class="border px-8 py-4">
          <p>{{ user.FirstName }} {{ user.LastName }}</p>
        </td>
        <td class=" border px-8 py-4">
          {{ user.Email }}
        </td>

        <td>
          <button @click="deleteUser(user.id)"
            class="border px-4 py-2 rounded-lg text-black bg-gray-300 hover:scale-105  ">Delete User</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>

export default {

  data: () => ({
    users: [],

  }),
  async created() {
    const items = []
    await this.$fire.firestore.collection('Users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data()
        })
      });

      this.users = items
    })
  },
  methods: {
    async deleteUser(userId) {
      await this.$fire.firestore.collection('Users').doc(userId).delete()
        .then(() => {
          this.$router.push('/userslist')
        })

    },

  }

};
</script>