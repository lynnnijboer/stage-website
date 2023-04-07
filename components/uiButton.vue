
<template>
  <button class="ui-button py-1 px-3" :class="color && variant === 'filled' ? `bg-color-${color}` : 'bg-color-alpha'">{{ buttonText }}</button>
</template>

<script>

export default {
  name: 'uiButton',
  props: {
    buttonText: {
      type: String,
      default: "portfolio"
    },
    variant: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  color: var(--color-light);
  border: unset;
  width: fit-content;
}
</style>
