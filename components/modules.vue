<template>
  <section>
    <div v-for="(module, index) in modules" :key="index">
      <caseBlockModule/>
    </div>
  </section>
</template>

<script>
import caseBlockModule from './modules/caseBlockModule.vue';

export default {
  components: { caseBlockModule },
  name: 'modules'
}
</script>
