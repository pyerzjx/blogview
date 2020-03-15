<template>
  <div class="blog">
    <h1>{{ msg }}</h1>
    <vue-markdown :source="markDown"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'
export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Welcome to Bolg',
      markDown:""
    }
  },
  components:{
    VueMarkdown
  },
  methods: {
    getHtml() {
      axios.get('./static/mock/README.md')
        .then(res => {
          console.log(res.data);
          this.markDown = res.data
        })
    }
  },
  mounted() {
    this.getHtml()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog{
  text-align: left;
  width: 80%;
  margin: 0 auto
}
</style>
