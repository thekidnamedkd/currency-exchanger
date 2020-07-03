export class ExchangeService { 
  async getExchangeRates() {
    try {
      let response = await fetch (`https://v6.exchangerate-api.com/v6/${process.env}/latest/USD`);
      let jsonifiedResponse;
      if(response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.log(error);
      return false;
    }
  }
}