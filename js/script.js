console.log('vue ok', Vue);

const app = Vue.createApp({
    data(){
        return{
            firstName: 'Giacomo',
            secondName: 'Severi',
            sources: 'https://i.pinimg.com/originals/99/44/22/99442267a5033f945510a6b81a92d38d.jpg'
        }
    }
});

app.mount('#root');