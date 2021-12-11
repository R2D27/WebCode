let colores = ["blue", "white", "gray", "red", "black", "white"]

function CambiarFondo(){
    let indice = parseInt(Math.random() * 5) - 1;
    let color = colores[indice];
    document.querySelector("body").style.background = color;
    let mensaje = document.querySelector("#txtMensaje").value;
    document.querySelector("#onediv").innerHTML = mensaje;
}
//tiempo de ejecucion
setInterval(() => {
    txtMensaje()  //etiqueta "cambiar fondo" (sin"")
}, 1000);



//alert("BIENVENIDO")   ;