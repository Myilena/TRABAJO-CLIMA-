(() => {
  var t = {
      382: (t, e, o) => {
        "use strict";
        o.r(e), o.d(e, { UI: () => n });
        class n {
          constructor() {
            (this.location = document.getElementById("weather-location")),
              (this.desc = document.getElementById("weather-description")),
              (this.string = document.getElementById("weather-string")),
              (this.humidity = document.getElementById("weather-humidity")),
              (this.wind = document.getElementById("weather-wind"));
          }
          render(t) {
            (this.location.textContent = t.name + " / " + t.sys.country),
              (this.desc.textContent = t.weather[0].description),
              (this.string.textContent = t.main.temp + "°C"),
              (this.humidity.textContent = "humidity:" + t.main.humidity + "%"),
              (this.wind.textContent = "wind:" + t.wind.speed + "m/s");
          }
        }
      },
      732: (t, e, o) => {
        "use strict";
        o.r(e), o.d(e, { store: () => n });
        class n {
          constructor() {
            this.city,
              this.countrycode,
              (this.defaultcity = "Medellin"),
              (this.defaultcountry = "CO");
          }
          getLocationData() {
            return (
              null === localStorage.getItem("city")
                ? (this.city = this.defaultcity)
                : (this.city = localStorage.getItem("city")),
              null === localStorage.getItem("countrycode")
                ? (this.countrycode = this.defaultcity)
                : (this.countrycode = localStorage.getItem("countrycode")),
              { city: this.city, countrycode: this.countrycode }
            );
          }
          setLocationData(t, e) {
            localStorage.setItem("city", t),
              localStorage.setItem("countrycode", e);
          }
        }
      },
      101: (t, e, o) => {
        "use strict";
        o.r(e), o.d(e, { Weather: () => n });
        class n {
          constructor(t, e) {
            (this.apikey = "36d0a021c5ad17fca5f9754e4fa59d6f"),
              this.city.city,
              this.countrycode.countrycode;
          }
          async getweather() {
            const t = await fetch(
              "https://api.openweathermap.org/data/2.5/weather?q=${this.city},{this.countrycode}&appid={this.APIkey}"
            );
            return await t.json();
          }
          changeLocation(t, e) {
            (this.city = t), (this.countrycode = e);
          }
        }
      },
    },
    e = {};
  function o(n) {
    var c = e[n];
    if (void 0 !== c) return c.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, o), i.exports;
  }
  (o.d = (t, e) => {
    for (var n in e)
      o.o(e, n) &&
        !o.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
  }),
    (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (o.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      const { Weather: t } = o(101),
        { UI: e } = o(382),
        { Store: n } = o(732),
        c = new n (),
        { city: i, countryCode: r } = document.getLocationData(),
        a = new t(i, r),
        s = new e();
      async function d() {
        const t = await a.getWeather();
        console.log(t), s.render(t);
      }
      document.addEventListener("DOMContentLoaded", d),
        document
          .getElementById("w-change-btn")
          .addEventListener("click", (t) => {
            const e = document.getElementById("city").value,
              o = document.getElementById("country-code").value;
            a.changeLocation(e, o),
              c.setlocationData(e, o),
              d(),
              t.preventDefault();
          });
    })();
})();
