<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-spacer class="d-flex align-start justify-center">

      <v-spacer style="width: 100%; max-width: 1110px;">

        <default-bar />

        <default-view />
        <DefaultFooter/>
      </v-spacer>
    </v-spacer>

  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from './Footer.vue';
</script>
