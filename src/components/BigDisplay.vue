<template>
  <div class="">
    <h1 class="">
      <slot></slot>
    </h1>
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
  h1 {
    padding-top: 30vh;
    font-weight: lighter;
    color: #1c7430;
    font-size: 90px;
    text-align: center;
  }
</style>
