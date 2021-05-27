import request from "supertest";
import app from "../../app";

it("returns a 201 on succesful signup", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "te13aadsda@test.com",
      password: "password1",
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "te123s3d3fdsdf3d2a3aaa",
      password: "password1",
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "te123s3d3fdsdf3d2a3aaa",
      password: "1",
    })
    .expect(400);
});

it("returns a 400 with missing email and pw", async () => {
  await request(app).post("/api/users/signup").send({}).expect(400);
});

it("sets a cookie after request", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "te13aasada@test.com",
      password: "password1",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
