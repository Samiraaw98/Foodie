<template>
    <div>
        <router-link to="/" >Home</router-link>
  <h1> Foodie</h1>
          <p>Log in below </p>
  <v-form id="form">
    <v-container fluid >
      <v-alert v-if="isAlert" type="error"> Wrong username or password</v-alert>
      <v-alert v-if="isLoggedIn" type="success">
        Login successful
      </v-alert>
      <v-col
          cols="6"
          md="12" >
          <v-text-field class="text"
            v-model= "email"
            label="E-mail"
            
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

      <v-btn
      elevation="2"
      color="yellow"
      @click="restLogin"
       > 
      Log in 
      </v-btn>
    </v-container>
      </v-form >
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '@/router'
    export default {
        name: "RestLoginView",
        data(){
            return{
                email : "",
                show3:false,
                password:'',
                isAlert:false,
                isLoggedIn:false,
                rules: {
                    emailMatch:()=>("The email and password you entered don't match"),
                },
            }
        },
        methods:{
            restLogin(){
                axios.request({
                    url:process.env.VUE_APP_API_URL + "restaurant-login",
                    method: "POST",
                    headers:{
                        'x-api-key': process.env.VUE_APP_API_KEY,
                    },
                    data:{
                        email : this.email,
                        password : this.password,
                    },

                }).then((response)=>{
                    cookies.get('sessionToken' , response.data.token),
                    this.isAlert = false,
                    this.isLoggedIn = true,
                    console.log(response);
                    router.push('/rprofile')
                }).catch((error)=>{
                    this.isAlert = true;
                    console.log(error.response.status);
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>