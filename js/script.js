console.log('vue ok', Vue)

const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            user,
            contacts,
        }
    }
})

app.mount('#root')