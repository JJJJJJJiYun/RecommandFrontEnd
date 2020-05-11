<template>
  <div class="content-box">
    <el-row v-for="(item,index) in list" :key="index">
      <el-col :span="24" class="bg-purple-dark">
        <div>
          <a
            :href="'/'+item_type+'/'+item.id"
            v-on:click="record_action(item.id,item_type)"
          >{{item.title}}</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
a {
  text-decoration: none;
}
a:link {
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  color: black;
}
a:active {
  color: black;
}
.bg-purple-dark {
  background: #99a9bf;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      item_type: this.$route.path.slice(1, -1),
      list: []
    };
  },
  created() {
    var that = this;
    axios
      .get(
        "http://localhost:8888/getItemList?item_type=" +
          this.$route.path.slice(1, -1) +
          "&page=1&page_size=100"
      )
      .then(res => {
        console.log(res);
        this.list = res.data.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    record_action: function(item_id, item_type) {
      var that = this;
      axios
        .get(
          "http://localhost:8888/action?item_id=" +
            item_id +
            "&action=read&item_type=" +
            item_type
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>