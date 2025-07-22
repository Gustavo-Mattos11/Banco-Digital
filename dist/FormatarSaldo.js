export function formatarSaldo(saldo) {
    return saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 0;
}
