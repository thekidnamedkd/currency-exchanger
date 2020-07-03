import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeService } from './currency-exchanger-service';

$(document).ready(function () {
  $("form#exchange").submit(function(event) {
    event.preventDefault();

    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchangeRates();
      getElements(response);
    })();
  
    function getElements(response) {
      if (response) {
        $('#exchanged').text("in USD: $" + response.conversion_rates[0]);
      } else {
        $('#exchanged').text("Client Error - please check API key.");
      }
    }
  });
});