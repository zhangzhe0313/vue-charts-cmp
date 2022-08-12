<template>
  <div>
    <h1>this is main App Test Page</h1>

    <vcc-reversebar
      :source="testData"
    />
  </div>
</template>

<script>
import VccReversebar from '../packages/charts/reversebar/src/index.vue';

export default {
  name: 'AppTest',
  components: {
    VccReversebar
  },
  data() {
    return {
      testData: [
        {
          name: 'A',
          value: 10
        }, {
          name: 'B',
          value: 80
        }, {
          name: 'C',
          value: 30
        }, {
          name: 'D',
          value: 100
        }, {
          name: 'E',
          value: 300
        }
      ]
    }
  }
}

</script>
