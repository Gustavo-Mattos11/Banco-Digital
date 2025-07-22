export function formatarSaldo(saldo: number){
    return saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}) || 0
}