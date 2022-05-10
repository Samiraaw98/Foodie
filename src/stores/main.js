import axios from "axios";
import {defineStore} from 'pinia';
import cookies from 'vue-cookies';
import router from '@/router'

export const useMainStore = defineStore ('main',{
    state : () => {
        return{
            firstName : '',
            lastName : '',
            username:'',
            email: '',
        }
    },
    actions:{
        clientRegister(username, firstName,lastName,email,password){
            axios.request({
                headers:{
                    'x-api-key':process.env.VUE_APP_API_KEY,
                },
                url : process.env.VUE_APP_API_URL + "client" ,
                method: "POST",
                data : {
                    username,
                    firstName,
                    lastName,
                    email,
                    password,
                }

            }).then((response)=>{
                cookies.set('sessionToken',response.data)
                console.log("success");
                router.push('/')
            }).catch((error)=>{
                console.log(error.response.status);
                this.clientRegisterAlert(error.response)
                
            })

        },
        clientRegisterAlert(error){
            return (error)
        },

        // restRegister(name, address, bio,city,password,phoneNum){
        //     console.log("hello");
        //     axios.request({
        //         headers:{
        //             'x-api-key':process.env.VUE_APP_API_KEY,
        //         },
        //         url : process.env.VUE_APP_API_URL + "restaurant" ,
        //         method : 'POST',
        //         data: {
        //         name ,
        //         address,
        //         bio,
        //         city,
        //         password,
        //         phoneNum,
        //         }
        //     }).then((response)=>{
        //         cookies.set('sessionToken',response.data)
        //         console.log("hi");
        //         router.push('/rlogin')
        //     }).catch((error)=>{
        //         console.log(error.response.data);
        //         console.log("error");
        //         this.restRegisterAlert(error.response)
        //     })
        //  },
        // restRegisterAlert(error){
        //      return(error)
        //  },
    
    },
    getters: {
        initial : state =>{
            return state.username;
        }
    },
})
    