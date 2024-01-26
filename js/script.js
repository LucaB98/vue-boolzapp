
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
            newMessageText: '',
            searchText: '',
        }
    },
    computed:{
        currentContact(){
            return this.contacts.find(contact => contact.id === this.currentId)
           },
        currentChat(){
            return this.currentContact.messages
        },
        filteredContacts(){
            const searchTerm = this.searchText.toLowerCase();

            return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm));
            },
           

    },
    methods:{
     sendMessage(){
        if(!this.newMessageText)return;
        const newMessage ={
            id: new Date().getTime(),
            date: new Date().toLocaleDateString(),
            status: 'sent',
            text: this.newMessageText
        }

        this.currentChat.push(newMessage);
        this.newMessageText = '';

        setTimeout(() => {
            const newMessage ={
                id: new Date().getTime(),
                date: new Date().toLocaleDateString(),
                status: 'received',
                text: 'ok'
            }
            this.currentChat.push(newMessage);
        },1000)
     }
        
    }


    
})

app.mount('#root')