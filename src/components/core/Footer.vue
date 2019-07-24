<template>
  <alpha-footer
    :categories="categories"
    :company="$t('Footer.company')"
    facebook="#!"
    twitter="#!"
  >
    <span>
      &copy; 2019
      {{ $t('Footer.company') }}
      &mdash;
      {{ $t('Footer.rights') }}
    </span>
  </alpha-footer>
</template>

<script>
  export default {
    computed: {
      categories () {
        return this.$t('Footer.categories')
      }
    }
  }
</script>
