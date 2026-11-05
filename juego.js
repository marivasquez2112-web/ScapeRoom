function mostrarPantalla(nombre) {
    let pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    let pantalla = document.querySelector("." + nombre);

    if (pantalla) {
        pantalla.classList.add("activa");
    }
}

function detenerMisterio() {
    let sonido = document.getElementById("sonido-misterio");

    if (sonido) {
        sonido.pause();
        sonido.currentTime = 0;
    }
}

function iniciarMisterio() {
    let sonido = document.getElementById("sonido-misterio");

    if (sonido) {
        sonido.currentTime = 0;
        sonido.play();
    }
}

function reproducirLogro() {
    let sonido = document.querySelector(".sonido-logro");

    if (sonido) {
        sonido.currentTime = 0;
        sonido.play();
    }
}

function comenzar() {
    mostrarPantalla("prueba1");
    iniciarMisterio();
}

function siguienteNivel() {
    mostrarPantalla("nivel2-prueba1");
}

function sonidoCorrecto() {
    let sonido = document.querySelector(".sonido-fiesta");

    if (sonido) {
        sonido.currentTime = 0;
        sonido.play();
    }

    let contenedor = document.querySelector(".celebracion");

    if (contenedor) {
        let emojis = ["🎉", "🥳", "🎊", "✨", "💗", "💜", "⭐"];

        contenedor.innerHTML = "";

        for (let i = 0; i < 35; i++) {
            let emoji = document.createElement("div");

            emoji.classList.add("emoji-fiesta");
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + "%";
            emoji.style.animationDuration = (1.5 + Math.random() * 2) + "s";

            contenedor.appendChild(emoji);
        }

        setTimeout(function() {
            contenedor.innerHTML = "";
        }, 3000);
    }
}

function sonidoIncorrecto() {
    let sonido = document.querySelector(".sonido-perder");

    if (sonido) {
        sonido.currentTime = 0;
        sonido.play();
    }

    let contenedor = document.querySelector(".derrota");

    if (contenedor) {
        let emojis = ["😢", "😭", "💔", "😞", "🥲"];

        contenedor.innerHTML = "";

        for (let i = 0; i < 25; i++) {
            let emoji = document.createElement("div");

            emoji.classList.add("emoji-derrota");
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + "%";
            emoji.style.animationDuration = (1.5 + Math.random() * 2) + "s";

            contenedor.appendChild(emoji);
        }

        setTimeout(function() {
            contenedor.innerHTML = "";
        }, 3000);
    }
}

function respuesta1(respuesta) {
    if (respuesta == "cerebro") {
        sonidoCorrecto();

        document.querySelector(".mensaje1").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("prueba2");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje1").innerHTML =
            "😢😭 ¡Incorrecto! Pista: piensa en el órgano que controla el pensamiento, la memoria y muchas funciones del cuerpo.";
    }
}

function respuesta2(respuesta) {
    if (respuesta == "carbohidrato") {
        sonidoCorrecto();

        document.querySelector(".mensaje2").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("prueba3");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje2").innerHTML =
            "😢😭 ¡Incorrecto! Pista: los carbohidratos son una fuente de energía. Se encuentran en alimentos como el pan, el arroz y las frutas.";
    }
}

function respuesta3(respuesta) {
    if (respuesta == "solido") {
        sonidoCorrecto();

        document.querySelector(".mensaje3").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("prueba4");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje3").innerHTML =
            "😢😭 ¡Incorrecto! Pista: un sólido mantiene su forma, un líquido toma la forma del recipiente y un gas se expande.";
    }
}

function comprobar4() {
    let respuesta = document.querySelector(".entrada4").value;

    if (respuesta == "7") {
        sonidoCorrecto();

        document.querySelector(".mensaje4").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("prueba5");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje4").innerHTML =
            "😢😭 ¡Incorrecto! Pista: para dejar la x sola en x + 5 = 12, resta 5 a ambos lados. Calcula 12 - 5.";
    }
}

function comprobar5() {
    let respuesta = document.querySelector(".entrada5").value;

    if (respuesta == "3/4") {
        sonidoCorrecto();

        document.querySelector(".mensaje5").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("prueba6");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje5").innerHTML =
            "😢😭 ¡Incorrecto! Pista: convierte 1/2 en 2/4. Después suma 2/4 + 1/4 y conserva el denominador.";
    }
}

function comprobar6() {
    let respuesta = document.querySelector(".entrada6").value;

    if (respuesta == "50") {
        sonidoCorrecto();

        document.querySelector(".mensaje6").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("prueba7");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje6").innerHTML =
            "😢😭 ¡Incorrecto! Pista: para hallar la distancia, multiplica la velocidad por el tiempo: 10 × 5.";
    }
}

function respuesta7(respuesta) {
    if (respuesta == "mercurio") {
        sonidoCorrecto();

        document.querySelector(".mensaje7").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("prueba8");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje7").innerHTML =
            "😢😭 ¡Incorrecto! Pista: busca el primer planeta contando desde el Sol; es el más cercano a él.";
    }
}

