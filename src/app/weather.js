export class Weather {
  constructor(city, countrycode) {
    this.apikey = "36d0a021c5ad17fca5f9754e4fa59d6f";
    this.city.city;
    this.countrycode.countrycode;
  }

  async getweather() {
    const URI =
      "https://api.openweathermap.org/data/2.5/weather?q=${this.city},{this.countrycode}&appid={this.APIkey}";

    const response = await fetch(URI);

    const data = await response.json();
    return data;
  }
  changeLocation(city, countrycode) {
    this.city = city;
    this.countrycode = countrycode;
  }
}
