// 3. Declarar constantes APP_NOMBRE, APP_VERSION, ANIO
const APP_NOMBRE = "Atlas";
const APP_VERSION = 1.2;
const ANIO = 2025;

// 4. Variables con let: contadorVisitas, usuarioActivo, esMovil
let contadorVisitas=0;
let usuarioActivo;
let esMovil;

// 5. Funciones sumar() y multiplicar()
function sumar(a, b) {return a + b;}
function multiplicar(a, b) {return a * b;}
// Implementación de suma y multiplicación
document.addEventListener("DOMContentLoaded", function(){
    const pnumero = document.getElementById("pnumero");
    const snumero = document.getElementById("snumero");
    const btnSumar = document.getElementById("btnSumar");
    const btnMultiplicar = document.getElementById("btnMulti");
    const salida = document.getElementById("salidanumerica");
    if (btnSumar && salida) {
        btnSumar.addEventListener("click", function () {
            const num1 = parseFloat(pnumero.value) || 0;
            const num2 = parseFloat(snumero.value) || 0;
            const resultado = sumar(num1, num2);
            salida.innerText = `Resultado: ${resultado}`;
        });
    }
    if (btnMultiplicar && salida) {
        btnMultiplicar.addEventListener("click", function () {
            const num1 = parseFloat(pnumero.value) || 0;
            const num2 = parseFloat(snumero.value) || 0;
            const resultado = multiplicar(num1, num2);
            salida.innerText = `Resultado: ${resultado}`;
        });
    }
});

// 6. Mostrar mensaje de bienvenida en #salida con template string
document.addEventListener("DOMContentLoaded", function(){
    const mensaje = document.getElementById("salida");
    if (mensaje) mensaje.innerText = `Bienvenido a ${APP_NOMBRE} de Flora y Fauna v${APP_VERSION} - ${ANIO}`;
});

// 7. Botón con contador de visitas y actualización en #totalVisitas
function contarVistas() {
    if (contadorVisitas) {
        contadorVisitas++;
    } else {
        contadorVisitas = 1;
    }
    const btnVisitas = document.getElementById("totalVisitas");
    if (btnVisitas) btnVisitas.innerText = `Total de visitas: ${contadorVisitas}`;
}

// 8. Función mostrarHora() con reloj en header
function mostrarHora() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const horaFormateada = `${horas}:${minutos}:${segundos}`;
    const relojElemento = document.getElementById("reloj");
    if (relojElemento) relojElemento.innerText = horaFormateada;
};
window.onload = function() {
    mostrarHora();
    setInterval(mostrarHora, 1000);
}

// 9. Navegación activa usando data-page y clase activo
document.addEventListener("DOMContentLoaded", function(){
    const paginaActual = document.body.getAttribute("data-page");
    const enlacesNav = document.querySelectorAll("header nav ul li a");
    enlacesNav.forEach((enlace) => {
        const href = enlace.getAttribute("href") || ""; // evita null
        if (paginaActual && href.includes(paginaActual)) {
            enlace.classList.add("activo");
        } else {
            enlace.classList.remove("activo");
        }
    });
});

// 10. DOM básico: cambio de color con botones (rojo, verde, azul)
document.addEventListener("DOMContentLoaded", function(){
    const botonesColor = document.querySelectorAll(".cambiar-color button");
    botonesColor.forEach((boton) => {
        boton.addEventListener("click", function () {
            document.body.style.backgroundColor = this.dataset.color;
        });
    });
});

// 11. DOM avanzado: lista de notas con validación de input
document.addEventListener("DOMContentLoaded", function(){
    const listaNotas = document.getElementById("listaNotas");
    const inputNota = document.getElementById("inputNota");
    const btnAgregarNota = document.getElementById("btnAgregarNota");
    if (btnAgregarNota) {
        btnAgregarNota.addEventListener("click", function () {
        const texto = inputNota.value.trim();
        if (texto.length === 0) {
            alert("No puede estar vacío");
            return;
        }
        if (texto.length < 3) {
            alert("La nota debe tener al menos 3 caracteres.");
            return;
        }
        if (texto.length > 100) {
            alert("La nota no debe exceder los 100 caracteres.");
            return;
        }
        const li = document.createElement("li");
        li.textContent = texto;
        listaNotas.appendChild(li);
        inputNota.value = "";
    });
    }
});