function comprobar8() {
    let respuesta = document.querySelector(".entrada8").value;

    if (respuesta == "2") {
        sonidoCorrecto();

        document.querySelector(".mensaje8").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando al código final...";

        setTimeout(function() {
            mostrarPantalla("codigo");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje8").innerHTML =
            "😢😭 ¡Incorrecto! Pista: la densidad se calcula dividiendo la masa entre el volumen. Calcula 100 ÷ 50.";
    }
}

function comprobarFinal() {
    let respuesta = document.querySelector(".entrada-final").value;

    if (respuesta == "47259361") {
        sonidoCorrecto();

        document.querySelector(".mensaje-final").innerHTML =
            "¡Código correcto! 🎉 Lograste escapar del laboratorio.";

        setTimeout(function() {
            mostrarPantalla("final");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".mensaje-final").innerHTML =
            "😢😭💔 ¡Código incorrecto! Pista: escribe las cifras de las ocho pruebas en el orden en que aparecieron, sin espacios ni guiones.";
    }
}

function nivel2Respuesta1(respuesta) {
    if (respuesta == "piernas") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje1").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("nivel2-prueba2");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje1").innerHTML =
            "😢😭 ¡Incorrecto! Pista: piensa qué parte del cuerpo usamos para caminar y correr.";
    }
}

function nivel2Respuesta2(respuesta) {
    if (respuesta == "carbohidrato") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje2").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("nivel2-prueba3");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje2").innerHTML =
            "😢😭 ¡Incorrecto! Pista: los carbohidratos aportan energía; están en alimentos como el pan, el arroz y las frutas.";
    }
}

function nivel2Respuesta3(respuesta) {
    if (respuesta == "separan") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje3").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("nivel2-prueba4");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje3").innerHTML =
            "😢😭 ¡Incorrecto! Pista: en los gases, las partículas están más separadas y se mueven libremente.";
    }
}

function nivel2Comprobar4() {
    let respuesta = document.querySelector(".nivel2-entrada4").value;

    if (respuesta == "5") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje4").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("nivel2-prueba5");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje4").innerHTML =
            "😢😭 ¡Incorrecto! Pista: vuelve a leer la ecuación y realiza la operación contraria para dejar sola la incógnita.";
    }
}

function nivel2Comprobar5() {
    let respuesta = document.querySelector(".nivel2-entrada5").value;

    if (respuesta == "5/6") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje5").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("nivel2-prueba6");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje5").innerHTML =
            "😢😭 ¡Incorrecto! Pista: busca un denominador común, convierte las fracciones en equivalentes y después suma los numeradores.";
    }
}

function nivel2Comprobar6() {
    let respuesta = document.querySelector(".nivel2-entrada6").value;

    if (respuesta == "2000") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje6").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("nivel2-prueba7");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje6").innerHTML =
            "😢😭 ¡Incorrecto! Pista: revisa las unidades y realiza la conversión necesaria antes de calcular.";
    }
}

function nivel2Respuesta7(respuesta) {
    if (respuesta == "jupiter") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje7").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando a la siguiente prueba...";

        setTimeout(function() {
            mostrarPantalla("nivel2-prueba8");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje7").innerHTML =
            "😢😭 ¡Incorrecto! Pista: El planeta más grande del sistema solar Empieza por J.";
    }
}

function nivel2Comprobar8() {
    let respuesta = document.querySelector(".nivel2-entrada8").value;

    if (respuesta == "4") {
        sonidoCorrecto();

        document.querySelector(".nivel2-mensaje8").innerHTML =
            "¡Correcto! 🎉 Conseguistes la pista. Pasando al código final...";

        setTimeout(function() {
            mostrarPantalla("nivel2-codigo");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje8").innerHTML =
            "😢😭 ¡Incorrecto! Pista: vuelve a leer los datos y fíjate qué operación pide la pregunta. Consulta la página de ayuda si hace falta.";
    }
}

function nivel2ComprobarFinal() {
    let respuesta = document.querySelector(".nivel2-entrada-final").value;

    if (respuesta == "26984351") {
        detenerMisterio();
        reproducirLogro();

        document.querySelector(".nivel2-mensaje-final").innerHTML =
            "¡Código correcto! 🎉 Completaste el segundo nivel.";

        setTimeout(function() {
            mostrarPantalla("nivel2-final");
        }, 4000);
    } else {
        sonidoIncorrecto();

        document.querySelector(".nivel2-mensaje-final").innerHTML =
            "😢😭💔 ¡Código incorrecto! Pista: ordena las ocho cifras del nivel 2 como conseguiste las pistas, sin espacios ni guiones.";
    }
}

function reiniciarJuego() {
    detenerMisterio();

    let sonidos = document.querySelectorAll("audio");

    sonidos.forEach(function(sonido) {
        sonido.pause();
        sonido.currentTime = 0;
    });

    document.querySelectorAll(".pantalla").forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    document.querySelectorAll(".mensaje").forEach(function(mensaje) {
        mensaje.innerHTML = "";
    });

    document.querySelectorAll(".entrada").forEach(function(input) {
        input.value = "";
    });

    document.querySelector(".celebracion").innerHTML = "";
    document.querySelector(".derrota").innerHTML = "";

    mostrarPantalla("inicio");
}
