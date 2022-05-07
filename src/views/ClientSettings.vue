<template>
    <div>
         <router-link to="/cprofile" >Home</router-link> 
        <h1> Welcome {{this.username}}</h1>
        <!-- <h3>{{email}}</h3>
        <h5>{{bio}}</h5>
        <p>{{birthdate}}</p>  -->
        <button @click= "profile">profile</button>
    </div>
</template>

<script>
import axios from 'axios'
//  import cookies from 'vue-cookies'
    export default {
        name: "ClientSettings",
        data(){
            return {
                email : "",
                firstName : "",
                lastName : "",
                username : '',
            }
        },
        methods : {
            profile(){
                axios.request({
                    url :process.env.VUE_APP_API_URL + "client",
                    method : "GET",
                    headers: {
                       token: "sessionToken",
                        'x-api-key' : process.env.VUE_APP_API_KEY,
                    },
                    
                }).then((response)=>{
                    console.log(response.data);
                    //  cookies.get('sessionToken' , response.data)
                }).catch((error)=>{
                    console.log(error.response.status);
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
  

</style>