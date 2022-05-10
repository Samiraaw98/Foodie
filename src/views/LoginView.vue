<template>
    <div>
          <h1> Foodie</h1>
          <p>Log in below </p>
        <v-form id="form">
    <v-container fluid >
      <v-alert v-if="isAlert" type="error"> Wrong username or password</v-alert>
      <v-alert v-if="isLoggedIn" type="success">
        Login successful , welcome {{email}}
      </v-alert>
      <v-col
          cols="8"
          md="8" >
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
      @click="login"
       > 
      Log in 
      </v-btn>
      <v-container id="signup">
          New to Foodie? Sign up with us now
        <router-link  tag="button"  to="/signup" >Sign Up</router-link>
        </v-container>
        <v-container id="restsignup">
            <p>Restaurant partner ? Sign up or log in!</p>
            <router-link tag="button" to="/rsignup">Sign up</router-link>
            <router-link tag="button" to="/rlogin">Log in</router-link>
        </v-container>


    </v-container>
    </v-form>

    </div>
</template>


<script>

import axios from 'axios'
 import cookies from 'vue-cookies'
 import router from '@/router'



    export default {

        name : "LoginView",
       
        data () {
      return {
        email:'',
        show3: false,
        password: '',
        isAlert: false,
        isLoggedIn:false,
        rules: {
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
    methods: {
      login(){
        axios.request({
          url:process.env.VUE_APP_API_URL + "client-login",
          method : "POST",
          headers: {
            'x-api-key': process.env.VUE_APP_API_KEY,
            
          },
          data :{
            email:this.email,
            password:this.password,
          },
        }).then((response)=>{
            cookies.set('sessionToken',response.data.token ),
            this.isAlert = false,
            this.isLoggedIn = true,
            console.log(response);
            router.push('/cprofile')
        }).catch((error)=>{
          this.isAlert = true;
          console.log(error.response.status);
        })
          
      }
    }
  }
   
    
</script>

<style lang="scss" scoped>
*{
  background-color: lightslategrey;
}
h1{
      text-align: center;
      background-color : rgb(255, 255, 255);
      
    }
   #signup{
       button{
           background-color: navy;
           border-radius: 25px;
           width: 100px;
           height: 30px;
           color: white;
           font-size: 1.3em;
            border: 1.5px solid rgb(207, 207, 207);
       }
   }
    #restsignup{
       button{
           background-color: navy;
           border-radius: 25px;
           width: 100px;
           height: 30px;
           color: white;
           font-size: 1.3em;
            border: 1.5px solid rgb(207, 207, 207);
       }
       p{
           font-weight: bold;
       }
   }




</style>