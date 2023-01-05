export class MensagemView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(): string {
    return `<p class="alert alert-info">Negociação adicionada com sucesso!</p>`;
  }

  update(): void {
    this.elemento.innerHTML = this.template();
  }
}
