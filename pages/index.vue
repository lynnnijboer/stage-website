<template>
  <div class="container">
    <div class="modules">
      <modules />
    </div>
    <caseBlockModule/>
  </div>
</template>

<script>
import modules from "../components/modules.vue";
import caseBlockModule from "../components/modules/caseBlockModule.vue";
export default {
  name: 'IndexPage',
  components: { modules, caseBlockModule }
}
</script>
