import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBE22x4kwiwsEB8kyr-GxpgKgxBmVphMVg",
    authDomain: "breakingbad-fae44.firebaseapp.com",
    databaseURL: "https://breakingbad-fae44.firebaseio.com",
    projectId: "breakingbad-fae44",
    storageBucket: "breakingbad-fae44.appspot.com",
    messagingSenderId: "945425074738",
    appId: "1:945425074738:web:424661b8f2dfc8109a4a2b"
  };

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
