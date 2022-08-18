<template>
  <div>
    <h1>this is main App Test Page</h1>

    <!-- <vcc-reversebar
      :source="testData"
    /> -->

    <!-- <vcc-piebar
      ring
      :source="testData"
      :colors="colors"
    /> -->

    <vcc-blinebar
      :source="testData"
      :colors="colors"
    />

  </div>
</template>

<script>
// import VccReversebar from '../packages/charts/reversebar/src/index.vue';

// import VccPiebar from '../packages/charts/piebar/src/index.vue';

import VccBlinebar from '../packages/charts/blinebar/src/index.vue';

export default {
  name: 'AppTest',
  components: {
    // VccReversebar,
    // VccPiebar,
    VccBlinebar
  },
  data() {
    return {
      colors: ['#ff0000', '#0000ff'],
      // testData: [
      //   {
      //     name: 'A',
      //     value: 90
      //   }, {
      //     name: 'B',
      //     value: 80
      //   }
      // ],
      testData: [
        {
          name: 'A',
          data: [
            {
              name: 'mon',
              value: 100
            }, {
              name: 'tue',
              value: 200
            }, {
              name: 'wed',
              value: 400
            }
          ]
        }, {
          name: 'B',
          data: [
            {
              name: 'mon',
              value: 300
            }, {
              name: 'tue',
              value: 600
            }, {
              name: 'wed',
              value: 900
            }
          ]
        }, 
      ],
      // testData: [],
      // options: {
      //   series: [
      //     {
      //       // radius: ['40%', '60%'],
      //       test: {
      //         taruuu: 'ccccc',
      //         ooo: [12312, 123123]
      //       }
      //     }
      //   ]
      // }
    }
  }
}

</script>
