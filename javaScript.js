var i =0; //contador para asignar id al boton que borrara la fila

window.onload = function() {
    //Ingresando nombre y número de control en las primeras 2 etiquetas
    document.getElementById("nombre").innerHTML += "José Alejandro López Doblado";
    document.getElementById("ncontrol").innerHTML += "17390835";
        
    //Ingresando personajes favoritos
    var personajesFav = ["Saul Goodman", "Kim Wexler", "Mike Ehrmantraut"];
    
    for (n=0; n<3; n++){
        //var fila="<tr><td>"+peliculas[n]+"</td><td><button type='button' name='remove' id="+i+" class='btn btn-danger btn_remove' onclick='deletePersonaje("+i+")';>Eliminar</button></td></tr>";
        var fila="<tr><td>"+personajesFav[n]+"</td></tr>";
        var btn = document.createElement("TR");
        btn.innerHTML=fila;
        document.getElementById("tblPersonajes").appendChild(btn);
    }

    //Arreglo con mis películas favoritas
    var peliculas = ['Star Wars episode IV','Star Wars episode V','Star Wars episode VI','Back to the future I','Back to the future II','Back to the future III',];

    //Ingresando películas favoritas    
    for (n=0; n<6; n++){
        var fila="<li id="+(n+5)+">"+peliculas[n]+"</li>";
        var btn = document.createElement("TR");
        btn.innerHTML=fila;
        document.getElementById("listaPeliculas").appendChild(btn);
        i++;
    }
};

function makePersonaje(){
    var personaje = document.getElementById("personaje").value;

    var fila="<tr><td>"+personaje+"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tblPersonajes").appendChild(btn);
    
    document.getElementById("form").reset();
}

function deletePelicula() {
    var id = document.getElementById("pelicula").value;
    id -= 1;
    
    var pelicula = document.getElementById("listaPeliculas").getElementsByTagName("li")[id];
    pelicula.parentNode.removeChild(pelicula);    
}