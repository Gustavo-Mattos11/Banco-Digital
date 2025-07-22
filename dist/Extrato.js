import { formatarSaldo } from "./formatarSaldo.js";
const listaExtrato = document.getElementById('lista-extrato');
const valor = document.getElementById('valor');
function dataEHora() {
    const data = new Date().toLocaleDateString();
    const hora = new Date().toLocaleTimeString();
    return `${data} - ${hora} - `;
}
export var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao[tipoTransacao["deposito"] = 0] = "deposito";
    tipoTransacao[tipoTransacao["retirada"] = 1] = "retirada";
})(tipoTransacao || (tipoTransacao = {}));
export class Extrato {
    static numeroDeTransacoes = JSON.parse(localStorage.getItem('listIDs') || '[]');
    constructor() { }
    static transacaoIDs() {
        let i = 1;
        while (this.numeroDeTransacoes.includes(i)) {
            i++;
        }
        return i;
    }
    static atualizarExtrato(transacao) {
        const id = this.transacaoIDs();
        const valorNumerico = Number(valor.value);
        const texto = transacao === tipoTransacao.deposito
            ? `${dataEHora()}Você depositou ${formatarSaldo(valorNumerico)}`
            : `${dataEHora()}Você sacou ${formatarSaldo(valorNumerico)}`;
        const p = document.createElement('p');
        p.innerHTML = texto;
        listaExtrato.childElementCount > 0
            ? listaExtrato.insertBefore(p, listaExtrato.firstElementChild)
            : listaExtrato.appendChild(p);
        // Salvar no localStorage
        localStorage.setItem(`transacao-${id}`, texto);
        // Atualizar lista de IDs
        this.numeroDeTransacoes.unshift(id);
        localStorage.setItem('listIDs', JSON.stringify(this.numeroDeTransacoes));
    }
    static carregarExtratoSalvo() {
        this.numeroDeTransacoes.forEach((id) => {
            const texto = localStorage.getItem(`transacao-${id}`);
            texto ? listaExtrato.innerHTML += `<p>${texto}` : null;
        });
    }
}
