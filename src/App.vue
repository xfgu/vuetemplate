<template>
  <div id="app">
   <layout />
  </div>
</template>

<script>
import Layout from '@/views/layout.vue';
export default {
  name: "app",
  created() {},
  mounted() {},
  components: {
    Layout,
  },
};
</script>

<style lang="stylus">
#app {
  height: 100vh;
}
</style>
