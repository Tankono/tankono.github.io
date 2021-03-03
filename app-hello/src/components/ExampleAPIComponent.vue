
<template>
  <div>
    <div v-for="(item, index) in posts" :key="item.id">
      {{index}}. {{item.title}}
  </div>
  <p>{{posts}}</p>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // lấy dữ liệu khi component được tạo thành công
  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>