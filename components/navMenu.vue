
<template>
  <nav class="navigation">
    <ul class="nav-items d-flex list-unstyled justify-content-end px-2">
      <li 
        v-for="(item, index) in listItems" 
        :key="index" 
        class="p-3">
        <a 
          class="text-color-light" 
          :href="item.link">
          {{ item.itemText }}
        </a>
      </li>
      <uiButton 
        class="nav-button" 
        :buttonText="buttonText" 
        :color="color"/>
    </ul>
  </nav>
</template>

<script>
import uiButton from './uiButton.vue';

export default {
  name: 'navMenu',
  components: { uiButton },
  props: {
    listItems: {
      type: Array,
    },
    buttonText: {
      type: String,
      default: 'hallo'
    },
    color: {
      type: String,
      default: 'alpha'
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;

  .nav-items {
    flex-direction: column;
    align-items: center;

    @include media-breakpoint-up(md) {
      flex-direction: row;
    }
  }
}
</style>
