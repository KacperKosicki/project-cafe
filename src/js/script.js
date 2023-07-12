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
    const renderedHTML = compiledTemplate({ 
      products: [
        {
          image: '/images/coffee-1.png',
          title: '01. LA LAGARTIJA',
          description: 'Mysterious and treacherous... The best choice for the start of your journey, it will provide you a rich delicious flavor.',
          mostpopular: '/images/mostpopular.png',
          roasting: '5/10',
          intensity: '6/10',
          imagePositionLeft: false
        },
        {
          image: '/images/coffee-2.png',
          title: '02. EL TIGRE',
          description: 'Really dark coffee, only for the real gourmets. It has a bitter flavor of grapefruits and is mixed with a little bit of peanuts with caramel.',
          roasting: '8/10',
          intensity: '9/10',
          imagePositionLeft: true
        },
        {
          image: '/images/coffee-3.png',
          title: '03. LA CUARACHA',
          description: 'Sweet and intensive with a big amount of different flavors. Caramel, grapes, strawberry, you name it! It\'s a great choice for warm summer days.',
          roasting: '3/10',
          intensity: '7/10',
          imagePositionLeft: false
        }
      ]
    });
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = renderedHTML;
  },

  init: function () {
    this.initData();
    this.renderProducts();
  },
};

app.init();