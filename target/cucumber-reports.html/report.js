$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FlujoAPIJson.feature");
formatter.feature({
  "name": "Pruebas de la API JSONPlaceholder",
  "description": "  Validar las funcionalidades de la API JSONPlaceholder a traves de los metodos HTTP soportados.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Obtener una lista de publicaciones",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que la API esta disponible",
  "keyword": "Given "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.queLaApiEstaDisponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio una solicitud GET a \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.envioUnaSolicitudGET(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el codigo de respuesta deberia ser 200",
  "keyword": "Then "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCodigoDeRespuestaDeberiaSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el cuerpo de la respuesta deberia contener una lista con al menos un elemento",
  "keyword": "And "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCuerpoDeLaRespuestaDeberiaContenerUnaListaConAlMenosUnElemento()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cada publicacion deberia tener los campos \"userId\", \"id\", \"title\" y \"body\"",
  "keyword": "And "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.cadaPublicacionDeberiaTenerLosCampos(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Crear una nueva publicacion",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que la API esta disponible",
  "keyword": "Given "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.queLaApiEstaDisponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio una solicitud POST a \"/posts\" con el siguiente payload:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.envioUnaSolicitudPOST(java.lang.String,java.util.Map\u003cjava.lang.String, java.lang.Object\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el codigo de respuesta deberia ser 201",
  "keyword": "Then "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCodigoDeRespuestaDeberiaSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el cuerpo de la respuesta deberia contener los mismos campos \"title\", \"body\" y \"userId\"",
  "keyword": "And "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCuerpoDeLaRespuestaDeberiaContenerLosMismosCampos(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actualizar una publicacion existente",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que la API esta disponible",
  "keyword": "Given "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.queLaApiEstaDisponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio una solicitud PUT a \"/posts\" con el ID 1 y el siguiente payload:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.envioUnaSolicitudPUT(java.lang.String,int,java.util.Map\u003cjava.lang.String, java.lang.Object\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el codigo de respuesta deberia ser 200",
  "keyword": "Then "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCodigoDeRespuestaDeberiaSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el cuerpo de la respuesta deberia reflejar los datos actualizados:",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCuerpoDeLaRespuestaDeberiaReflejarLosDatosActualizados(java.util.Map\u003cjava.lang.String, java.lang.Object\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Eliminar una publicacion",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que la API esta disponible",
  "keyword": "Given "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.queLaApiEstaDisponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "envio una solicitud DELETE a \"/posts\" con el ID 1",
  "keyword": "When "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.envioUnaSolicitudDELETE(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el codigo de respuesta deberia ser 200",
  "keyword": "Then "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCodigoDeRespuestaDeberiaSer(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "intento recuperar la publicacion eliminada con una solicitud GET a \"/posts/1\"",
  "keyword": "When "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.intentoRecuperarLaPublicacionEliminada(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el codigo de respuesta deberia ser 404",
  "keyword": "Then "
});
formatter.match({
  "location": "co.REI.stepdefinitions.ApiStepDefinitions.elCodigoDeRespuestaDeberiaSer(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c404\u003e but was:\u003c200\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat co.REI.stepdefinitions.ApiStepDefinitions.elCodigoDeRespuestaDeberiaSer(ApiStepDefinitions.java:29)\r\n\tat ✽.el codigo de respuesta deberia ser 404(file:///C:/Users/valen/Documents/8020APIChallenge/src/test/resources/features/FlujoAPIJson.feature:41)\r\n",
  "status": "failed"
});
});