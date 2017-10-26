<template>
  <div>
    <div class="position-relative">
      <button class="edge edge-left" @click="prev">&laquo;</button>
      <button class="edge edge-right" @click="next">&raquo;</button>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div
            style="background: #fefefe; margin: 10px; padding: 20px; border: 1px solid #f8f8f8; min-height: 90vh; margin-bottom: 60px;">
            <transition name="slideup" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-bottom">
      <!--<Navigation></Navigation>-->
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'
  import BigTitle from './components/BigTitle'

  export default {
    name: 'app',

    components: {
      Navigation, BigTitle,
    },

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

    methods: {
      prev () {
        const index = this.list.indexOf(this.$router.currentRoute.name)
        if (index) {
          this.$router.push({name: this.list[index - 1]})
        }
      },

      next () {
        const index = this.list.indexOf(this.$router.currentRoute.name)
        if (index + 1 < this.list.length) {
          this.$router.push({name: this.list[index + 1]})
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  body {
    background-color: #fcfcfc;
  }

  button.edge {
    border: none;
    background: white;
    position: fixed;
    height: 100vh;
    width: 60px;
    outline: none;

    &.edge-left {
      left: 0;
      &:hover {
        background: #64b487;
        background: linear-gradient(to right, #64b487 10%, transparent 80%);
      }
    }

    &.edge-right {
      right: 0;
      &:hover {
        background: #64b487;
        background: linear-gradient(to left, #64b487 10%, transparent 80%);
      }
    }

    .slideup-enter-active {
      transition: all 600ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .slideup-leave-active {
      /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
    }

    .slideup-enter, .slideup-leave-to {
      transform: translateY(20px);
      opacity: 0;
    }

  }
</style>
