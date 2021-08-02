class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Carranza Landa Edwin Ratziel.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
