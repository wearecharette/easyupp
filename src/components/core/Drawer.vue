<template>
  <v-navigation-drawer
    v-model="inputValue"
    temporary
    right
    fixed
    class="accent"
  >
    <v-list>
      <v-list-tile>
        <v-spacer />
        <v-btn
          icon
          @click="toggleDrawer"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <v-list-tile-title v-text="item.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState(['drawer']),
      inputValue: {
        get () {
          return this.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      items () {
        return this.$t('View.items')
      }
    },

    methods: {
      ...mapMutations(['setDrawer', 'toggleDrawer'])
    }
  }
</script>
