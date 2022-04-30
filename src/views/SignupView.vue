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
      @click="clientRegister">
      Submit
      </v-btn>
    </v-container>
  </v-form>
  
    <CSignComp/>
    </div>
</template>

<script>
import CSignComp from '@/components/CSignComp.vue'
import axios from 'axios';
import cookies from 'vue-cookies'

    export default {
        name :"SignupView",
        components : {
          CSignComp
        },
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
    methods: {
        clientRegister() {
            axios.request({
                url: process.env.VUE_APP_API_URL + "client" ,
                method : "POST",
                headers:{
                   'x-api-key': process.env.VUE_APP_API_KEY
                },
                data : { 
                    email: this.email,
                    username : this.username,
                    firstName:this.firstName,
                    lastName:this.lastName,
                    password:this.password
                },
                
            }).then((response)=>{
                console.log("successs");
                cookies.set('sessionToken' , response.data.token)
            }).catch((error)=>{
                console.log(error.response.status);
               
            })
        }
    },
    }
    
</script>

<style lang="scss" scoped>

</style>