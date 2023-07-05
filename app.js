$(document).ready(function() {
    // Obtener la referencia a la tabla
    var table = $('#crud-table tbody');
  
    // Cargar datos iniciales
    loadTableData();
  
    // Enviar el formulario
    $('#crud-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      addData(name, email);
      this.reset();
    });
  
    // Función para cargar los datos en la tabla
    function loadTableData() {
      // Realizar una llamada AJAX para obtener los datos de la API de Rick and Morty
      $.ajax({
        url: 'https://rickandmortyapi.com/api/character', // URL de la API de Rick and Morty
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          table.empty();
          $.each(data.results, function(index, character) {
            var row = '<tr><td>' + character.name + '</td><td>' + character.species + '</td><td><button class="edit-btn" data-id="' + character.id + '">Editar</button><button class="delete-btn" data-id="' + character.id + '">Eliminar</button></td></tr>';
            table.append(row);
          });
        }
      });
    }
  
    // Función para agregar datos
    function addData(name, email) {
      // Realizar una llamada AJAX para agregar datos a la API (no disponible en la API de Rick and Morty)
      // Aquí puedes agregar tu lógica personalizada para manejar los datos
      // Por ejemplo, puedes almacenarlos en una base de datos local o enviarlos a tu propia API
      // Si estás utilizando una API externa para almacenar los datos, deberás hacer una llamada a esa API aquí
      // Puedes utilizar el método $.ajax() de jQuery para hacerlo
      loadTableData(); // Recargar los datos después de agregarlos
    }
  
    // Escuchar eventos de botones dentro de la tabla
    table.on('click', '.edit-btn', function() {
      var id = $(this).data('id');
      // Implementar lógica de edición según tus necesidades
    });
  
    table.on('click', '.delete-btn', function() {
      var id = $(this).data('id');
      // Implementar lógica de eliminación según tus necesidades
    });
  });
  