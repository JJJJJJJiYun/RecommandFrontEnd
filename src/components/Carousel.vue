<template>
  <div class="block">
    <el-carousel height="400px" :autoplay="autoplay" :interval="interval">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" class="carousel-img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.carousel-img {
  width: inherit;
  height: inherit;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        require("../assets/carousel1.gif"),
        require("../assets/carousel2.jpg"),
        require("../assets/carousel3.jpg"),
        require("../assets/carousel4.jpg")
      ],
      autoplay: true,
      interval: 1500
    };
  }
};
</script>