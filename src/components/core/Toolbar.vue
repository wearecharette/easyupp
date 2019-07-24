<template>
  <v-toolbar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : undefined"
    :flat="!isScrolling"
    app
    :dark="!isScrolling"
  >
    <img
      :src="!isScrolling ? '/static/easyupp-logo-dark.png' : '/static/easyupp-logo-light.png'"
      @click="goHome"
    >
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :active-class="'accent black--text'"
        :to="item.to"
        :exact="item.text === 'Easyupp'"
        flat
      >
        <span v-text="item.text" />
      </v-btn>
    </v-toolbar-items>
    <v-btn
      v-else
      icon
      @click="toggleDrawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false
    }),

    computed: {
      items () {
        return this.$t('View.items')
      }
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      goHome () {
        this.$router.push('/')
      },
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      }
    }
  }
</script>
