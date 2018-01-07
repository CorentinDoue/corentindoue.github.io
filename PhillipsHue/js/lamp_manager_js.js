var app = new Vue({
  el: '#app',
  data: {
    light: {
        on: true,
        sat: 0,
        bri: 0,
        hue: 0
    }
  },
  methods: {
    getlight: function () {
      axios.get('https://phillipshue.herokuapp.com/api/lights/10')
      //axios.get('http://localhost:8080/api/buildings')
      .then(function (response) {
        app.light=response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted: function (){
    this.getlight();
  }
})
