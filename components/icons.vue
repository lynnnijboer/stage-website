<template>
    <div class="icon" v-html="require(`~/assets/svg/${icon}.svg?raw`)"/>
</template>


<script>

export default {
  name: 'icons',
  props: {
    icon: {
      type: String,
      default: 'arrow-left'
    },
  }
}
</script>

<style>
.icon {
  width: 40px;
}
</style>

