<template>
  <section>
    <div v-for="(module, index) in modules" :key="index">
      <caseBlockModule v-if="module.type === 'cases'" :caseBlocks="module.caseBlocks" :title="module.title" :img="img" :icon="icon"/>
      <heroModule v-if="module.type === 'hero'" :title="module.title" :text="module.text" :buttonColor="module.buttonColor" :buttonText="module.buttonText"/>
      <textBlockModule v-if="module.type === 'textBlock'" :textBlocks="module.textBlocks"/>
    </div>
  </section>
</template>

<script>
import caseBlockModule from './modules/caseBlockModule.vue';
import heroModule from './modules/heroModule.vue';
import textBlockModule from './modules/textBlockModule.vue';

export default {
  components: { caseBlockModule, heroModule, textBlockModule },
  name: 'modules',
  props: {
    modules: {
      type: Array,
      required: true
    }
  }
}
</script>
