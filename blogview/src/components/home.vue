<template>
  <div id="app">
    <div class="masonry">
      <div class="column" v-for="col in columnCount" :key="col">
          <div class="imgapp" v-for="(item,index) in imgsArr" :key="index" v-if="index%columnCount==(col-1)">
            <el-card :body-style="{ padding: '0px' }" style="padding: 8px;">
                  <img :src="item.src" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                  </div>
            </el-card>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      currentDate:'2019-10-12',
      imgsArr:[],
      screenWidth: document.documentElement.clientWidth,
      columnCount: 3
    }
  },
  methods: {
    getData() {
      axios.get('./static/mock/data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          this.imgsArr = this.imgsArr.concat(res.data)
        })
    },
    getColumn(){
      var count = document.documentElement.clientWidth;
        if (count<992) {
          this.columnCount=2
        }else if (count>1600){
          this.columnCount=4
        }else{
          this.columnCount=3
        }
    }
  },
  created() {
    this.getData();
    this.getColumn()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masonry {
    display: flex;
    flex-direction: row;
    justify-content:center
}

.column {
  width: 300px;
    display: flex;
    flex-direction: column;
}
.imgapp{
  width: 280px;
  margin-bottom: 20px;
}
.imgapp img {
  width: 260px;
}
</style>