export class View {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(model: string): string {
    throw new Error("Você deve implementar o método template");
  }

  update(model: string): void {
    this.elemento.innerHTML = this.template(model);
  }
}
