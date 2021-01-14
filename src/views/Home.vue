<template>
  <div class="h-100 por">
    <div id="e" ref="e"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      flag: true,
      left: 0,
    };
  },
  methods: {
    render() {
      let e = this.$refs.e;
      if (this.flag) {
        if (this.left >= 100) {
          this.flag = false;
        }
        e.style.left = ` ${this.left++}px`;
      } else {
        if (this.left <= 0) {
          this.flag = true;
        }
        e.style.left = ` ${this.left--}px`;
      }
    },
    animloop() {
      this.render();
      let  rafId = requestAnimationFrame(this.animloop);
       if(this.left == 50){
            cancelAnimationFrame(rafId)
        }
    },
  },
  mounted() {
    this.animloop();
  },
  components: {},
};
</script>
<style lang="stylus" scoped>
@import '../assets/css';

.por {
  position: relative;

  #e {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    zoom: 1;
  }
}
</style>
