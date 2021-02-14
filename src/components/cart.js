import styles from "../scss/main.scss";
import utility from "../lib/utility";

class Cart extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('cart');
    const templateContent = template.content;
    this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

    utility.attachStyle(this.shadowRoot, styles);
  }
}

customElements.define('cart-cart', Cart);