class Header extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('cart-header');
    const templateContent = template.content;
    this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('cart-header', Header);