
const { user, contacts} = data;

console.log('vue ok', Vue)

const {createApp} = Vue;
const app = createApp({
    name:'Boolzapp',
    data(){
        return{
            user,
            contacts,
            currentId: 1,
        }
    }
})

app.mount('#root')