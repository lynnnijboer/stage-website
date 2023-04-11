<template>
  <div class="container">
    <div class="modules">
      <modules :modules="modules"/>
    </div>
  </div>
</template>

<script>
import modules from "../components/modules.vue";
import caseBlockModule from "../components/modules/caseBlockModule.vue";
import heroModule from "../components/modules/heroModule.vue";
export default {
  name: 'IndexPage',
  components: { modules, caseBlockModule, heroModule },
  data() {
    return {
      modules: [
        {
          type: 'hero',
          title: 'Title 1',
          text: 'hallo ik ben lynn'
        },
        {
          type: 'cases',
          title: 'Title 2',
          caseBlocks: [
            {
              img: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {
              img: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800"
            },
            {
              img: "https://images.pexels.com/photos/3182829/pexels-photo-3182829.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
          ]
        },
      ]
    }
  }
}
</script>
