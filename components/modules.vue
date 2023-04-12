<template>
  <section>
    <div v-for="(module, index) in modules" :key="index">
      <caseBlockModule v-if="module.type === 'cases'" :caseBlocks="module.caseBlocks" :title="module.title" :img="module.img" :icon="module.icon"/>
      <heroModule v-if="module.type === 'hero'" :title="module.title" :text="module.text" :buttonColor="module.buttonColor" :buttonText="module.buttonText"/>
      <textSlider v-if="module.type === 'textSlider'" :word="module.word" :textSlider="module.textSlider"/>
      <textBlockModule v-if="module.type === 'textBlock'" :textBlocks="module.textBlocks"/>
    </div>
  </section>
</template>

<script>
import caseBlockModule from './modules/caseBlockModule.vue';
import heroModule from './modules/heroModule.vue';
import textBlockModule from './modules/textBlockModule.vue';
import textSlider from './modules/textSlider.vue';

export default {
  components: { caseBlockModule, heroModule, textBlockModule, textSlider },
  name: 'modules',
  props: {
    modules: {
      type: Array,
      required: true
    }
  }
}
</script>
