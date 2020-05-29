<template>
  <div class="content-box">
    <p class="p-title">{{item.title}}</p>
    <p class="p-time">{{item.timestamp}}</p>
    <p class="p-content">{{item.content}}</p>
  </div>
</template>

<style lang="less" scoped>
.p-title {
  height: 70px;
  line-height: 50px;
  font-size: 38px;
  color: #4d4f53;
  border-bottom: 1px solid;
  border-bottom-color: #dddddd;
  padding-top: 10px;
}
.p-time {
  line-height: 20px;
  font-size: 15px;
  color: #999999;
  border-bottom: 1px solid;
  border-bottom-color: #dddddd;
  padding: 10px;
}
.p-content {
  font-size: 17px;
  font-family: STSong;
  line-height: 2.4;
}
</style>

<script>
import axios from "axios";
export default {
  name: "Item",
  data() {
    return {
      item: {}
    };
  },
  created() {
    var that = this;
    axios
      .get(
        "http://localhost:8888/getItem?itemType=" +
          this.$route.path.split("/")[1] +
          "&id=" +
          this.$route.params.id
      )
      .then(res => {
        console.log(res);
        this.item = res.data.data.item;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>