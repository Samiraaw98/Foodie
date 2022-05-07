<template>
    <div>
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
    </div>
    <RestProfile/>
    </div>
    
</template>

<script>
import RestProfile from '@/views/RestProfile.vue'
    export default {
        name : "RProfileComp",
        components: {
            RestProfile,
        },
    }
</script>

<style lang="scss" scoped>

</style>