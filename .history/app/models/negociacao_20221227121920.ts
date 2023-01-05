export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  public get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public criaDe(data: string, quantidade: string, valor: string): Negociacao {
    const exp = /-/g;
    const date = new Date(data.replace(exp, ","));
    const quantidadeNumber = parseInt(quantidade);
    const valorNumber = parseFloat(valor);

    return new Negociacao(date, quantidadeNumber, valorNumber);
  }
}
