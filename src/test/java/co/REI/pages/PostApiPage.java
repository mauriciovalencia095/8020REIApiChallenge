package co.REI.pages;

import io.restassured.response.Response;

import java.util.Map;

import static io.restassured.RestAssured.given;

public class PostApiPage {
    private Response response;

    public Response getPosts() {
        response = given().get("/posts");
        return response;
    }

    public Response createPost(Map<String, Object> payload) {
        response = given()
                .header("Content-Type", "application/json")
                .body(payload)
                .when()
                .post("/posts");
        return response;
    }

    public Response updatePost(int postId, Map<String, Object> payload) {
        response = given()
                .header("Content-Type", "application/json")
                .body(payload)
                .put("/posts/" + postId);
        return response;
    }

    public Response deletePost(int postId) {
        response = given().delete("/posts/" + postId);
        return response;
    }

    public Response getPostById(int postId) {
        return given()
                .when()
                .get("/posts/" + postId);
    }
}
