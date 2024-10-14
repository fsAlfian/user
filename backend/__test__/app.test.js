const {
  test,
  expect,
  afterEach,
  beforeEach,
  afterAll,
} = require("@jest/globals");
const app = require("../App.js");
const request = require("supertest");
const User = require("../model").user;
const sequelize = require("../db").sequelize;

const dataUser = {
  name: "John Doe",
  identityNumber: "123",
  email: "test@gg.com",
  dateOfBirth: "1998-12-12",
};
const dataUser2 = {
  name: "John Cena",
  identityNumber: "234",
  email: "test2@gg.com",
  dateOfBirth: "1998-12-12",
};

test("Good input", async () => {
  try {
    const { body, status } = await request(app).post("/users").send(dataUser);
    expect(status).toBe(201);
    expect(body.code).toBe(201);
    expect(body.status).toBe("success");
    expect(body.message.length).toBe(1);
  } catch (error) {
    throw new Error(error);
  }
});

test("All field are empty", async () => {
  try {
    const { body, status } = await request(app).post("/users");
    expect(status).toBe(400);
    expect(body.code).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(4);
  } catch (error) {
    throw new Error(error);
  }
});

test("Name is empty", async () => {
  try {
    const { body, status } = await request(app)
      .post("/users")
      .send({ ...dataUser, name: "" });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The name field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Name is null", async () => {
  try {
    const { body, status } = await request(app)
      .post("/users")
      .send({ ...dataUser, name: null });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The name field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Name is undefined", async () => {
  try {
    const { body, status } = await request(app).post("/users").send({
      identityNumber: "123",
      email: "test@gg.com",
      dateOfBirth: "1998-12-12",
    });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The name field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Email is empty", async () => {
  try {
    const { body, status } = await request(app)
      .post("/users")
      .send({ ...dataUser, email: "" });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The email field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Email is null", async () => {
  try {
    const { body, status } = await request(app)
      .post("/users")
      .send({ ...dataUser, email: null });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The email field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Email is undefined", async () => {
  try {
    const { body, status } = await request(app).post("/users").send({
      name: "John Doe",
      identityNumber: "123",
      dateOfBirth: "1998-12-12",
    });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The email field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Date of birth is empty", async () => {
  try {
    const { body, status } = await request(app)
      .post("/users")
      .send({ ...dataUser, dateOfBirth: "" });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The dateOfBirth field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Date of birth is null", async () => {
  try {
    const { body, status } = await request(app)
      .post("/users")
      .send({ ...dataUser, dateOfBirth: null });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The dateOfBirth field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Date of birth is undefined", async () => {
  try {
    const { body, status } = await request(app).post("/users").send({
      name: "John Doe",
      identityNumber: "123",
      email: "test@gg.com",
    });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("The dateOfBirth field is required.");
  } catch (error) {
    throw new Error(error);
  }
});

test("Date of birth is not valid", async () => {
  try {
    const { body, status } = await request(app)
      .post("/users")
      .send({ ...dataUser, dateOfBirth: "19198-12-13" });
    expect(status).toBe(400);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("Date of birth is not valid");
  } catch (error) {
    throw new Error(error);
  }
});

test("Email already registered", async () => {
  try {
    // mock data
    await request(app).post("/users").send(dataUser);

    const { body, status } = await request(app).post("/users").send(dataUser);
    expect(status).toBe(401);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("Email already registered");
  } catch (error) {
    throw new Error(error);
  }
});

test("identity number is registered", async () => {
  try {
    // mock data
    await request(app).post("/users").send(dataUser);

    const { body, status } = await request(app)
      .post("/users")
      .send({
        ...dataUser2,
        identityNumber: "123",
      });
    expect(status).toBe(401);
    expect(body.status).toBe("error");
    expect(body.message.length).toBe(1);
    expect(body.message[0]).toBe("Identity number already registered");
  } catch (error) {
    throw new Error(error);
  }
});

afterEach(async () => {
  await User.destroy({ where: {} });
});

afterAll(async () => {
  await sequelize.close();
});
