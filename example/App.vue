<template>
  <div>
    <h1>this is main App Test Page</h1>

    <vcc-reversebar />
  </div>
</template>

<script>
import VccReversebar from '../packages/charts/reversebar/src/index.vue';

export default {
  name: 'AppTest',
  components: {
    VccReversebar
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
