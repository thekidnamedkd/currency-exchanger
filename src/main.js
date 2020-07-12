import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeService } from './currency-exchanger-service';

$(document).ready(function () {
  $("#exchange ").submit(function(event) {
    event.preventDefault();
    let cashIn = $("#usdInput").val();
    let curSelect = $("#inputCur").val();
    
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchangeRates();
      getElements(response);
      errorCurrency(response);
    })();
  
    function getElements(response) {
      if (response) {
        let exchangeOut = (`Your USD amount in ${curSelect} is ${(cashIn * response.conversion_rates[curSelect]).toFixed(4)}<br>`);
        $('#exchanged').html(exchangeOut);
      } else {
        $('#exchanged').text("Client Error - please check API key.");
      }
    }
    function errorCurrency(response) {
      if (isNaN(response.conversion_rates[curSelect]) != false)
        $('#exchanged').text("We do not recognize or support that currency at this time. Please choose from the list.");
    }
  });
});