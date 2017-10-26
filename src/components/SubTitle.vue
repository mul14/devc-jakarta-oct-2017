<template>
  <div>
    <h3><slot></slot></h3>
  </div>
</template>

<script>
  export default {
    name: 'BigTitle',

    data () {
      return {
        //
      }
    },

    mounted () {

    },

    methods: {
      //
    },
  }
</script>

<style scoped lang="scss">
  h3 {
    display: inline-block;
    font-weight: lighter;
    padding: 30px 0;
  }
</style>
