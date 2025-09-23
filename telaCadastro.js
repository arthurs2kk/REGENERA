// cadastro.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDvQNT-V87FJ2xb3gdnq6taD4RsvAhjmm8",
    authDomain: "regenera-9b38e.firebaseapp.com",
    projectId: "regenera-9b38e",
    storageBucket: "regenera-9b38e.appspot.com", // corrigido
    messagingSenderId: "32007036125",
    appId: "1:32007036125:web:1a5a313eabb271f1a00f34",
    measurementId: "G-D3VJGTFSM5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    if (!form) {
        console.error("Formulário 'registerForm' não encontrado.");
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("Email2").value;
        const senha = document.getElementById("Senha2").value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            console.log("Usuário cadastrado:", userCredential.user);
            alert("Conta criada com sucesso!");
            window.location.href = 'TelaLogin.html';
        } catch (error) {
            alert("Erro no cadastro: sua senha contém menos de 6 digitos");
            console.error("Erro no cadastro:", error.code, error.message);
        }
    });
});