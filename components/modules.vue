<template>
  <section>
    <div v-for="(module, index) in modules" :key="index">
      <caseBlockModule/>
      <heroModule/>
    </div>
  </section>
</template>

<script>
import caseBlockModule from './modules/caseBlockModule.vue';
import heroModule from './modules/heroModule.vue';

export default {
  components: { caseBlockModule, heroModule },
  name: 'modules'
}
</script>
