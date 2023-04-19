
<template>
  
    <div class="skillBlockModule">
      <div class="container">
        <div :class="skillBlocks.length === 1 ? '' : 'skillBlocks__grid'" class="skillBlockModule__skillBlocks">
          <skillBlock 
            v-for="(skillBlock, index) in skillBlocks" 
            :key="index" 
            :text="skillBlock.fields.text" 
            :title="skillBlock.fields.title"/>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'skillBlockModule',
  props: {
    skillBlocks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.skillBlockModule {
  height: 70%;
  transform: translateY(-10%);

  @include media-breakpoint-up(md) {
    transform: translateY(-20%);
  }

  @include media-breakpoint-up(lg) {
    transform: translateY(-30%);
  }

  .skillBlocks__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    @include media-breakpoint-up(lg) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
