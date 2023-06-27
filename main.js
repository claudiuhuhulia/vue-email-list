const app = Vue.createApp({
   data(){
    return{
        emails:[]
    }
   },

   created(){

    for(i = 0; i < 10 ; i++)
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(res => {
        const email = res.data.response;
        this.emails.push(email)
        
        
        console.log(res.data.response)
    })
   }
})
app.mount('#root')