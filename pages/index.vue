<template>
  <div class="container">
    <div class="modules">
      <modules />
    </div>
    <heroModule/>
    <caseBlockModule/>
  </div>
</template>

<script>
import modules from "../components/modules.vue";
import caseBlockModule from "../components/modules/caseBlockModule.vue";
import heroModule from "../components/modules/heroModule.vue";
export default {
  name: 'IndexPage',
  components: { modules, caseBlockModule, heroModule }
}
</script>
