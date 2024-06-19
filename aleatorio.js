var nombres = [
    'Josue', 'Kevin', 'Daniel', 'Luis', 
    'Ana', 'Luis', 'María', 'Carlos', 'Laura', 'David', 
    'Elena', 'Juan', 'Sofia', 'Miguel', 'Pedro', 
    'Lucas', 'Fernando', 'Raúl', 'Jorge', 'Andrea', 
    'Beatriz', 'Clara', 'Diana', 'Eva', 'Gabriel', 
    'Hector', 'Ignacio', 'Javier', 'Karla', 'Lola', 
    'Manuel', 'Nora', 'Olga', 'Patricia', 'Ramón', 
    'Sara', 'Tomás', 'Ulises', 'Vanessa', 'Walter', 
    'Ximena', 'Yolanda', 'Zoe', 'Antonio', 'Bruno', 
    'Cecilia', 'Daniela', 'Eduardo', 'Fabiola', 'Gustavo', 
    'Hilda', 'Isabel', 'Julio', 'Karen', 'Leonardo', 
    'Marta', 'Nicolás', 'Oscar', 'Pablo', 'Quintin', 
    'Rafael', 'Sergio', 'Teresa', 'Uriel', 'Victor', 
    'William', 'Xavier', 'Yahir', 'Zulema', 'Andrés', 
    'Bernardo', 'Carmen', 'Diego', 'Esteban', 'Félix', 
    'Gloria', 'Humberto', 'Inés', 'Joaquín', 'Katia', 
    'Lorena', 'Marcos', 'Natalia', 'Omar', 'Paula', 
    'Rodrigo', 'Sandra', 'Tania', 'Ulises', 'Valeria', 
    'Wendy', 'Ximena', 'Yolanda', 'Zara', 'Alberto'
  ];
  var apellidos = [
    'Ciau', 'Montero', 'EK', 'Ucan', 
    'González', 'Rodríguez', 'López', 'García', 'Martínez', 
    'Hernández', 'Pérez', 'Sánchez', 'Ramírez', 'Cruz', 
    'Flores', 'Gómez', 'Morales', 'Vargas', 'Mendoza', 
    'Jiménez', 'Díaz', 'Castillo', 'Ortiz', 'Torres', 
    'Ramos', 'Reyes', 'Gutierrez', 'Ruiz', 'Alvarez', 
    'Acosta', 'Medina', 'Vega', 'Romero', 'Aguilar', 
    'Chavez', 'Molina', 'Rojas', 'Guerrero', 'Silva', 
    'Salazar', 'Soto', 'Delgado', 'Castro', 'Ibarra', 
    'Campos', 'Pacheco', 'Navarro', 'Valdez', 'Rios', 
    'Dominguez', 'Santos', 'Valencia', 'Mendez', 'Sosa', 
    'Velasquez', 'Orozco', 'Esquivel', 'Ortega', 'Montes', 
    'Zamora', 'Paredes', 'Rangel', 'Montoya', 'Peña', 
    'Cervantes', 'Villanueva', 'Miranda', 'Aguirre', 'Luna', 
    'Carrillo', 'Mejía', 'Gallegos', 'Fuentes', 'Guerra', 
    'Pineda', 'Villalobos', 'Robles', 'Macias', 'Escobar', 
    'Solís', 'Serrano', 'Vargas', 'Escamilla', 'Quintana', 
    'Cuevas', 'Cabrera', 'Valdez', 'Reyes', 'Rojas', 
    'Fernández', 'Ponce', 'Calderón', 'Zarate', 'Lugo', 
    'Sandoval', 'Tapia', 'Santana', 'Arellano', 'Bravo'
  ];
  
function crearnombre()
{
var nombreRandomIndex = Math.floor(Math.random() * nombres.length);
var apellidoRandomIndex = Math.floor(Math.random() * apellidos.length);

var nombreAleatorio = nombres[nombreRandomIndex];
var apellidoAleatorio = apellidos[apellidoRandomIndex];

var nombreApellidoElemento = document.getElementById('nombre-apellido');
nombreApellidoElemento.textContent = nombreAleatorio +' ' + apellidoAleatorio;
}

