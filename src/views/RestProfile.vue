<template>
    <div>
         <router-link to="/rlogin" >Home</router-link> |
          <router-link to="/rprofile" >Profile</router-link> 
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
        <ul>
          <li v-for ="name in name" :key= "name">
            {{name}}
          </li>
          li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name : "RestProfile",
        data:() =>({
            name : "",
            description : "",
            price : "$"+"" ,
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
                        price : this.price
                    },
                }).then ((response)=>{
                  this.info = response.data(),
                    cookies.set('sessionToken',response.data.token)
                    console.log(response);
                }).catch((error)=>{
                    console.log(error.response.status);
                })

                
            }
        }
    }
</script>

<style lang="scss" scoped>
#bar{
    padding-bottom: 50px;
}
.box{
    border: 1px solid black;
}
</style>