export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar: boolean) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }
}
