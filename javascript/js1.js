var nombre = "juan"; //vamos a usar principalmente esta forma
let apellido = "perez";          //let es una nueva palabra clave de ES6 asignara una variable muy similar a var , pero con un comportamientos un poco diferente. lo mas notable es que difiere al crear un nivel de scope. (hablaremos de esto mas adelante)
const comidafavorita = "pizza";

console.log();
 //este metodo es muy suimple nos permitira imprimir en la consola todo lo que pongamos entre parentetsis.

 //TIPOS DE DATOS.
 //en ciencias de la computacion , un tipo de dato informatico o simplemente tipo, es un atriibuto de los datos que indica la clase de datos que se va a manejar. esto incluye imponer restricciones en los datos , como que valores pueden tomar y que opereaciones se pueden realizar.

var nombreperro = "firulais";

// NUMBERS
//los numeros son solo eso, numeros. Los numeros NO se envuelven en comillas. pueden ser negativos tambien. Javascript tiene una limitacion en el tamaño de un numero (+/- 900719925470991), pero m¡uy raramente aprarecera esa limitcaion en nuestro uso diario.

var positivo = 27 ;
var negativo = -40;

//BOLEAN
//los boolean los booleanos provienen de la logica de boole. es un conceptio que alimenta el codigo binario uy el nucleo de las computadoras. es posible que haya visto codigo binario en el pasado (0001 011....), esto es logica booleana. Esencialmente significa que tiiene dos opciones, activar o desactivar, 0 o 1 , verdadero o falso. en javascript usamos booleanos para significar
 verdadero o falso . Esto puede parecer simple al principio pero puede ccomplicarse mas adelante.

var meEncantaJavascript = true; 

//los valores posibles de un dato booleando en js son : true o false.
//
console.log(nombre);
//OPERADORES 
// Vamos a poder realizar operaciones en JavaScript a traves de los operadores. basicamente son simbolos que ya conocemos (+,-,/,*) que indican al interprete de javascript las operaciones que debe realizar.
var a = 2+ 3; //5
var b = 3 / 3; //1

//de hecho , esa forma de escribir tiene un nombre particular , se llama notacion notacion infix o infija, en ell ase escribe el operador entre los operandos. pero tambien existen otros tipos de notacion como la opstfix o postfija y la prefix o prefija. En estas ultima el operador va a la derecha de los operandos o la izquierda respedtivamente.

// infix expression A+B A+B*C        Prefix Expression +AB +A*BC  postfix ExpressiON A B + ABC*+

//en fin , lo importante a tener en cuenta es que los opereadores son funciones. 
//Precedencia de operadores y asociatividad.
//esto parece aburrido pero nos va ayudar a saber comom ìensa el interprete y bajo que reglas actua.
//la precedencia de operadores es basicamente el orden en que se va a llamar las funciones de los operadores. estas funiciones son llamadas en orden de precedencia las que tienen mayor precedencia se ejecutan primero )
//o sea que si tenemos mas de un operador, el interprete va a llamar al operador de mayor precedencia primero y despues va a seguir con los demas.
//la asosietividad de operadores es el orden ene el que se ejecutan los operadores cuando tienen la misma precedencia , es decir, de izquierda a derecga o derecha a izquierda. 
//podemos ver la documentacion completa sobre precedencia y asociatividad de los operadores de javascript. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
//

var a = 1, b = 2, c = 3;
a = b = c ;
console.log(a, b, c);

//que veriamos en el console.log? para eso tenemos que revisar la tabla por la asociatiidad del operador de asignacion = . este tiene una precedencia de 
//3 y una asoociatividad de rigth-ti-left, es decir que las operaciones se realizan primero de derecha a izquierda . En este caso, 
//primero se realiza b= c y luego a = b (en realudad al resultado de b )= que retorna el valor que se esta signando). por lo tanto de todo, 
//todas las variables van a tener el valor 3. si la asociatividad hubiese al reves, todos las variables tendrian el valor 1.

//MATH
//los operadores matematicos trabajan en Javascript tal comom lo haria en su calculadora.

1 + 1 = 2
2 * 2 = 4 
2 - 2 = 0
2 / 2 = 1 

// % algo que quizas no haya visto antes es el modulo (%, este operador matematico dividira los dos numeros y devolvera el resto.))

21 % 5 =1;
21 % 6 = 3; 
21 % 7 = 0;

//objetos globales y metodos.
//javascript tiene una serie de objetos integrados para que los usemos . ya hemos vissto , y hemos estado  usando, el objeto de consola y su metodo log. otro 
//de estos objetos es Math. Este tiene varios mmetodos, al igual qye console tiene log. para agregar a esto , algunos de nuestros tipos de datos tambien tienen metodos incorporados.
//math.pow
//podemos usar el metodo pow en math para devolver un numero elevado a un exponente. tomara dos numeros.

math.pow(2,2) = 4;
math.pow(3,2) = 9;
math.pow(3,3) = 27;

//math.round, math.floor, math.ceil
//math tambien tiene metodos que redondearan los numeros para nosotros .round redondeara un numero al numero entero mas cercano .floor siemore redondeara un numero al numero entero mas cercano hacia abajo
//.ceil siempre se redondeara al numero entero mas cercano hacia arriba.
 math.round (6.5) = 7;
 mathmath.round(6.45) = 6;
 math.floor(6.999) = 6; 
 math.ceil (6.0001) = 7; 

