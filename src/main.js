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
    })();
  
    function getElements(response) {
      if (response) {
        let exchangeOut = ("in " + curSelect + ": " + (cashIn*response.conversion_rates[curSelect]) + "<br>")
        $('#exchanged').html(exchangeOut);
      } else {
        $('#exchanged').text("Client Error - please check API key.");
      }
    }
  });
});