import request from "supertest";
import app from "../../app";

it("fails when a email that does not exist provided", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "1233",
    })
    .expect(400);
});

it("fails incorrect password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")

    .send({
      email: "test@test.com",
      password: "qwe123",
    })
    .expect(400);
});

it("responds with jwt cookie", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  const resp = await request(app)
    .post("/api/users/signin")

    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(200);

  expect(resp.get("Set-Cookie")).toBeDefined();
});
