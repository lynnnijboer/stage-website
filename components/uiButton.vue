
<template>
  <a 
    v-if="buttonText && link" 
    :href="link"
    >
    <button 
        class="ui-button" 
        :class="color !== 'transparant' && variant === 'filled'
            ? `bg-color-${color} py-1 px-3`
            : color === 'transparant'
              ? 'btn-transparant'
              : ''"
      >
        {{ buttonText }}
    </button>
  </a>
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
    },
    link: {
      type: String,
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

.btn-transparant {
  background-color: transparent;
  text-decoration: underline;
}
</style>
