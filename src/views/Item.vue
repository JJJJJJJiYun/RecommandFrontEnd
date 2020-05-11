<template>
  <div class="content-box">
    <h3>{{item.title}}</h3>
    <p>{{item.content}}</p>
  </div>
</template>

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
        "http://localhost:8888/getItem?item_type=" +
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