const element = document.querySelector("#guardar");
const ingreso = document.querySelector("#ingreso");

let datos = "";
ingreso.addEventListener("input", function(e){    
    datos = e.target.value;    
})

element.addEventListener("click",function(){   
    const resultado = reverseString(datos);    
    document.querySelector("#respuesta").textContent = resultado;    
    
});

function reverseString(str) {
    const array = [...str];
    let vacio=[];
    let palabra="";
    array.forEach(function(e){
      
    });
    let j= -1;
    const lon = array.length-1;
    for(let i=lon;i>=0; i--){    
      j++;
      vacio[i] = array[j];
      
    }
    palabra = vacio.join("");   
    
    return palabra;
    
}

  
  
  