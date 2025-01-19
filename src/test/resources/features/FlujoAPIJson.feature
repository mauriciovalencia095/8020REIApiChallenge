Feature: Pruebas de la API JSONPlaceholder
  Validar las funcionalidades de la API JSONPlaceholder a traves de los metodos HTTP soportados.

  Scenario: Obtener una lista de publicaciones
    Given que la API esta disponible
    When envio una solicitud GET a "/posts"
    Then el codigo de respuesta deberia ser 200
    And el cuerpo de la respuesta deberia contener una lista con al menos un elemento
    And cada publicacion deberia tener los campos "userId", "id", "title" y "body"

  Scenario: Crear una nueva publicacion
    Given que la API esta disponible
    When envio una solicitud POST a "/posts" con el siguiente payload:
      | key    | value |
      | title  | foo   |
      | body   | bar   |
      | userId | 1     |
    Then el codigo de respuesta deberia ser 201
    And el cuerpo de la respuesta deberia contener los mismos campos "title", "body" y "userId"

  Scenario: Actualizar una publicacion existente
    Given que la API esta disponible
    When envio una solicitud PUT a "/posts" con el ID 1 y el siguiente payload:
      | id     | 1                     |
      | title  | titulo actualizado    |
      | body   | contenido actualizado |
      | userId | 1                     |
    Then el codigo de respuesta deberia ser 200
    And el cuerpo de la respuesta deberia reflejar los datos actualizados:
      | key    | value                 |
      | id     | 1                     |
      | title  | titulo actualizado    |
      | body   | contenido actualizado |
      | userId | 1                     |

  Scenario: Eliminar una publicacion
    Given que la API esta disponible
    When envio una solicitud DELETE a "/posts" con el ID 1
    Then el codigo de respuesta deberia ser 200
    When intento recuperar la publicacion eliminada con una solicitud GET a "/posts/1"
    Then el codigo de respuesta deberia ser 404

