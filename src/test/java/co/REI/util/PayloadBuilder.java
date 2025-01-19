package co.REI.util;

import java.util.HashMap;
import java.util.Map;

public class PayloadBuilder {
    public static Map<String, Object> createPostPayload(String title, String body, int userId) {
        Map<String, Object> payload = new HashMap<>();
        payload.put("title", title);
        payload.put("body", body);
        payload.put("userId", userId);
        return payload;
    }

    public static Map<String, Object> updatePostPayload(int id, String title, String body, int userId) {
        Map<String, Object> payload = new HashMap<>();
        payload.put("id", id);
        payload.put("title", title);
        payload.put("body", body);
        payload.put("userId", userId);
        return payload;
    }
}
