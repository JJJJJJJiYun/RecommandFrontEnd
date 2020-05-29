<template>
  <div class="content-box">
    <h2>{{item.title}}</h2>
     <DIV align=center><FONT color=#077da6>-----------------------------------------------------------------------------------------</FONT></DIV>
    <p style="line-height:2.4;color=#4B4B4B">{{item.content}}</p>
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