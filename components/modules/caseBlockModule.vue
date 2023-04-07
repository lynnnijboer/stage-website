
<template>
    <div class="caseBlockModule">
    <caseBlock/>
    <caseBlock img="https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    <caseBlock img="https://images.pexels.com/photos/10706618/pexels-photo-10706618.jpeg?auto=compress&cs=tinysrgb&w=800"/>
  </div>
</template>

<script>
import caseBlock from '../caseBlock.vue';

export default {
  name: 'caseBlockModule',
  components: { caseBlock }
}
</script>

<style lang="scss" scoped>
.caseBlockModule {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @include media-breakpoint-up(md) {
    grid-template-columns: 1fr 1fr;
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