// 12. Validación de formulario en contacto.html con mensajes de error
document.addEventListener("DOMContentLoaded", function(){
    const formularioSug = document.getElementById("formularioSug");
    if (!formularioSug) return;
    const inputName = document.getElementById("name");
    const inputDescripcion = document.getElementById("descripcion");
    const inputEmail = document.getElementById("email");
    formularioSug.addEventListener('submit', function(event){
        event.preventDefault();
        const name = inputName.value.trim();
        const descripcion = inputDescripcion.value.trim();
        const email = inputEmail.value.trim();
        if(name === "" || descripcion === "" || email === ""){
            alert("Por favor, completa todos los campos.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
        alert("Sugerencia enviada con éxito. ¡Gracias!");   // 13. Mensaje de éxito al enviar formulario válido
        formularioSug.reset();
    });
});

// 14. Buscador en glosario.html con coincidencias en tiempo real
document.addEventListener("DOMContentLoaded", function(){
    const inputBuscar = document.getElementById("inputBuscar");
    const listaBusqueda = document.getElementById("listaBusqueda");
    if (!inputBuscar || !listaBusqueda) return;
    const terminos = document.getElementsByTagName("dt");
    inputBuscar.addEventListener("input", function(){
        const filtro = this.value.toLowerCase();
        listaBusqueda.innerHTML = "";
        if (filtro.length === 0) return;
        Array.from(terminos).forEach((termino) => {
            if (termino.textContent.toLowerCase().startsWith(filtro)) {
                const li = document.createElement("li");
                li.textContent = termino.textContent;
                listaBusqueda.appendChild(li);
            }
        });
    });
});

// 15. Función evaluarNumero(n) con if/else
function evaluarNumero(n) {
    if (n > 0) {
        return "Positivo";
    } else if (n < 0) {
        return "Negativo";
    }
    return "Cero";
}
// 16. Función obtenerDia(numero) con switch
function obtenerDia(numero) {
    switch (numero) {
        case 1: return "Lunes";
        case 2: return "Martes";
        case 3: return "Miércoles";
        case 4: return "Jueves";
        case 5: return "Viernes";
        case 6: return "Sábado";
        case 7: return "Domingo";
        default: return "Número inválido";
    }
}
// Implementación de evaluarNumero y obtenerDia
document.addEventListener("DOMContentLoaded", function(){
    const pnumero = document.getElementById("pnumero");
    const snumero = document.getElementById("snumero");
    const btnEvaluar = document.getElementById("btnEvaluar");
    const salida = document.getElementById("salidanumerica");
    if (btnEvaluar && salida) {
        btnEvaluar.addEventListener("click", function () {
            const num1 = parseFloat(pnumero.value) || 0;
            const num2 = parseInt(snumero.value) || 0;
            const resultadoEval = evaluarNumero(num1);
            const resultadoDia = obtenerDia(num2);
            salida.innerText = `Evaluar Número: ${resultadoEval}\nDía de la semana: ${resultadoDia}`;
        });
    }
});

// 17. Renderizar perfil en contacto.html usando template string
function renderizarPerfil(nombre, edad, profesion) {
    return `
        <div class="perfil">
            <h2>Perfil de ${nombre}</h2>
            <p>Edad: ${edad} años</p>
            <p>Profesión: ${profesion}</p>
        </div>
    `;
}
document.addEventListener("DOMContentLoaded", function(){
    const html = renderizarPerfil("Yorman", 22, "Estudiante de Ingeniería");
    const contenedor = document.getElementById("perfilContainer");
    if (contenedor) contenedor.innerHTML = html;
});

// 18. LocalStorage para visitas
document.addEventListener("DOMContentLoaded", function(){
    contadorVisitas = localStorage.getItem("contadorVisitas");
    contarVistas();
    localStorage.setItem("contadorVisitas", contadorVisitas);
});

// 19. Clase Util con método formatearMoneda()
class Util {
    static formatearMoneda(valor) {
        return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(valor);
    }
}