// Semanário – configuração da sincronização
// 1) No console do Firebase, copie o objeto "firebaseConfig" do seu app web.
// 2) Cole os valores abaixo, no lugar de null.
// Estes dados não são senha: a proteção vem das regras do Firestore (arquivo firestore.rules).

window.SEMANARIO_FIREBASE = // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRIWFBORzgxBFL0Tkma51lNLQeK3O7EmY",
  authDomain: "semanario-fa272.firebaseapp.com",
  projectId: "semanario-fa272",
  storageBucket: "semanario-fa272.firebasestorage.app",
  messagingSenderId: "799541347430",
  appId: "1:799541347430:web:19617e63df1d9d479e99a7",
  measurementId: "G-SNQ2JYZ1FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);;

/* Exemplo de como deve ficar:
window.SEMANARIO_FIREBASE = {
  apiKey: "AIza...",
  authDomain: "semanario-joao.firebaseapp.com",
  projectId: "semanario-joao",
  storageBucket: "semanario-joao.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
*/
