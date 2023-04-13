
<template>
  <div class="container">
    <div class="caseBlockModule" :class="title ? 'transform-small' : ''">
      <h3 
        v-if="title" 
        class="caseBlockModule__title h4 text-color-dark"
      >
        {{ title }}
      </h3>
      <div class="caseBlocks">
        <caseBlock 
          v-for="(caseBlock, index) in caseBlocks" 
          :key="index" :icon="caseBlock.icon" 
          :img="caseBlock.img" 
          :title="caseBlock.title"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'caseBlockModule',
  props: {
    title: {
      type: String,
      default: "my work"
    },
    caseBlocks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.caseBlockModule {

  padding: {
    top: rem(50px);
    bottom: rem(150px);
  }

  &__title {
    margin-bottom: 20px;
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
