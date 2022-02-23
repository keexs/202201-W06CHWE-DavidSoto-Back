const Robotto = require("../../db/models/Robotto");
const { listRobottos, getRobotto } = require("./robottosController");

describe("Given a listRobottos controller", () => {
  describe("When it recives a request", () => {
    test("Then it should response with an array of robottos", async () => {
      const robottos = [
        { name: "robo1" },
        { name: "robo2" },
        { name: "robo3" },
      ];

      const res = { json: jest.fn() };

      Robotto.find = jest.fn().mockResolvedValue(robottos);

      await listRobottos(null, res);

      expect(res.json).toHaveBeenCalledWith({ robottos });
      expect(Robotto.find).toHaveBeenCalled();
    });
  });
});

describe("Given a getRobotto controller", () => {
  describe("When it recives a request with a param id 3", () => {
    test("Then it should return a robotto with id 3", async () => {
      const robotto = { name: "robo3", id: 3 };
      const req = { params: { id: 3 } };
      const res = { json: jest.fn() };
      const next = jest.fn();

      Robotto.findOne = jest.fn().mockResolvedValue(robotto);
      await getRobotto(req, res, next);

      expect(res.json).toHaveBeenCalledWith(robotto);
      expect(next).not.toHaveBeenCalled();
    });
    describe("When it recives a request with a param id 5", () => {
      test("Then it should call next function with an error: Robotto not found", async () => {
        const req = { params: { id: 5 } };
        const res = { json: jest.fn() };
        const next = jest.fn();
        const error = new Error("Robotto not found");

        Robotto.findOne = jest.fn().mockResolvedValue(null);
        await getRobotto(req, res, next);

        expect(next).toHaveBeenCalledWith(error);
      });
    });
    describe("When it recives a request with an invalid param", () => {
      test("Then it should call next function with an error", async () => {
        const req = { params: { id: null } };
        const res = { json: jest.fn() };
        const next = jest.fn();
        const error = new Error("Bad id format or invalid id");

        Robotto.findOne = jest.fn().mockResolvedValue(null);
        await getRobotto(req, res, next);

        expect(next).toHaveBeenCalledWith(error);
      });
    });
  });
});
