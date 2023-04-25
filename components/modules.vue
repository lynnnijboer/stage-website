<template>
  <section>
    <div 
      v-for="(module, index) in modules" 
      :key="index">
      <modulesCaseBlockModule 
        v-if="module.sys.contentType.sys.id === 'casesModule'" 
        :caseBlocks="module.fields.caseBlocks" 
        :title="module.fields.title" 
      />
      <modulesTextSlider 
        v-if="module.sys.contentType.sys.id === 'textSlider'" 
        :words="module.fields.words" 
      />
      <modulesTextBlockModule 
        v-if="module.sys.contentType.sys.id === 'textBlockModule'" 
        :textBlocks="module.fields.textBlocks" 
        :bgDark="module.fields.backgroundDark"
      />
      <modulesImageTextBlock 
        v-if="module.sys.contentType.sys.id === 'imageTextBlock'" 
        :title="module.fields.title" 
        :text="module.fields.text" 
        :img="module.fields.img.fields.file.url" 
        :buttonColor="module.fields.buttonColor" 
        :buttonText="module.fields.buttonText" 
        :buttonLink="module.fields.buttonLink"
      />
      <modulesSkillBlockModule 
        v-if="module.sys.contentType.sys.id === 'skillBlocks'" 
        :skillBlocks="module.fields.skillBlocks"
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
