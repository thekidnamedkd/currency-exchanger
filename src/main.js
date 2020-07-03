import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeService } from './currency-exchanger-service';

$(document).ready(function () {
  $("form#exchange").submit(function(event) {
    event.preventDefault();
    let cashIn = $("#usdInput").val();
    let curSelect = $("#inputCur").val();
    
  
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchangeRates();
      getElements(response);
    })();
  
    function getElements(response) {
      console.log(cashIn)
      if (response) {
        $('#exchanged').append("in AED: " + (cashIn*response.conversion_rates.AED) + "<br>");
        $('#exchanged').append("in ARS: " + (cashIn*response.conversion_rates.ARS) + "<br>");
        $('#exchanged').append("in AUD: " + (cashIn*response.conversion_rates.AUD) + "<br>");
        $('#exchanged').append("in BGN: " + (cashIn*response.conversion_rates.BGN) + "<br>");
        $('#exchanged').append("in BRL: " + (cashIn*response.conversion_rates.BRL) + "<br>");
        $('#exchanged').append("in BSD: " + (cashIn*response.conversion_rates.BSD) + "<br>");
        $('#exchanged').append("in CAD: " + (cashIn*response.conversion_rates.CAD) + "<br>");
        $('#exchanged').append("in CHF: " + (cashIn*response.conversion_rates.CHF) + "<br>");
        $('#exchanged').append("in CLP: " + (cashIn*response.conversion_rates.CLP) + "<br>");
        $('#exchanged').append("in CNY: " + (cashIn*response.conversion_rates.CNY) + "<br>");
        $('#exchanged').append("in COP: " + (cashIn*response.conversion_rates.COP) + "<br>");
        $('#exchanged').append("in CZK: " + (cashIn*response.conversion_rates.CZK) + "<br>");
        $('#exchanged').append("in DKK: " + (cashIn*response.conversion_rates.DKK) + "<br>");
        $('#exchanged').append("in DOP: " + (cashIn*response.conversion_rates.DOP) + "<br>");
        $('#exchanged').append("in EGP: " + (cashIn*response.conversion_rates.EGP) + "<br>");
        $('#exchanged').append("in EUR: " + (cashIn*response.conversion_rates.EUR) + "<br>");
        $('#exchanged').append("in FJD: " + (cashIn*response.conversion_rates.FJD) + "<br>");
        $('#exchanged').append("in GBP: " + (cashIn*response.conversion_rates.GBP) + "<br>");
        $('#exchanged').append("in GTQ: " + (cashIn*response.conversion_rates.GTQ) + "<br>");
        $('#exchanged').append("in HKD: " + (cashIn*response.conversion_rates.HKD) + "<br>");
        $('#exchanged').append("in HRK: " + (cashIn*response.conversion_rates.HRK) + "<br>");
        $('#exchanged').append("in HUF: " + (cashIn*response.conversion_rates.HUF) + "<br>");
        $('#exchanged').append("in IDR: " + (cashIn*response.conversion_rates.IDR) + "<br>");
        $('#exchanged').append("in ILS: " + (cashIn*response.conversion_rates.ILS) + "<br>");
        $('#exchanged').append("in INR: " + (cashIn*response.conversion_rates.INR) + "<br>");
        $('#exchanged').append("in ISK: " + (cashIn*response.conversion_rates.ISK) + "<br>");
        $('#exchanged').append("in JPY: " + (cashIn*response.conversion_rates.JPY) + "<br>");
        $('#exchanged').append("in KRW: " + (cashIn*response.conversion_rates.KRW) + "<br>");
        $('#exchanged').append("in KZT: " + (cashIn*response.conversion_rates.KZT) + "<br>");
        $('#exchanged').append("in MXN: " + (cashIn*response.conversion_rates.MXN) + "<br>");
        $('#exchanged').append("in MYR: " + (cashIn*response.conversion_rates.MYR) + "<br>");
        $('#exchanged').append("in NOK: " + (cashIn*response.conversion_rates.NOK) + "<br>");
        $('#exchanged').append("in NZD: " + (cashIn*response.conversion_rates.NZD) + "<br>");
        $('#exchanged').append("in PAB: " + (cashIn*response.conversion_rates.PAB) + "<br>");
        $('#exchanged').append("in PEN: " + (cashIn*response.conversion_rates.PEN) + "<br>");
        $('#exchanged').append("in PHP: " + (cashIn*response.conversion_rates.PHP) + "<br>");
        $('#exchanged').append("in PKR: " + (cashIn*response.conversion_rates.PKR) + "<br>");
        $('#exchanged').append("in PLN: " + (cashIn*response.conversion_rates.PLN) + "<br>");
        $('#exchanged').append("in PYG: " + (cashIn*response.conversion_rates.PYG) + "<br>");
        $('#exchanged').append("in RON: " + (cashIn*response.conversion_rates.RON) + "<br>");
        $('#exchanged').append("in RUB: " + (cashIn*response.conversion_rates.RUB) + "<br>");
        $('#exchanged').append("in SAR: " + (cashIn*response.conversion_rates.SAR) + "<br>");
        $('#exchanged').append("in SEK: " + (cashIn*response.conversion_rates.SEK) + "<br>");
        $('#exchanged').append("in SGD: " + (cashIn*response.conversion_rates.SGD) + "<br>");
        $('#exchanged').append("in THB: " + (cashIn*response.conversion_rates.THB) + "<br>");
        $('#exchanged').append("in TRY: " + (cashIn*response.conversion_rates.TRY) + "<br>");
        $('#exchanged').append("in TWD: " + (cashIn*response.conversion_rates.TWD) + "<br>");
        $('#exchanged').append("in UAH: " + (cashIn*response.conversion_rates.UAH) + "<br>");
        $('#exchanged').append("in USD: " + (cashIn*response.conversion_rates.USD) + "<br>");
        $('#exchanged').append("in UYU: " + (cashIn*response.conversion_rates.UYU) + "<br>");
        $('#exchanged').append("in ZAR: " + (cashIn*response.conversion_rates.ZAR) + "<br>");
        console.log(response.conversion_rates);
      } else {
        $('#exchanged').text("Client Error - please check API key.");
      }
    }
  });
});