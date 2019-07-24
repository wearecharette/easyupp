<template>
  <div>
    <v-container fill-height>
      <v-layout
        justify-center
        align-center
        wrap
      >
        <v-flex
          tag="h2"
          display-1
          text-xs-center
          xs12
          mb-3
        >
          EasyUpp by the numbers
        </v-flex>
        <v-flex
          xs12
          sm6
          md6
          pa-2
        >
          <v-card
            color="blue-grey darken-2"
            class="white--text"
          >
            <v-card-title primary-title>
              <div class="headline">
                1. Find the right vehicle.
              </div>
            </v-card-title>
            <v-card-text>
              <p>Since we list all the inventory of our dealer partners here on EasyUpp.com, you only have to search one place for the right vehicle.  We have also made the inventory public so that you can send the link to your client to confirm their interest.</p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm6
          md6
          pa-2
        >
          <v-card
            color="blue-grey darken-2"
            class="white--text"
          >
            <v-card-title primary-title>
              <div class="headline">
                2. Set an Appointment.
              </div>
            </v-card-title>
            <v-card-text>
              <p>Now that you've found the right vehicle, confirm it's availability and set an appointment with the store that has it.  This will all be done through EasyUpp messaging in your account.</p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm6
          md6
          pa-2
        >
          <v-card
            color="blue-grey darken-2"
            class="white--text"
          >
            <v-card-title primary-title>
              <div class="headline">
                3. Sell the car!
              </div>
            </v-card-title>
            <v-card-text>
              <p>When you meet your client at the store of our EasyUpp dealer partner, you will show them the vehicle, confirm the numbers, and your clients will finish their paperwork. You already know how to do this!</p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          sm6
          md6
          pa-2
        >
          <v-card color="accent">
            <v-card-title primary-title>
              <div class="headline">
                4. Get paid!
              </div>
            </v-card-title>
            <v-card-text>
              <p>Shortly after the transaction is finalized, you'll see $350 appear in your EasyUpp account.  All for helping a customer buy a vehicle they love!  Don't forget to ask for referrals!</p>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          xs12
          mb12
          text-xs-right
        >
          <v-btn
            color="primary"
            dark
            to="contact"
          >
            Become a Salesman
          </v-btn>
          <div class="pa-2">
            <p><a href="/services">Become a Dealer</a>?</p>
          </div>
        </v-flex>
        <v-flex
          tag="h2"
          display-1
          text-xs-center
          v-text="$t('Home.platformHeader')"
        />

        <v-flex
          class="subheading"
          tag="h3"
          text-xs-center
          mb-5
          v-text="$t('Home.platformSubHeader')"
        />

        <v-flex
          xs12
          mb-5
        >
          <alpha-card-feature :features="cardFeatures" />
        </v-flex>
      </v-layout>
    </v-container>

    <v-img
      :height="$vuetify.breakpoint.mdAndUp ? 1000 : 'auto'"
      src="/static/autos.jpeg"
      gradient="to top, rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)"
      class="py-5 white--text"
    >
      <v-container
        fill-height
        grid-list-xl
      >
        <v-layout
          align-center
          justify-space-around
          wrap
        >
          <v-flex
            v-for="(testimonial, i) in testimonials"
            :key="i"
            xs12
            sm5
          >
            <alpha-testimonial
              :author="testimonial.author"
              :title="testimonial.title"
              :quote="testimonial.quote"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>
  export default {
    metaInfo () {
      return {
        title: this.$i18n.t('Home.jumbotronTitle')
      }
    },

    data: () => ({
      items: ['/static/autos.jpeg']
    }),

    computed: {
      cardFeatures () {
        return this.$t('Home.cardFeatures')
      },
      testimonials () {
        return this.$t('Home.testimonials')
      }
    }
  }
</script>
