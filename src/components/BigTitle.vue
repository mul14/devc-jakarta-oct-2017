<template>
  <div>
    <h1><slot></slot></h1>
    <hr>
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
    color: #64b487;
    font-weight: lighter;
  }

  hr {
    border-top: 1px solid #64b487;
  }
</style>
