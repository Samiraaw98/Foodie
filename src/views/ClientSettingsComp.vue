<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'
import cookies from "vue-cookies"
    export default {
        name : 'ClientSettingsComp',
        data (){
            return {
                username : "",
                 firstName : "",
                lastName : "",
                password : "",
            };
        },
        methods : {
            




            updated (){
                axios.request({
                    url:process.env.VUE_APP_API_URL + "client",
                    method : "PATCH",
                    headers : {
                        token : "sessionToken",
                        'x-api-key': process.env.VUE_APP_API_KEY,
                    },
                    data : {
                        username : this.username,
                        firstName : this.firstName,
                        lastName : this.lastName,
                        password : this.password,
                    }
                }).then((response)=>{
                    console.log(response);
                    cookies.get('sessionToken', response.data)
                }).catch((error)=>{
                    console.log("error");
                    console.log(error,respomse.status);
                })
            }
            

            }
        }
    
</script>

<style lang="scss" scoped>

</style>