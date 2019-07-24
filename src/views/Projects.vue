<template>
  <v-container fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex shrink />
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    metaInfo () {
      return {
        title: this.$i18n.t('Projects.jumbotronTitle')
      }
    }
  }
</script>
