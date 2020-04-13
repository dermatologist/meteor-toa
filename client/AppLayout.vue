<template>
  <div class="app-layout">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from './AppMenu.vue';

export default {
  components: {
    AppMenu
  }
}
</script>