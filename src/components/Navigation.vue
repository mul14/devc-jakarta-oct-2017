<template>
  <section>
    <button @click="prev">Prev</button>
    <div class="slider">
      <!--<button v-for="link in list" :class="{active: current === link}" @click="goto(link)">-->
        <!--{{ link }}-->
      <!--</button>-->
    </div>
    <button @click="next">Next</button>
  </section>
</template>

<script>
  export default {
    name: 'Navigation',

    data () {
      return {
        list: [
          'Home',
          'WhatIsVue',
          'CurrentState',
          'Why',
          'Concise',
          'Freedom',
          'Docs',
          'Fin',
        ],
      }
    },

    async mounted () {
    },

    methods: {
      goto (value) {
        this.$router.push({name: value})
      },

      prev () {
        const index = this.list.indexOf(this.$router.currentRoute.name)
        if (index) {
          this.goto(this.list[index - 1])
        }
      },

      next () {
        const index = this.list.indexOf(this.$router.currentRoute.name)
        if (index + 1 < this.list.length) {
          this.goto(this.list[index + 1])
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  $mainColor: #64b487;

  section {
    display: flex;
    flex-direction: row;
    /*border-top: 1px solid #f1f1f1;*/
  }

  button {
    font-weight: lighter;
    border: none;
    outline: none;
    background: darken($mainColor, 12%);
    display: inline-block;
    color: white;
    padding: 10px 20px;
    text-decoration: none;

    &:hover {
      background: lighten($mainColor, 5%);
    }

    &:active, &.active {
      background: darken($mainColor, 20%);
    }
  }

  .slider {
    background: darken($mainColor, 1%);
    /*height: 50px;*/
    width: 1200px;
    /*overflow: scroll;*/
    padding: 5px 0;
    text-align: center;

    button {
      display: inline-block;
      font-size: 0.8rem;
      margin: 5px;
      background: none;

      &.active {
        background: darken($mainColor, 12%);
      }
    }
  }
</style>
