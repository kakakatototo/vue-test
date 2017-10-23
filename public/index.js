/// <reference path="./vue.js" />

Vue.component('app3', {
    template: '<span v-if="seen">Now you see me</span>',
    data: function() {
        return {
            seen: true
        };
    }
})
Vue.component('todo-component', {
    template: '<ol><li v-for="todo in todos">{{ todo.text }}</li></ol>',
    data: function() {
        return {
            todos: [{
                    text: 'Learn JavaScript'
                },
                {
                    text: 'Learn Vue'
                },
                {
                    text: 'Build something awesome'
                }
            ]
        };
    }
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});
Vue.component('my-component2', {
    template: '<div>A custom component!</div>'
});
// root インスタンスを作成する
new Vue({
    el: '#example'
});
