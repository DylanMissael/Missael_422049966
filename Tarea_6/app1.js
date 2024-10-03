// imprimir x vertical y horizontal
function vertical(arreglo, elemento){
    arreglo.push(elemento);
}
let arregloX  = [];
for (let i = 0; i < 4; i++){
    vertical(arregloX, "x");
}
for (let i = 0; i < arregloX.length; i++){
    console.log(arregloX[i]);
}



function horizontal(arreglo, elemento) {
    arreglo.push(elemento);  
}
let arregloX2 = []; 
for (let i = 0; i < 4; i++) {
    vertical(arregloX2, "x");
}
console.log(arregloX2.join(" "));  



// tabla de multiplicar 
function tabla(){
    for (let i = 0; i <= 10; i++){
        for (let j = 0; j <= 10; j++){
            let res = i * j;
            console.log(i + "x" + j + "=" + res);
        }
    }
}
tabla(); 



//arreglo flecha 
const frutas = ["Manzana", "Plátano", "Naranja", "Fresa", "Mango", "Piña", "Uva", "Pera", "Melón", "Sandía"];
frutas.forEach((frutas,index) => console.log(index + 1, frutas));