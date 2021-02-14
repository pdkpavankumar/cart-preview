import backUpJSON from "../json/cart.json";
import styles from "../scss/main.scss";
import utility from "../lib/utility";

class Products extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('cart-product');
    this.templateContent = template.content;
    this.attachShadow({
      mode: 'open'
    });
    fetch('https://api.jsonbin.io/b/5f6b6cd665b18913fc51f71f')
      .then((response) => response.json())
      .then((data) => {
        data = data.items ? data : backUpJSON;
        this.parseJSON(data);
      })
      .catch(() => {
        this.parseJSON(backUpJSON);
      });
  }
  parseJSON(data) {
    var element = document.createElement('div');
    element.className = 'products';
    data.items.forEach(item => {
      element.append(this.templateContent.cloneNode(true));
    });
    //this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(element.cloneNode(true));

    utility.attachStyle(this.shadowRoot, styles);
  }
}

customElements.define('cart-product', Products);