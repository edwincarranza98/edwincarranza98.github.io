class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 
        Carranza Landa Edwin Ratziel.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
