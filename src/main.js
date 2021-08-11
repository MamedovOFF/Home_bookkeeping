import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import dateFilter from '@/Filters/date.filter'
import currencyFilter from '@/Filters/currency.filter'
import localizeFilter from '@/Filters/localize.filter'
import store from './store'
import messagePlagin from '@/utils/message.plagin'
import titlePlagin from '@/utils/title.plagin'
import tooltipDirective from '@/directives/tooltip.directive'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'



import firebase from 'firebase/app'
import 'firebase/auth'
import'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.use(titlePlagin)
Vue.use(messagePlagin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.component('Paginate', Paginate)
Vue.component('Loader', Loader)
Vue.directive('tooltip', tooltipDirective)



firebase.initializeApp({
  apiKey: "AIzaSyCMr2y-Zm3r7MdNjiIJFPh7lLWlxuX-18M",
  authDomain: "vue-myfirst-project.firebaseapp.com",
  projectId: "vue-myfirst-project",
  storageBucket: "vue-myfirst-project.appspot.com",
  messagingSenderId: "429522368731",
  appId: "1:429522368731:web:fd7ed9c6174b371d3134fe",
  measurementId: "G-MWHZ2HNJ5Q"
})

let app 

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


