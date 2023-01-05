export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string, escapar: boolean = false) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);

    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }

    this.elemento.innerHTML = template;
  }
}
