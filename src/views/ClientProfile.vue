<template>
    <div id="profile">
        <nav>
        <h1>Foodie</h1>
       <router-link to = '/csettings' ><img src="https://cdn-icons-png.flaticon.com/512/126/126472.png" height=50px></router-link>
       <h4 id="menu">Find a restaurant near you!</h4>
        <v-btn
      elevation="2"
      color="yellow"
      @click="logout"
       > 
      Log out 
      </v-btn>
        </nav>

         <!-- <button @click="profile">profile</button> | -->
          <button @click="getInfo">info</button>  
        <h2> Hello {{username}}</h2>

    
        </div>

      
    
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
   import router from '@/router'
   import {useMainStore} from '@/stores/main'
   import {mapState} from 'pinia'
    export default {
        name : "ClientProfile",
        computed: {
            ...mapState(useMainStore,['username']),
            ...mapState(useMainStore,['initial'])
        },
        data (){
            return {
                username : this.username
            }
            

        },
        methods : {
            getInfo(){
                axios.request({
                    url:process.env.VUE_APP_API_URL +"client",
                    method : "GET",
                    headers: {
                        token: cookies.get('sessionToken'),
                        'x-api-key' : process.env.VUE_APP_API_KEY,
                    },
                }).then((response)=>{
                     cookies.get('sessionToken',response.data);
                    console.log(response.data);
                   this.username = response.data.username;
                    console.log("success");
                    
                }).catch((error)=>{
                    console.log(error.response.status.data);
                    console.log("error");
                  
                })
            },
             menu(){
               axios.request({
                     method : "GET",
                     url : process.env.VUE_APP_API_URL + "menu",
                    headers : {
                        'x-api-key':process.env.VUE_APP_API_KEY,
                    },
                }).then((response)=>{
                    cookies.get ('sessionToken',)
                    console.log(response);
                     console.log("success");
               }).catch((error)=>{
                    console.log(error);
                 })

             },
            logout(){
                axios.request({
                    method : "DELETE",
                    url : process.env.VUE_APP_API_URL  + "client-login",
                    headers: {
                        'x-api-key': process.env.VUE_APP_API_KEY,
                       "sessionToken": cookies.get('token')
                    },
                }).then((response)=>{
                    cookies.remove('sessionToken'),
                    console.log("success");
                    console.log(response);
                    router.push('/')
                }).catch((error)=>{
                    console.log(error.response.status.data);
                    console.log("error");
                })
            },
            getters: {
            initial : state =>{
                   return state.username;
               }
         }
           
            }
    }
    
       
        
    
</script>

<style lang="scss" scoped>
html{
    background-color: white;
}
nav{
    display: grid;
    grid-template-columns: 5fr 1fr;
    background-color: rgba(120, 31, 31, 0.859);
    color: white;
}
h1{
    text-align: center;
    font-size: 3em;
}
h2{
    text-align: center;
}
</style>