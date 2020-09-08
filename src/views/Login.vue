<template>
  <div>login</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "login",
  data() {
    return {
      form: {},
    };
  },
  methods: {
      ...mapActions([''])
  },
  created() {
    this.mstore.set("user", this.form);
  },
  mounted() {
    let result = this.mstore.get("user");
    console.log(result);
  },
};
</script>

<style lang="stylus" scoped></style>