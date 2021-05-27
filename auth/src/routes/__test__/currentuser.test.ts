import request from "supertest";
import app from "../../app";

it("checks the current user exist", async () => {
  const cookie = await global.signin();

  const resp = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(resp.body.currentUser.email).toBe("test@test.com");
});
