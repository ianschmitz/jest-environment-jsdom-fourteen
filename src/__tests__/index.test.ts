
const JSDomEnvironment = jest.requireActual("../index");

describe("JSDomEnvironment", () => {
  it("should configure setTimeout/setInterval to use the browser api", () => {
    const env1 = new JSDomEnvironment({});

    env1.fakeTimers.useFakeTimers();

    const timer1 = env1.global.setTimeout(() => {}, 0);
    const timer2 = env1.global.setInterval(() => {}, 0);

    [timer1, timer2].forEach(timer => {
      expect(typeof timer).toBe("number");
    });
  });
});
