<template>
  <section>
    <div v-for="(module, index) in modules" :key="index">
      <caseBlockModule v-if="module.type === 'cases'" :caseBlocks="module.caseBlocks" :title="module.title" :img="module.img" :icon="module.icon"/>
      <heroModule v-if="module.type === 'hero'" :title="module.title" :text="module.text" :buttonColor="module.buttonColor" :secondButtonColor="module.secondButtonColor" :buttonText="module.buttonText" :secondButtonText="module.secondButtonText"/>
      <textSlider v-if="module.type === 'textSlider'" :word="module.word" :textSlider="module.textSlider"/>
      <textBlockModule v-if="module.type === 'textBlock'" :paragraphs="module.paragraphs" :textBlocks="module.textBlocks" :bgDark="module.backgroundDark"/>
      <imageTextBlock v-if="module.type === 'imageTextBlock'" :title="module.title" :text="module.text" :img="module.img" :buttonColor="module.buttonColor" :buttonText="module.buttonText" :textBlocks="module.textBlocks"/>
      <skillBlockModule v-if="module.type === 'skillBlock'" :skillBlocks="module.skillBlocks"/>
    </div>
  </section>
</template>

<script>
import caseBlockModule from './modules/caseBlockModule.vue';
import heroModule from './modules/heroModule.vue';
import textBlockModule from './modules/textBlockModule.vue';
import textSlider from './modules/textSlider.vue';
import imageTextBlock from './modules/imageTextBlock.vue';
import skillBlockModule from './modules/skillBlockModule.vue';

export default {
  components: { caseBlockModule, heroModule, textBlockModule, textSlider, imageTextBlock, skillBlockModule },
  name: 'modules',
  props: {
    modules: {
      type: Array,
      required: true
    }
  }
}
</script>
