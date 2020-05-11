<template>
  <div>
    <el-row :gutter="20" class="border-1px">
      <el-col :span="12">
        <Carousel />
      </el-col>
      <el-col :span="12" class="boder-1px">
        <el-row class="title-row">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">您的推荐</div>
          </el-col>
        </el-row>
        <el-row v-for="(item,index) in items" :key="index">
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <a :href="'/'+item.itemType+'/'+item.id" v-on:click="record_action(item.id, item.itemType)">{{item.title}}</a>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="border-1px">
      <el-col :span="12" class="border-1px2">
        <el-row>
          <el-col :span="12">
            <img src="../assets/home6.png" class="home-img3" />
          </el-col>
          <el-col :span="12">
            <img src="../assets/home7.png" class="home-img3" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <img src="../assets/home8.png" class="home-img4" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="border-1px2">
        <el-row>
          <el-col :span="24">
            <img src="../assets/home1.png" class="home-img" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <img src="../assets/home2.png" class="home-img2" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <img src="../assets/home3.png" class="home-img2" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <img src="../assets/home4.png" class="home-img2" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <img src="../assets/home5.png" class="home-img2" />
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.el-row {
  padding: 5px;
}
.bg-purple-dark {
  background: #99a9bf;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.border-1px {
  border: 1px;
  border-style: solid;
  border-color: lightblue;
}
.border-1px2 {
  border: 1px;
  border-style: solid;
  border-color: lightblue;
  height: 450px;
}
.grid-content {
  border-radius: 2px;
}
a {
  text-decoration: none;
}
a:link {
  color: white;
}
a:visited {
  color: white;
}
a:hover {
  color: white;
}
a:active {
  color: white;
}
.home-img {
  width: 600px;
  height: 130px;
}
.home-img2 {
  width: 250px;
  height: 130px;
}
.bg-purple {
  background: #d3dce6;
  height: 40px;
  line-height: 40px;
}
.home-img3 {
  width: 300px;
  height: 180px;
}
.home-img4 {
  width: 600px;
  height: 180px;
}
</style>


<script>
import Carousel from "@/components/Carousel";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Carousel
  },
  data() {
    return {
      items: []
    };
  },
  created() {
    var that = this;
    axios
      .get("http://localhost:8888/recommand?page=1&pageSize=7")
      .then(res => {
        console.log(res);
        var item_urls = [];
        res.data.data.list.forEach(element => {
          item_urls.push(
            "http://localhost:8888/getItem?item_type=" +
              element.itemType +
              "&id=" +
              element.itemId
          );
        });
        item_urls.forEach(element => {
          axios
            .get(element)
            .then(res => {
              res.data.data.item.url = element;
              console.log(res);
              this.items.push(res.data.data.item);
            })
            .catch(err => {
              console.log(err);
            });
        });
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
