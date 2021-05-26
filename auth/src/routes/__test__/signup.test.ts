import request from "supertest";
import app from "../../app";

const myrequest = request("http://tickets.dev/api/users");

describe("POST /signup", function () {
  it("returns a 201 on succesful signup", async () => {
    await myrequest
      .post("/signup")
      .send({
        email: "te123s3d3fdsdf3d2a3aaa@test.com",
        password: "password1",
      })
      .expect(201)
      .then((res) => {
        console.log(res.body);
      });
    // .expect((res) => {
    //   res.body.email.toBe("te123s33323aaa@test.com");
    // })
    // .end((err, res) => {
    //   if (err) return done(err);

    //   console.log(res.body);
    //   done();
    // });
  });
});
