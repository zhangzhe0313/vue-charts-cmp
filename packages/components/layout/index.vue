<template>
  <div v-if="source && source.length > 0">
    <slot />
  </div>
  <EmptyData v-else />
</template>

<script>
import EmptyData from '../empty/index.vue';

export default {
  name: 'LayoutCmp',
  components: {
  EmptyData
  },
  props: {
    source: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>