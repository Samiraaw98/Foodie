<template>
    <div>
  <router-link to="/" >Home</router-link> 
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="5"
          md="4"
        >
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="5"
          md="4"
        >
          <v-text-field
            v-model="firstName"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="5"
          md="4"
        >
          <v-text-field
            v-model="lastName"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="5"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
         <v-col
          cols="5"
          sm="5"
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
      </v-row>
       <v-btn
      elevation="2"
      color="yellow"
      @click="clientRegistered">
      Submit
      </v-btn>
    </v-container>
  </v-form>
  

    </div>
</template>

<script>


import {useMainStore} from '@/stores/main.js'
import {mapActions} from 'pinia';
    export default {
        name :"SignupView",
         data: () => ({
      valid: false,
      firstName: '',
      lastName: '',
      username:'',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      show3: false,
        password: '',
    }),
    computed :{

    },
    methods: {
      ...mapActions(useMainStore,['clientRegister']),
      clientRegistered(){
        this.clientRegister(this.username, this.firstName, this.lastName,this.email,this.password)
      },
      handleError(response){
        console.log(response);
      },
      mounted (){
        useMainStore().$onAction(({name,after})=>{
          if (name == "clientRegisteredAlert"){
            console.log("loading");
            after((response)=>{
              this.handleError(response);
            })
          }
        });
      },
    }
    
    }
      </script>

    
  
<style lang="scss" scoped>
html{
  background-color: grey;
}

</style>
  