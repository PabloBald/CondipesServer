///MULTIPLICADORES

   //Positivos
   doce = 1.12;
   nueve = 1.09;
   seis = 1.06;
   cuatro = 1.048;
   seis4= 1.064;
   tres = 1.03;

//Negativos
   ochon = 0.92;
   docen = 0.88;
   seisn = 0.94;
   nueven= 0.91;
   cuatron= 0.952;
   tresn = 0.97;
   dochon = 0.82;
   dseisn = 0.84;
//ROJOS
var rojos = [
  doce,
  doce,
  doce,
  doce,
  nueve,
  doce,
  doce,
  doce,
  nueve,
  nueve,
  nueve,
  seis,
  nueve,
  seis,
  nueve,
  doce,
  nueve,
  nueve,
  nueve,
  nueve,
  doce,
  nueve,
  nueve,
  doce,

]
var amarillos = [
  seis4,
  seis4,
  seis,
  seis,
  cuatro,
  seis,
  seis,
  seis,
  cuatro,
  seis,
  cuatro,
  tres,
  cuatro,
  tres,
  cuatro,
  seis,
  cuatro,
  cuatro,
  cuatro,
  cuatro,
  seis,
  cuatro,
  cuatro,
  seis
]
var azul = [
  ochon,
  ochon,
  docen,
  seisn,
  seisn,
  nueven,
  nueven,
  nueven,
  cuatron,
  seisn,
  cuatron,
  seisn,
  cuatron,
  tresn,
  cuatron,
  tresn,
  cuatron,
  seisn,
  seisn,
  cuatron,
  seisn,
  seisn,
  seisn,
  nueven
]
var violeta = [
  dseisn,
  dseisn,
  dochon,
  docen,
  docen,
  dochon,
  dochon,
  dochon,
  nueven,
  docen,
  nueven,
  seisn,
  nueven,
  seisn,
  nueven,
  docen,
  nueven,
  docen,
  docen,
  nueven,
  docen,
  docen,
  docen,
  dochon
]

 //ARRAY DE NOMBRES DE ATRIBUTOS
var Atributos = [
  "Atributos",
  "Ataque",
  "Defensa",
  "Estabilidad",
  "Resistencia",
  "Vel. máxima",
  "Aceleración",
  "Respuesta",
  "Agilidad",
  "Prec. c",
  "Vel. c",
  "Prec. p. c.",
  "Vel. p. c.",
  "Prec. p. l.",
  "Vel. p. l.",
  "Precisión en el tiro",
  "Potencia en el tiro",
  "Tec. disp.",
  "Prec. saq. falta",
  "Efecto",
  "Cabezazo",
  "Salto",
  "Técnica",
  "Agresividad",
  "Mentalidad"
]
//REFERENCIA AL BODY
var body = document.getElementsByTagName("body")[0];

