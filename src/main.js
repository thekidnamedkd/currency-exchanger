import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeService } from './currency-exchanger-service';

$(document).ready(function () {
  $("form#exchange").submit(function(event) {
    event.preventDefault();
    let cashIn = $("#usdInput").val();
  
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchangeRates();
      getElements(response);
    })();
  
    function getElements(response) {
      console.log(cashIn)
      if (response) {
        $('#exchanged').text("in USD: $" + (cashIn*response.conversion_rates.USD));
        console.log(response.conversion_rates);
      } else {
        $('#exchanged').text("Client Error - please check API key.");
      }
    }
  });
});