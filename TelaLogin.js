// dados do fire
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvQNT-V87FJ2xb3gdnq6taD4RsvAhjmm8",
  authDomain: "regenera-9b38e.firebaseapp.com",
  projectId: "regenera-9b38e",
  storageBucket: "regenera-9b38e.appspot.com", // Corrigido
  messagingSenderId: "32007036125",
  appId: "1:32007036125:web:1a5a313eabb271f1a00f34",
  measurementId: "G-D3VJGTFSM5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//dados JS
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("Email").value;
    const senha = document.getElementById("Senha").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      console.log("Usuário logado:", userCredential.user);
      window.location.href = 'dados.html';
    } catch (error) {
      alert("Erro no login: " + error.message);
      console.error("Erro:", error.code, error.message);
    }
  });
});