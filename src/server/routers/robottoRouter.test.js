const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../index");
const Robotto = require("../../db/models/Robotto");
const connectRoboMongo = require("../../db/index");

let mongoServer;
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const connectionString = mongoServer.getUri();
  await connectRoboMongo(connectionString);
});

beforeEach(async () => {
  Robotto.create({ name: "robo1" });
  Robotto.create({ name: "robo2" });
});

afterEach(async () => {
  await Robotto.deleteMany({});
});
afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("given a endpoint /robots", () => {
  describe("when it get the correct token", () => {
    test("then it should response with status 200 and have 2 robots", async () => {
      const { body } = await request(app).get("/list").expect(200);
      expect(body).toHaveProperty("robottos");
    });
  });
});