//length 
//el tipo de datos "string" tiene un ketodo incorporado llamado  .length. cualquier cadena que llamemos a esto devolvera la cantidad de caracteres en esa cadena.
var nombreGato = "felix" ; 
console.log(nombreGatos.length); //5 

//veremos muchos otros metodos integrados en otros tipos de datos a lo largo de este curso.

//INTRODUCCION A LAS FUNCIONES
//las funciones som una parte muy importante de todo lenguaje de programacion y sobre todo en javascript son tipos particulares de objetos, llamados callable objects u objetos invocables, por lo que tienen las mismas propiedades que cualqueier objeto.
// tenemos conjunto de variables , necesitamos funciones para calcularlas, cambiarlas, hacer algo con ellas. hay tres formas en que podemos construir una funcion.
  
funtion mifuncion() {}
var otrafuncion = funtion () {}
var yotra = () => {};
usaremos la primera forma en esta leccion y hablaremos sobre las otras formas en proximas lecciones.

//ANATOMIA DE UNA FUNCION
funcion mifuncion () {}
//una funcion comenzara con la palabra clave funtion , esto le dice a lo que sea que este ejecutando tu programa
//ue lo que sigue es una funcion y que debe tratarse como tal . despues de eso viene el
//mbre de la funcion, nos gusta dar nombres de funciones que describan lo que hacen, 
//ego viene un parentesis abierto y uno cerrado. y finalmente , abra y cierre los corchetes. Entre estos corchetes es donde ira todo  nuestro codigo a ejecutar 
funtion logoHola() {
    console.log("hola!);                                                                                                            

}
logHola();
//En este ejemplo declaramos una funcion loghola y la configuracion en console.lo("hola"). Entonces podemos ver que para ejecutar esta funcion, necesitamos escribir el nombre yu los parentesis. Esta es la 
//estaes la sintaxis para ejecutar una funcion. una funcion siempre necesita parentesis para ejecutarse

//ARGUMENTOS
//ahora que podemos ejecutar una funcion basica, vamos a comenzar a pasarle argumentos.
funtion loghola(nombre) {
    console.log("hola," + nombre);

}
loghola("martin"); 
//si agregamos una variable a los parentesis cuadno declaramos la funcion , podemos usar esta variable dentro de nuestra funcion. iniciamos el valor de esta variable pasandola a la funcion cuando la llamamos. Entonces 
//esteso nombre = "martin" . tambien podemos pasar otras variables a esto;
funtion loghola(nombre) {
    console.log("hola,${nombre}");
}
var minombre = "antonio" ; 
loghola(minombre);

//podemos agregar multiples argumentos colocando una coma entre ellos ;
function sumarDosNumeros(a,b) {
    var suma = a + b; 
    return suma;
}
sumarDosNumeros(1,5): //6



//Declaracion "return y scope 
// En el ejemplo anterior presentamos la declaracion return. No vamos a usar console.log con todo lo que salga de una funcion. Lo mas probable es que queramos devolver algo. En este caso es la suma de los do snumeros .Piense en la declaracion
//de retorno , la funcion detiene inmediatamente lo que esta hcaiendo y " devuelve " lo especificado. 



function dividirDosNumeros (a,b) {
    var producto = a / b;
    return producto; 

}
dividirDosNumeros (6,3); //2
console.log (producto); // undefined

//si intentamos console.log algo que declaramos dentro de la funcion , devolvera undefined porque no tenemos acceso a el fuera de la funcion. Esto se llama scope ("alcance".)La unica forma de acceder a algo dentro de la funcin es devolverlo.//
//tambien podemos establecer variables para igualar lo que devuelve una funcion.
function restarDosNumeros(a,b) {
    var diferencia = a - b;
return diferencia ; 

}
var diferenciaDeResta = restaDosNumeros(10,9); 
console.log(diferenciaDeResta); //1
console.log(diferencia); //undefined
//podemos ver que la diferencia se establece dentro de la funcion. la variable dentro de la funcion solo pertenece dentro de la funcion.

//CONTROL DE FLUJO Y OPERADPRES DE COMPARACION
//En este ejemplo, vamos a utilizar operadores de cintrol de flujo y comparacion. El flujo de control ("control flow") es una froma de que nuestra funcion verifique si algo es true , y ya sea ejecutando el codigo suministrado si es asi o avanzando
//si no lo es . para esto usaremos la palabra clave if ;

function puedeManejar (edad) {
    if (edad>18) {
        return true ; 
    }
    return false;
}
puedeManejar(22);//true

//aqui estamos tomando un numero (edad ) y verificando si la declaracion es true (22>18), lo es , por lo que devolveremos true , y la funcion se detendra . si no es asi, omitira ese codigo y la funcion devolvera false.
//el simbolo "mayor qye " que ve en el ultimo ejemplo se llama operador de comparacion. los operadores de comparacion evaluan dos elementos devuelven verdadero o falso . Estos operadores ;
<.<=,> =, === , ! ==. aprenderemos mas sobre estos operadores en la proxima leccion. 


HOMEWORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!