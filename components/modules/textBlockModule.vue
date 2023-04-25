
<template>
  <div 
      class="textBlockModule" 
      :class="bgDark === true ? 'bg-color-beta' : 'bg-color-light'"
    >
    <div class="container">
      <div 
        class="textBlockModule__wrapper"
        :class="[textBlocks.length === 1 ? 'text-center text m-auto' : 'd-flex flex-row flex-wrap',
          bgDark === true ? 'text-color-light padding-bg-dark' : 'text-color-dark']">
        <div 
          v-for="(block, index) in textBlocks" 
          :key="index"
          class="textBlockModule__textBlock w-100" 
          :class="[
              textBlocks.length === 1 ? 'col-12' : '',
              textBlocks.length === 2 ? 'col-12 col-md-6' : '',
              textBlocks.length === 3 ? 'col-12 col-md-4' : ''
            ]" 
        >
          <textBlock
              :title="block.fields.title"
              :text="block.fields.text"
              :buttonText="block.fields.buttonText"
              :buttonColor="block.fields.buttonColor"
              :buttonLink="block.fields.buttonLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "textBlockModule",
  props: {
    textBlocks: {
      type: Array,
    },
    bgDark: {
      type: Boolean,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.textBlockModule {
  padding-top: rem(100px);
  padding-bottom: rem(100px);


  .text {
    width: 100%;
    max-width: 700px;
  }


  .padding-bg-dark {
    padding-top: rem(50px);
    padding-bottom: rem(50px);
  }
}
</style>
