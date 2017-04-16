import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';

import './styles/index.css';


Vue.use(Element)
new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
});