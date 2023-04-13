<template>
  <section>
    <div 
      v-for="(module, index) in modules" 
      :key="index">
      <modulesCaseBlockModule 
        v-if="module.type === 'cases'" 
        :caseBlocks="module.caseBlocks" 
        :title="module.title" :img="module.img" 
        :icon="module.icon"    
      />
      <modulesHeroModule 
        v-if="module.type === 'hero'" 
        :title="module.title" :text="module.text" 
        :buttonColor="module.buttonColor" 
        :secondButtonColor="module.secondButtonColor" 
        :buttonText="module.buttonText" 
        :secondButtonText="module.secondButtonText"
      />
      <modulesTextSlider 
        v-if="module.type === 'textSlider'" 
        :word="module.word" 
        :textSlider="module.textSlider"
      />
      <modulesTextBlockModule 
        v-if="module.type === 'textBlock'" 
        :textBlocks="module.textBlocks" 
        :bgDark="module.backgroundDark"
      />
      <modulesImageTextBlock 
        v-if="module.type === 'imageTextBlock'" 
        :title="module.title" 
        :text="module.text" 
        :img="module.img" 
        :buttonColor="module.buttonColor" 
        :buttonText="module.buttonText" 
      />
      <modulesSkillBlockModule 
        v-if="module.type === 'skillBlock'" 
        :skillBlocks="module.skillBlocks"
      />
    </div>
  </section>
</template>

<script>

export default {
  name: 'modules',
  props: {
    modules: {
      type: Array,
      required: true
    }
  }
}
</script>
