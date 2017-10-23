/// <reference path="./vue.js" />

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
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
// root インスタンスを作成する
new Vue({
    el: '#example'
});
Vue.component('my-component', {
    template: '<div>A custom component!</div>'
});
// root インスタンスを作成する
new Vue({
    el: '#example2'
});
