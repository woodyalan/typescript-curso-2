export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(data, quantidade, valor) {
        const exp = /-/g;
        const date = new Date(data.replace(exp, ","));
        const quantidadeNumber = parseInt(quantidade);
        const valorNumber = parseFloat(valor);
        return new Negociacao(date, quantidadeNumber, valorNumber);
    }
}
