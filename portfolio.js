const vue = new Vue({
  el:'#app',
  data:{
   listaDatos : []
  },
  created(){
   this.getLista()
  },
  methods:{
   recargar(){
    console.log("recargando");
    this.getLista()
   },
 getLista(){
  // id de la hoja de calculo
  idSheets = '1FwSz7JbhctSpD8y_9kXiiLeLnEZJR8SwOllG3JpvgEA';
  //// nuestra      APIKey
  apiKey = 'AIzaSyD4TFfvj5gmSy1ndPFA9GxO8LOulEyk-ik'; 
  // rango de la hoja de calculo que queremos leer
  values = 'A2:F10000';
 // fetch es un método nativo para hacer peticiones http
 // en el navegador 
  fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" +   idSheets + "/values/"+values+"?access_token="+ apiKey +"&key="+  apiKey)
 .then((lista)=>{
   return lista.json()
 }).then((valores)=>{
   this.listaDatos = valores.values;
          })
          .catch(err=>{
            console.log(err);})
      }
    }
  })