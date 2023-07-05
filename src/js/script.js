import { settings } from './settings.js';

const app = {
  initData: function () {
    const url = `${settings.apiUrl}/${settings.endpoints.products}`;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        this.renderProducts();
      });
  },

  renderProducts: function () {
    const productsTemplate = document.getElementById('product-template').innerHTML;
    const compiledTemplate = Handlebars.compile(productsTemplate);
    const renderedHTML = compiledTemplate(this.data.products);
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = renderedHTML;
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();