export class store {
  constructor() {
    this.city;
    this.countrycode;
    this.defaultcity = "Medellin";
    this.defaultcountry = "CO";
  }
  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultcity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("countrycode") === null) {
      this.countrycode = this.defaultcity;
    } else {
      this.countrycode = localStorage.getItem("countrycode");
    }
    return {
      city: this.city,
      countrycode: this.countrycode,
    };
  }
  setLocationData(city,countrycode){
     localStorage.setItem('city', city);
     localStorage.setItem('countrycode', countrycode);
  }
}
