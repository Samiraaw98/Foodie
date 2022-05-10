<template>
    <div>
      <nav id="navigation">
         <router-link to="/rlogin" >Home</router-link> |
          <router-link to="/rprofile">Profile</router-link> 
             <v-btn id="logout"
      elevation="2"
      color="yellow"
      @click="restLogout"
       > 
      Log out 
      </v-btn>
      </nav>
        <nav id="bar">
        <h1> Create your menu</h1>
        <p>Get started below</p>
        </nav>
      
        <v-form>
           <h3>Food Menu</h3>
            <v-container>
                <div  class="box">
               <v-col 
               
          cols="8"
          md="8"
        >
          <v-text-field  
          
            v-model="name"
            label="Name"
            required
          ></v-text-field>
          
        </v-col>  
         <v-col  
          cols="8"
          md="8"
        >
          <v-text-field  
            v-model="description"
            label="description"
            required
          ></v-text-field>
        </v-col>
         <v-col
          cols="8"
          md="8"
        >
          <v-text-field  
            v-model="price"
            label="price"
            required
          ></v-text-field>
        </v-col>
        </div>
        <div class="box">
            </div>
            </v-container>
        </v-form>
        <v-btn
        elevation="2"
        color="yellow"
         @click ="restProfile">Submit</v-btn> 
   
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
import router from '@/router'

    export default {
        name : "RestProfile",
        data:() =>({
            name : "",
            description : "",
            price : "" ,
        }),
      
        methods : {
            restProfile(){
                axios.request({
                    url : process.env.VUE_APP_API_URL + "menu",
                    methods : "POST",
                    headers : {
                        token : "sessionToken",
                        'x-api-key' : process.env.VUE_APP_API_KEY,
                    },
                    data : {
                        name : this.name,
                        description : this.description,
                        price : this.price,
                    },
                }).then ((response)=>{
                    cookies.set('sessionToken',response.data.token)
                    console.log(response);
                    this.$root.$emit("content" , response.data)
                }).catch((error)=>{
                    console.log(error.response.status);
                })

                
            },
            restLogout(){
              axios.request({
                method : "DELETE",
                url : process.env.VUE_APP_API_URL  + "restaurant-login",
                headers: {
                  'x-api-key' : process.env.VUE_APP_API_KEY,
                  'sessionToken': cookies.get('token')
                }
              }).then((response)=>{
                cookies.remove('sessionToken'),
                console.log("logged out");
                console.log(response);
                router.push('/rlogin')
              }).catch((error)=>{
                console.log(error.response.status.data);
                console.log("failed");
              })

            },
            addMenu(menu){
              this.menu.unshift(menu);

            }
        },
        async mounted (){
          this.$root.$on("content" , this.addMenu)

        }
    }
</script>

<style lang="scss" scoped>

*{
  background-color: rgba(156, 152, 152, 0.995);
}
#bar{
    padding-bottom: 50px;
   
}
.box{
    border: 1px solid black;
}
#logout{
  margin-left: 600px;
  
}



</style>