
<template>
  <nav>
    <ul class="nav-items d-flex list-unstyled justify-content-end px-2">
      <li v-for="(item, index) in listItems" :key="index" class="list-item p-3"><a class="text-color-dark" :href="item.link">{{ item.itemText }}</a></li>
      <uiButton class="nav-button" :buttonText="buttonText" :color="color"/>
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
.nav-items {
  flex-direction: column;
  align-items: center;

  .nav-button {
    height: 100%;
  }

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }
}
</style>
