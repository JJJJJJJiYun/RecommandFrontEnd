<<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  border: 0;
  padding: 0;
}
body {
  text-align: center;
}
.content-box {
  margin: 0 auto;
  width: 60%;
}
</style>
 
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  data() {
    return {
      header_show: true,
      footer_show: true
    };
  },
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  methods: {
    //是否显示头部
    header: function(bool) {
      this.header_show = bool;
    },
    //是否显示底部
    footer: function(bool) {
      this.footer_show = bool;
    }
  }
};
</script>