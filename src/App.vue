<template>
<div>
  <nav>
   <!-- <router-link to="/" >Log In</router-link> ||
     <router-link to="/signup" >Sign Up</router-link> -->

      <router-view/>

      </nav> 
</div>

</template>

<script>


export default {

  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" >
 
     html{
        background-color: bisque;
    }
   
</style>
