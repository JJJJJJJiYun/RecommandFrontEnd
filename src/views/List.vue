<template>
  <div style="text-align:center">
    <el-row class="list-header">
      <el-col :span="24">
        <div class="bg-purple-dark">
          <p class="list-p2">{{item_type_cname}}</p>
        </div>
      </el-col>
    </el-row>
    <div class="content-box list-box">
      <el-row v-for="(item,index) in list" :key="index" class="list-row">
        <el-col :span="24" class="list-col">
          <div>
            <a
              :href="'/'+item_type+'/'+item.id"
              v-on:click="record_action(item.id,item_type)"
              style="font-size: 17px;font-family: STSong"
            >{{item.title}}</a>
            <br />
            <p class="list-p">{{item.timestamp}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list-p2 {
  padding-left: 30px;
  font-size: 25px;
}
.list-header {
  width: 60%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
.list-row {
  padding-top: 10px;
  border-bottom: 0.5px solid;
  border-bottom-color: #dddddd;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.list-box {
  border: 1px solid;
  border-color: #dddddd;
  border-radius: 10px;
}
.list-p {
  font-size: 12px;
  float: right;
  padding-right: 70px;
  color: #999999;
}
.bg-purple-dark {
  border: 1px solid;
  border-color: #dddddd;
  border-top: 2px solid;
  border-top-color: #4e8ae4;
  height: 70px;
  text-align: left;
  line-height: 70px;
  background-color: #EEF5FF;
}
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
.list-col {
  text-align: center;
  line-height: 30px;
}
</style>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      item_type: this.$route.path.slice(1, -1),
      list: [],
      item_type_cname: ""
    };
  },
  created() {
    var that = this;
    axios
      .get(
        "http://localhost:8888/getItemList?itemType=" +
          this.$route.path.slice(1, -1) +
          "&page=1&pageSize=100"
      )
      .then(res => {
        console.log(res);
        this.list = res.data.data.list;
      })
      .catch(err => {
        console.log(err);
      });
    var ename = this.$route.path.slice(1, -1);
    if (ename == "solution") {
      this.item_type_cname = "解决方案";
    } else if (ename == "tech_result") {
      this.item_type_cname = "技术成果";
    } else if (ename == "case") {
      this.item_type_cname = "典型案例";
    } else if (ename == "patent") {
      this.item_type_cname = "专利库";
    } else if (ename == "company_need") {
      this.item_type_cname = "企业需求";
    } else {
      this.item_type_cname = "城市需求";
    }
  },
  methods: {
    record_action: function(item_id, item_type) {
      var that = this;
      axios
        .get(
          "http://localhost:8888/action?itemId=" +
            item_id +
            "&action=read&itemType=" +
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