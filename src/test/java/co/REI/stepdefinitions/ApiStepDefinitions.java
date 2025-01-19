package co.REI.stepdefinitions;

import co.REI.service.ApiBase;
import io.cucumber.java.en.*;
import io.restassured.response.Response;
import org.junit.Assert;
import co.REI.pages.PostApiPage;
import co.REI.util.PayloadBuilder;

import java.util.Map;

public class ApiStepDefinitions extends ApiBase {
    private final PostApiPage postsApiPage = new PostApiPage();
    private Response response;
    private Map<String, Object> payload;

    @Given("que la API esta disponible")
    public void queLaApiEstaDisponible() {
        new ApiBase();
    }

    @When("envio una solicitud GET a {string}")
    public void envioUnaSolicitudGET(String endpoint) {
        response = postsApiPage.getPosts();
    }

    @Then("el codigo de respuesta deberia ser {int}")
    public void elCodigoDeRespuestaDeberiaSer(int statusCode) {
        Assert.assertEquals(statusCode, response.getStatusCode());
    }

    @Then("el cuerpo de la respuesta deberia contener una lista con al menos un elemento")
    public void elCuerpoDeLaRespuestaDeberiaContenerUnaListaConAlMenosUnElemento() {
        Assert.assertTrue(response.jsonPath().getList("$").size() > 0);
    }

    @Then("cada publicacion deberia tener los campos {string}, {string}, {string} y {string}")
    public void cadaPublicacionDeberiaTenerLosCampos(String userId, String id, String title, String body) {
        response.jsonPath().getList("$").forEach(post -> {
            Assert.assertNotNull(((Map<?, ?>) post).get(userId));
            Assert.assertNotNull(((Map<?, ?>) post).get(id));
            Assert.assertNotNull(((Map<?, ?>) post).get(title));
            Assert.assertNotNull(((Map<?, ?>) post).get(body));
        });
    }

    @When("envio una solicitud POST a {string} con el siguiente payload:")
    public void envioUnaSolicitudPOST(String endpoint, Map<String, Object> payload) {
        this.payload = payload;
        response = postsApiPage.createPost(payload);
    }

    @Then("el cuerpo de la respuesta deberia contener los mismos campos {string}, {string} y {string}")
    public void elCuerpoDeLaRespuestaDeberiaContenerLosMismosCampos(String title, String body, String userId) {
        Assert.assertEquals(payload.get(title), response.jsonPath().getString("title"));
        Assert.assertEquals(payload.get(body), response.jsonPath().getString("body"));
        Assert.assertEquals(payload.get(userId), response.jsonPath().getString("userId"));
    }

    @When("envio una solicitud PUT a {string} con el ID {int} y el siguiente payload:")
    public void envioUnaSolicitudPUT(String endpoint, int id, Map<String, Object> payload) {
        response = postsApiPage.updatePost(id, payload);
    }

    @Then("el cuerpo de la respuesta deberia reflejar los datos actualizados:")
    public void elCuerpoDeLaRespuestaDeberiaReflejarLosDatosActualizados(Map<String, Object> payload) {
        this.payload = payload;
        Assert.assertEquals(payload.get("id"), response.jsonPath().getString("id"));
        Assert.assertEquals(payload.get("title"), response.jsonPath().getString("title"));
        Assert.assertEquals(payload.get("body"), response.jsonPath().getString("body"));
        Assert.assertEquals(payload.get("userId"), response.jsonPath().getString("userId"));
    }

    @When("envio una solicitud DELETE a {string} con el ID {int}")
    public void envioUnaSolicitudDELETE(String endpoint, int id) {
        response = postsApiPage.deletePost(id);
    }

    @When("intento recuperar la publicacion eliminada con una solicitud GET a {string}")
    public void intentoRecuperarLaPublicacionEliminada(String endpoint) {
        response = postsApiPage.getPostById(1);
    }
}