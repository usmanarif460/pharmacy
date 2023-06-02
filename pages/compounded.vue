
<template>
  <div >
    <div class="flex justify-center ">
    <img class=" mt-6 w-48" src="~/assets/images/prescription-upload-image.avif">
  </div>
    <div class="border-2 border-black mt-8 mb-4 p-2  sm:w-1/2 m-auto center">
      <input type="file" @change="previewImage" accept="image/*">
      <div>
        <p>Progress: {{ uploadValue.toFixed() + "%" }}
          <progress id="progress" :value="uploadValue" max="100"></progress>
        </p>
      </div>
      <div v-if="imageData != null">
        <img class="preview" :src="picture">
        <br>
        <button @click="onUpload">Upload</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      imageUrl:'',
    }
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      const storageRef = this.$fire.storage.ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, error => { console.log(error.message) },
        () => {
          this.uploadValue = 100;
         storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
          });
        }
      );
    }

  }
}
</script>

<style scoped>
.center{
  text-align: center;
}
img.preview {
  width: 200px;
  margin: 0 auto;
}
</style>


<!-- <template>
  <div>
    <div>
      <input type="file" ref="fileInput">
      <button @click="upload">Upload</button>
    </div>
  
  </div>
</template>

<script>

export default {

  data() {
    return {
user:'',
    }
  },
  methods: {
    async upload() {
      this.user=this.$fire.auth.currentUser
    if (this.user) {
      const file = this.$refs.fileInput.files[0]
      const storageRef = this.$fire.storage.ref()
      const imageRef = storageRef.child(`users/${this.user.uid}/${file.name}`)
      const snapshot = imageRef.put(this.imageFile)
      const imageUrl = snapshot.getDownloadURL()
      this.$fire.firestore.collection('users').doc(this.user.uid).collection("image").add(imageUrl)

    }
  }
}
}

</script>

 -->
