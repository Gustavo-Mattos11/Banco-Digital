import { Saldo } from "./Saldo.js";
const sacar = document.getElementById('btn-sacar');
const depositar = document.getElementById('btn-depositar');
Saldo.atualizarInformacoes();
depositar.addEventListener('click', (ev) => {
    Saldo.depositarSaldo();
});
sacar.addEventListener('click', (ev) => {
    Saldo.sacarSaldo();
});