function estilarBody(){
//ponemos la fuente de la pagina
body.style.fontFamily = "Arial, Helvetica, sans-serif";
body.style.backgroundImage = "url('img/fondo.png')";
body.style.backgroundAttachment = "fixed";
body.style.height = "100%";
body.style.width = "100%";
body.style.margin = "0";
console.log("Estilo aplicado");
}
//ARRAY PARA IDS
var ids = [
 "ataque",
 "defensa",
 "estabilidad",
 "resistencia",
 "velmax",
 "acel",
 "respuesta",
 "agilidad",
 "precc",
 "velc",
 "prepc",
 "velpc",
 "prepl",
 "velpl",
 "prectir",
 "pottir",
 "tectir",
 "precsaqfal",
 "efecto",
 "cabezazo",
 "salto",
 "tec",
 "agresividad",
 "mentalidad"
]

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

    
    //Referencia al div de la tabla
    var tbldiv = document.getElementById("tbl");
    //Creacion de la tabla
    var table = document.createElement("table");
    table.id = "tablita";
    
    //Crear el cuerpo de la tabla
    var tableBody = document.createElement("tbody");
    //Agregar el cuerpo de la tabla a la tabla
    table.appendChild(tableBody);
    
   
   function agregarTabla(filas,columnas){
    for (var i = 0; i < filas; i++) {
        //Crear fila
      var fila = document.createElement("tr");
      //Agregar fila al cuerpo de la tabla
      tableBody.appendChild(fila);
  
      for (var j = 0; j < columnas; j++) {
        //Crear celdas
        var celda = document.createElement("td");
        
        
        //ESTILO FILAS
        fila.style.border = "2px solid rgb(124, 123, 123)";
        fila.style.borderBottom = "0px";
        fila.style.borderRight ="0px";
        fila.style.borderLeft ="0px"; 
        
            

        //ESTILO CELDAS
        celda.style.fontWeight = "bolder";
        celda.style.webkitTextStroke = "0.9px black";
        celda.style.width = "4vw";
        celda.style.textAlign = "center";
        celda.style.borderSpacing = "2px";
 

       
      //Damos colores segun la columna
       if(i > 0){
          
          switch(j){
            case 1:
              celda.style.backgroundColor = "rgb(13, 87, 41)";
              
              break;
            case 2:
            celda.style.backgroundColor = "rgba(224, 59, 59, 0.589)";
            
            break;
            case 3:
              celda.style.backgroundColor = "rgba(170, 170, 12, 0.781)";
              break;
            case 4:
              celda.style.backgroundColor = "rgb(7, 99, 136)";
              break;
            case 5:
              celda.style.backgroundColor = "rgb(109, 82, 145, 0.671)";
              
              
              default:
                
              }
      }else if (i == 0) {
      fila.style.borderTop = "0px";
      fila.style.borderLeft = "0px";
      fila.style.borderRight = "0px";
      }
      ///Ponemos las imagenes
      //VERDE
      if (i == 0 && j ==1){
        var img = document.createElement("img");
        img.src = "img/condicionVerde.png";
        celda.appendChild(img);
} 
      //ROJO
      if (i == 0 && j ==2){
        var img = document.createElement("img");
        img.src = "img/condicionRojo.png";
        celda.appendChild(img);
}     //AMARILLO
      if (i == 0 && j ==3){
        var img = document.createElement("img");
        img.src = "img/condicionAmarillo.png";
        celda.appendChild(img);
}     //AZUL
      if (i == 0 && j ==4){
        var img = document.createElement("img");
        img.src = "img/condicionAzul.png";
        celda.appendChild(img);
}     //VIOLETA
      if (i == 0 && j ==5){
        var img = document.createElement("img");
        img.src = "img/condicionVioleta.png";
        celda.appendChild(img);
} 


        //COLUMNA ATRIBUTOS///////////////////////////////
        //SOLO EN LA PRIMERA COLUMNA
        if(j==0){
        //Creo el texto del interior de la primer columna con el array "Atributos"
        var interiorAtr = document.createTextNode(Atributos[i]);

        //Agregar el texto al interior de la tabla que indica la coordenada de la celda
        celda.appendChild(interiorAtr);

        }
        

        //////////COLUMNA INPUTS//////////////////////////
        if(i > 0 && j == 1){
          // Creamos los inputs
          var inputs = document.createElement("input");
          inputs.type = "tel";
          inputs.maxLength= "2";
          inputs.max= "99";
          inputs.style.width= "29pt";
          inputs.style.textAlign = "center";
          inputs.id = eval('"'+ids[i-1]+'in"');
          inputs.value = 0;
          
        //Agregamos el input a las celdas
          celda.appendChild(inputs);
        }
        
        //COLUMNA ROJO///////////////////////////////////
        if(i > 0 && j==2){
          celda.id = eval('"'+(ids[i-1])+'R";');
          
        }

        //COLUMNA AMARILLO///////////////////////////////////
        if(i > 0 && j==3){
          celda.id = eval('"'+(ids[i-1])+'Am";');
        }

        //COLUMNA AZUL///////////////////////////////////
        if(i > 0 && j==4){
          celda.id = eval('"'+(ids[i-1])+'Az";');
        }

        //COLUMNA VIOLETA///////////////////////////////////
        if(i > 0 && j==5){
          celda.id = eval('"'+(ids[i-1])+'V";');
        }
        
       //Agregar las celdas a las filas
        fila.appendChild(celda);
        if(i==24 && j==5){
          celda.style.borderBottomRightRadius = "48%";
        }
      }
    }
    //Agregar la tabla al div
    tbldiv.appendChild(table);
    
    //ESTILO TABLA
    table.style.boxShadow = "1px 1px 5px 5px black";
    table.style.borderRadius = "5%";
    table.style.marginLeft = "9vw";
    table.style.marginTop ="4vw";
    table.style.width = "50%";
    table.style.borderCollapse = "collapse";
    table.style.backgroundColor = "black";
    table.style.color = "white";

  } 
