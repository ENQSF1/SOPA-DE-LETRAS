var palabra="";
/*creacion de letras aleatorias para llenar la sopa de letras*/
function asignacionDeLetra(){

  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
  return alfabeto.charAt(indiceAleatorio);

}

/*creando el numero de casillas con su respectivo numero de id y la misma clase*/ 
function creacionDeCasillas(x){

  var lista= document.getElementById("grid");
  var nuevoElemento=document.createElement("div");
  nuevoElemento.textContent=asignacionDeLetra();
  lista.appendChild(nuevoElemento);
  nuevoElemento.className="boton";
  nuevoElemento.id=`${"b"+(x)}`;

}

/*creando la funcion que introducira los datos a las sopas de letras*/
function introducir(x,y,z,a){
var i=0;
while(i<1){
  
palabra= prompt(`Ingrese una palabra de 5 letras`)
palabras=palabra.toLowerCase();

if(palabra.length==5){
     i++
 }else{ alert("no tiene la longitud correcta,ingrese la palabra de nuevo")}
} 
    
    var b1 = document.querySelector(`#${"b"+(x)}`);
    b1.innerText =palabras[y] ;

    var b2 = document.querySelector(`#${"b"+(x+(a))}`);
    b2.innerText =palabras[y+z] ;

    var b3 = document.querySelector(`#${"b"+(x+(2*a))}`);
    b3.innerText = palabras[y+(2*z)] ;

    var b4 = document.querySelector(`#${"b"+(x+(3*a))}`);
    b4.innerText =palabras[y+(3*z)] ;

    var b5 = document.querySelector(`#${"b"+(x+(4*a))}`);
    b5.innerText = palabras[y+(4*z)] ;}

    /*dandole la propiedad de seleccionar casillas */
  
  function cambioDeColor(){
  const elementos = document.querySelectorAll(".boton");
  elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => {
  elemento.classList.toggle("azul");
      });
    });}

/*creando funcion para definir el # de columnas y filas de grid */

function nM(x){
  var nuevaMatriz=document.querySelector("#grid");
  nuevaMatriz.style.gridTemplateColumns =`repeat(${x} , 1fr)`;
  nuevaMatriz.style.gridTemplateRows = `repeat(${x} , 1fr)`;
}

var facil = document.querySelector("#A");
facil.addEventListener("click", () => {
    for(var i=0;i<100;i++){
      creacionDeCasillas(i);}
    cambioDeColor();
    introducir(10,0,1,1);
    introducir(20,4,-1,1);
    introducir(9,0,1,10);
    introducir(8,4,-1,10);
    introducir(41,0,1,11);
    introducir(42,4,-1,11);
    
    
  });

var medio = document.querySelector("#B");
  medio.addEventListener("click", () => {
    nM(15);/*preguntar  porque aca si agarra */
    for(var i=0;i<225;i++){
    creacionDeCasillas(i);}
    cambioDeColor();
    introducir(10,0,1,1);
    introducir(20,4,-1,1);
    introducir(9,0,1,10);
    introducir(8,4,-1,10);
    introducir(41,0,1,11);
    introducir(42,4,-1,11);
   
    /*aca no agarro */
  });

  var dificil = document.querySelector("#C");
  dificil.addEventListener("click", () => {
    nM(20);
    for(var i=0;i<400;i++){
    cambioDeColor();
    creacionDeCasillas(i);}
    introducir(10,0,1,1);
    introducir(20,4,-1,1);
    introducir(9,0,1,10);
    introducir(8,4,-1,10);
    introducir(41,0,1,11);
    introducir(42,4,-1,11);
   
    
  });
  
    /*horizontal(20,4,-1);
    vertical(9,0,1);
    vertical(8,4,-1);
    diagonal(41,0,1);
    diagonal(42,4,-1)*/
    
  
    


