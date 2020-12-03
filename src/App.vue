<template>
  <div id="app">
   <!-- <layout /> -->
   <router-view ></router-view>
  </div>
</template>

<script>
import Layout from '@/views/layout.vue';
export default {
  name: "app",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  components: {
    Layout,
  },
};
</script>

<style lang="stylus">
@import './assets/css';

#app {
  height: 100vh;
}
</style>
