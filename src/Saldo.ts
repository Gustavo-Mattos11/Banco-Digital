const valorSaldo = document.getElementById('valor-saldo') as HTMLInputElement;
const valor = document.getElementById('valor') as HTMLInputElement;
import { formatarSaldo } from "./formatarSaldo";
import { Extrato, tipoTransacao } from "./Extrato";

export class Saldo{

    private static saldo: number = Number(localStorage.getItem('saldo')) || 0;

    constructor(){}

    static depositarSaldo(){
        if(Number(valor.value) <= 0){
           return window.alert('Você deve depositar um valor maior que 0');
           
        }
        this.saldo += parseFloat(valor.value);
        valorSaldo.innerHTML = `${formatarSaldo(this.saldo)}`
        Extrato.atualizarExtrato(tipoTransacao.deposito)
        localStorage.setItem('saldo', this.saldo.toString())
    }
    static sacarSaldo(){
        if(Number(valor.value) <= 0){
            return window.alert('Você deve sacar um valor maior que 0')
        }
        if(Number(valor.value) > this.saldo){ 
           return window.alert('Você não tem saldo suficiente.')
        } else {
           this.saldo -= Number(valor.value)
           valorSaldo.innerHTML = `${formatarSaldo(this.saldo)}`,
           Extrato.atualizarExtrato(tipoTransacao.retirada)
           localStorage.setItem('saldo', this.saldo.toString());
        }
    }
    static atualizarInformacoes(){
            valorSaldo.innerHTML = `${formatarSaldo(this.saldo)}` 
            Extrato.carregarExtratoSalvo()
        }
}