agregarTabla(25,6);
  



 function crearBoton(){
  //creamos el boton
  var boton = document.createElement("button");
  boton.innerHTML = "Calcular";
  boton.id = "botoncinho";
  
  boton.addEventListener("mousedown", function(){
    
    for (var i = 0; i < ids.length; i++) {
      
      //TOMA EL VALOR DE LOS INPUTS
      eval("var valoresIn =document.getElementById('"+ids[i]+"in').value;");
      //REFERENCIA A LA COLUMNA ROJA
      eval("var colR = document.getElementById('"+ids[i]+"R');");
      //REFERENCIA A LA COLUMNA AMARILLA
      eval("var colAm = document.getElementById('"+ids[i]+"Am');");
      //REFERENCIA A LA COLUMNA AZUL
      eval("var colAz = document.getElementById('"+ids[i]+"Az');");
      //REFERENCIA A LA COLUMNA VIOLETA
      eval("var colV= document.getElementById('"+ids[i]+"V');");
      //REFERENCIA A LOS MULTIPLICADORES
      var mrojos = rojos[i];
      var mamarillos = amarillos[i];
      var mazul =azul[i];
      var mvioleta =violeta[i];
      
function operacion(multi,colorColumna){
        
        colorColumna.innerHTML = Math.round(valoresIn*multi);

        var valor = colorColumna.innerHTML;
        if(isNaN(valor)==true){
          colorColumna.innerHTML = "";
        }
          
        if(valor>99){
          colorColumna.innerHTML = 99;}
          if(valor >= 75){
          colorColumna.style.color = "green";
          if(valor>= 80){
            colorColumna.style.color = "yellow";
            if(valor>= 90){
              colorColumna.style.color = "orange";
              if(valor>=95){
                colorColumna.style.color = "red";
              }
          }
        }
      }   
}

    operacion(mrojos,colR);
    operacion(mamarillos,colAm);
    operacion(mazul,colAz);
    operacion(mvioleta,colV);  
      
    }    
})
    
  //Referencia al div del boton
  var divBtn = document.getElementById("btn");
  divBtn.appendChild(boton);
  
}

const selectEquipo = document.getElementById('equipos')

let traerEquipos = async()=>{
  await fetch('http://localhost:9000/equipos')
  .then (res => res.json())
  .then(data => {
    
    data.forEach(element => {
      selectEquipo.innerHTML += `<option>${element["CLUB TEAM"]}</option>`
    });
  }
)
}
traerEquipos();


const selectJugadores = document.getElementById('jugadores')
selectEquipo.addEventListener('input',()=>{
let equipo = selectEquipo.value;
var data = {equipo}

fetch('http://localhost:9000/equipos/jugadores',{
  method:'POST',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(res=>res.json())
  .then(data => {
  selectJugadores.innerHTML = "<option disabled selected>Seleccione un jugador</option>"
  data.forEach(element => {

    selectJugadores.innerHTML += `<option>${element["NAME"]}</option>`
  })
  })
})

selectJugadores.addEventListener('input',()=>{
  let jugador = selectJugadores.value;
  let equipo = selectEquipo.value;
  var data = {equipo,jugador}
  fetch('http://localhost:9000/equipos/jugadores/atributos',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(data=>{
    for (let index = 0; index < ids.length; index++) {
      let inputs = document.getElementById(`${ids[index]}in`)
      inputs.value = Object.values(data)[index]
    } 
    }
)
})

crearBoton();
estilarBody();
