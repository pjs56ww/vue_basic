// entry point
import Vue from 'vue'  //export default 아 한 세트
import App from './App.vue'

// 기본 setting
new Vue({
    render: h => h(App)  // App 은 최상위 component 이다.
}).$mount('#app')  // .$mount 는 html에서 app 이라는 id 를 갖는 부분에 component를 그리겠다.