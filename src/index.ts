import { Extrato } from "./Extrato";
import { Saldo } from "./Saldo";
const sacar = document.getElementById('btn-sacar') as HTMLButtonElement;
const depositar = document.getElementById('btn-depositar') as HTMLButtonElement;
Saldo.atualizarInformacoes()
depositar.addEventListener('click', (ev) => {
    Saldo.depositarSaldo();
})
sacar.addEventListener('click', (ev) => {
    Saldo.sacarSaldo();
})
