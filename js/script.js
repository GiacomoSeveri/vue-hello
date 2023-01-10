console.log('vue ok', Vue);

const app = Vue.createApp({
    data(){
        return{
            firstName: 'Giacomo',
            secondName: 'Severi',
            sources: 'img/35975.jpg'
        }
    }
});

app.mount('#root');