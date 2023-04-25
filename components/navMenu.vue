<template>
  <nav class="navigation">
    <div class="hamburger-icon" @click="showMenu()"> 
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <ul
      v-if="listItems"
      class="nav-items d-flex list-unstyled mb-0"
      :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'" 
      >
      <li 
        v-for="(item, index) in listItems" 
        :key="index" 
        class="nav-items__item">
        <a 
          class="text-color-light" 
          :href="item.link">
          {{ item.itemText }}
        </a>
      </li>
      <uiButton 
        class="nav-button nav-items__item" 
        :link="buttonLink"
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
    },
    buttonLink: {
      type: String
    }
  },

  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: var(--color-alpha);
  z-index: 999;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .open-menu {
    opacity: 1;
    height: 100vh;
  }

  .closed-menu {
    opacity: 0;
    height: 0;
    width: 0;
    padding: 0;
  }

  .hamburger-icon {
    cursor: pointer;
    display: inline-block;

    .bar1,
    .bar2,
    .bar3 {
      width: 35px;
      height: 5px;
      background-color: #333;
      margin: 6px 0;
      transition: 0.4s;
    }

    @include media-breakpoint-up(sm) {
      display: none;
    }
  }

  .nav-items {
    transition: all 0.2s ease-out;
    flex-direction: column;
    padding: 0;
    justify-content: flex-start;

    &__item {
      padding: {
        top: 1rem;
        bottom: 1rem;
        left: 0;
        right: 1rem;
      }

      @include media-breakpoint-up(sm) {
        padding: 1rem;
      }
    }

    @include media-breakpoint-up(sm) {
      flex-direction: row;
      height: auto;
      padding: 0;
      align-items: center;
      justify-content: flex-end;
    }
  }

  @include media-breakpoint-up(sm) {
    padding: 0rem;

    .closed-menu {
      opacity: 1;
      height: auto;
    }
  }

}
</style>
