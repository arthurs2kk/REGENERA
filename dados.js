// Importando Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvQNT-V87FJ2xb3gdnq6taD4RsvAhjmm8",
    authDomain: "regenera-9b38e.firebaseapp.com",
    projectId: "regenera-9b38e",
    storageBucket: "regenera-9b38e.firebasestorage.app",
    messagingSenderId: "32007036125",
    appId: "1:32007036125:web:1a5a313eabb271f1a00f34",
    measurementId: "G-D3VJGTFSM5",
    databaseURL: "https://regenera-9b38e-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();


function salvarDados() {
    const user = auth.currentUser;
    if (!user) {
        alert("Você precisa estar logado!");
        return;
    }

    const uid = user.uid; // chave única do Firebase

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const tipoSangue = document.getElementById("tipoSangue").value;
    const alergias = document.getElementById("alergias").value;
    const doencas = document.getElementById("doencas").value;
    const medicamentos = document.getElementById("medicamentos").value;
    const orgaos = document.getElementById("orgaos").checked;
    const planoSaude = document.getElementById("planoSaude").value;
    const contatoEmergencia = document.getElementById("contatoEmergencia").value;

    set(ref(db, "usuarios/" + uid), {
        nome: nome,
        idade: idade,
        tipoSangue: tipoSangue,
        alergias: alergias,
        doencas: doencas,
        medicamentos: medicamentos,
        doadorOrgaos: orgaos,
        planoSaude: planoSaude,
        contatoEmergencia: contatoEmergencia

    })
        .then(() => {
            alert("Dados salvos com sucesso!");

            // Gera link único pro usuário
            const linkUnico = `https://arthurs2kk.github.io/usuario/?id=${uid}`;
            document.getElementById("meuLink").innerHTML = `
              📌 Seu link público: <a href="${linkUnico}" target="_blank">${linkUnico}</a>
            `;
        })
        .catch((error) => {
            alert("Erro ao salvar: " + error);
        });
}
//verifica se todos os campos estão preenchidos



document.getElementById("salvarBtn").addEventListener("click", salvarDados);
