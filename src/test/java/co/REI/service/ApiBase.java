package co.REI.service;

import io.restassured.RestAssured;

public class ApiBase {
    public ApiBase() {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";
    }
}
