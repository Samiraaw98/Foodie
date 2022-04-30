<template>
    <div>
         <router-link to="/" >Home</router-link> 
  <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Registration successful!</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-form
      ref="form"
      @submit.prevent="submit"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.restName"
              :rules="rules.name"
              color="purple darken-2"
              label="Restaurant name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.address"
              :rules="rules.name"
              color="blue darken-2"
              label="Address"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="form.bio"
              color="teal"
            >
              <template v-slot:label>
                <div>
                  Bio <small>(optional)</small>
                </div>
              </template>
            </v-textarea>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-select
              v-model="form.city"
              :items="city"
              :rules="rules.city"
              color="pink"
              label="City"
              required
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
          </v-col>
           <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.email"
              :rules="rules.mail"
              color="blue darken-2"
              label="Email"
              required
            ></v-text-field>
          </v-col>
           <v-col
          cols="12"
          sm="6"
        >
           <v-text-field
            v-model="password"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            class="input-group--focused"
            @click:append="show3 = !show3"
          ></v-text-field>
        </v-col>
          
          <v-col cols="12">
            <v-checkbox
              v-model="form.terms"
              color="green"
            >
              <template v-slot:label>
                <div @click.stop="">
                  Do you accept the
                  <a
                    href="#"
                    @click.prevent="terms = true"
                  >terms</a>
                  and
                  <a
                    href="#"
                    @click.prevent="conditions = true"
                  >conditions?</a>
                </div>
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn
          text
          @click="resetForm"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!formIsValid"
          text
          color="primary"
          type="submit"
          
        >
          Register
        </v-btn>
      </v-card-actions>
    </v-form>
    <v-dialog
      v-model="terms"
      width="70%"
    >
      <v-card>
        <v-card-title class="text-h6">
          Terms
        </v-card-title>
        <v-card-text
          v-for="n in 5"
          :key="n"
        >
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="purple"
            @click="terms = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="conditions"
      width="70%"
    >
      <v-card>
        <v-card-title class="text-h6">
          Conditions
        </v-card-title>
        <v-card-text
          v-for="n in 5"
          :key="n"
        >
          {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="purple"
            @click="conditions = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
    </div>
</template>

<script>
    export default {
        name : 'RestSignupView',
         data () {
      const defaultForm = Object.freeze({
        restName: '',
        address: '',
        bio: '',
        city: '',
        terms: false,
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          city: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required'],
          emailMatch: () => (`The email and password you entered don't match`),

        },
        city: ['Calgary', 'Edmonton', 'Vancouver', 'Surrey', 'Winnipeg'],
        conditions: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
        show3:false,
        password : false,
        snackbar: false,
        terms: false,
        defaultForm,
      }
    },
  

    computed: {
      formIsValid () {
        return (
          this.form.restName &&
          this.form.address &&
          this.form.city &&
          this.form.terms
        )
      },
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      },
      restRegister(){
          axios.request({
              url: process.env.VUE_APP_API_URL + "client" ,
          })
      }
    },
  }
        
    
</script>

<style lang="scss" scoped>

</style>