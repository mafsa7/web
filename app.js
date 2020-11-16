Vue.component('jumbo', {
    template: '<div class="jumbotron text-center"> <h1>My First Bootstrap Page</h1><p>Resize this responsive page to see the effect!</p></div>'
});

const app = new Vue({
    el: '#app',
    data: {
        version: 2.0
    }
});