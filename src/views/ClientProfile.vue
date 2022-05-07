<template>
    <div>
        
        <nav>
        <h1>Foodie</h1>
       <router-link to = '/csettings'><img src="https://cdn-icons-png.flaticon.com/512/126/126472.png" height=50px></router-link>
       <h4 id="menu">Find a restaurant near you!</h4>
        </nav>
       <button @click="menu">menu</button> 
    
    </div>
</template>

<script>
    import axios from 'axios'
    import cookies from 'vue-cookies'
    // import router from '@/router'
    export default {
        name : "ClientProfile",
        methods : {
            profile(){
                axios.request({
                    url :process.env.VUE_APP_API_URL + "client",
                    method : "GET",
                    headers: {
                        token: 'sessionToken',
                        'x-api-key' : process.env.VUE_APP_API_KEY,
                    },
                }).then((response)=>{
                    cookies.get ('sessionToken', response.data.token)
                    console.log("success");
                }).catch((error)=>{
                    console.log(error.response.data);
                    console.log("error");
                })
            },
            menu(){
                axios.request({
                    url : process.env.VUE_APP_API_URL + "menu",
                    method : "GET",
                    headers : {
                        'x-api-key':process.env.VUE_APP_API_KEY,
                    },
                    //  params: {
                    //      restaurantId : 5,
                    //      menuId : 10
                    // },
                }).then((response)=>{
                    console.log(response);
                    console.log("success");
                }).catch((error)=>{
                    console.log(error);
                })

            }
        }
       
        
    }
</script>

<style lang="scss" scoped>

nav{
    display: grid;
    grid-template-columns: 5fr 1fr;
}
h1{
    text-align: center;
    font-size: 3em;
}
</style>