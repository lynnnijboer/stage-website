
<template>
  <nav>
    <ul class="nav-items d-flex list-unstyled justify-content-end px-2">
      <li class="list-item p-3"><a class="text-color-dark" href="#">home</a></li>
      <li class="list-item p-3"><a class="text-color-dark" href="#">projecten</a></li>
      <li class="list-item p-3"><a class="text-color-dark" href="#">contact</a></li>
      <uiButton/>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'navMenu',
  components: { uiButton }
}
</script>

<style lang="scss" scoped>
.nav-items {
  flex-direction: column;

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }
}
</style>
