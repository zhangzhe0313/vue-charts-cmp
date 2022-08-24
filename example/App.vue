<template>
  <div>
    <h1>this is main App Test Page</h1>

    <!-- <vcc-reversebar
      :source="testData"
    /> -->

    <!-- <vcc-piebar
      :source="testData"
    /> -->

    <!-- <vcc-blinebar
      :source="testData"
    />  -->

    <vcc-verticalbar 
      :source="testData"
      :color="color"
    />

  </div>
</template>

<script>
// import VccReversebar from '../packages/charts/reversebar/src/index.vue';

// import VccPiebar from '../packages/charts/piebar/src/index.vue';

// import VccBlinebar from '../packages/charts/blinebar/src/index.vue';

import VccVerticalbar from '../packages/charts/verticalbar/src/index.vue';

export default {
  name: 'AppTest',
  components: {
    // VccReversebar,
    // VccPiebar,
    // VccBlinebar,
    VccVerticalbar
  },
  data() {
    return {
      // colors: ['#ff0000', '#0000ff'],
      // color: '#0000ff',
      testData: [
        {
          name: 'A',
          value: 90
        }, {
          name: 'B',
          value: 80
        }, {
          name: 'C',
          value: 60
        }, {
          name: 'D',
          value: 20
        }
      ],
      // testData: [
      //   {
      //     name: 'A',
      //     data: [
      //       {
      //         name: 'mon',
      //         value: 100
      //       }, {
      //         name: 'tue',
      //         value: 200
      //       }, {
      //         name: 'wed',
      //         value: 400
      //       }
      //     ]
      //   }, {
      //     name: 'B',
      //     data: [
      //       {
      //         name: 'mon',
      //         value: 300
      //       }, {
      //         name: 'tue',
      //         value: 600
      //       }, {
      //         name: 'wed',
      //         value: 900
      //       }
      //     ]
      //   }, 
      // ],
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

      // testData: [
      //   {
      //     name: 'mon',
      //     value: 100
      //   }, {
      //     name: 'tue',
      //     value: 300
      //   }, {
      //     name: 'tue',
      //     value: 50
      //   }
      // ],
    }
  },
  // mounted() {
  //   const _that = this;
  //   let cnt = 1;

  //   setInterval(() => {
  //   //   _that.testData.shift();
  //   //   _that.testData.push({
  //   //     name: 'A' +  cnt,
  //   //     value: Math.round(Math.random() * 100)
  //   //   })

  //     _that.testData.forEach(ele => {
  //       ele.data.shift();
  //       ele.data.push({
  //         name: 'mon' + cnt,
  //         value: Math.round(Math.random() * 100)
  //       })
  //     })

  //     cnt++;
  //   }, 3000)
  // }
}

</script>
