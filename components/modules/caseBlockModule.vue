
<template>
    <div class="caseBlockModule">
    <h3 class="caseBlockModule__title h4">{{ title }}</h3>
    <div class="caseBlocks">
      <caseBlock img="https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800"/>
      <caseBlock img="https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?auto=compress&cs=tinysrgb&w=800"/>
      <caseBlock img="https://images.pexels.com/photos/10706618/pexels-photo-10706618.jpeg?auto=compress&cs=tinysrgb&w=800"/>
    </div>
  </div>
</template>

<script>
import caseBlock from '../caseBlock.vue';

export default {
  name: 'caseBlockModule',
  components: { caseBlock },
  props: {
    title: {
      type: String,
      default: "my work"
    }
  }
}
</script>

<style lang="scss" scoped>
.caseBlockModule {
  padding-top: rem(50px);
  padding-bottom: rem(50px);

  &__title {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    color: var(text-color-beta);
  }

  .caseBlocks {
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
}
</style>
