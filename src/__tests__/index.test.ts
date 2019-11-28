import JSDomEnvironment from "../";

describe("JSDomEnvironment", () => {
  let instance: JSDomEnvironment | undefined;

  afterEach(async () => {
    if (instance) {
      await instance.teardown();
      instance = undefined;
    }
  });

  it("should configure setTimeout/setInterval to use the browser api", () => {
    instance = new JSDomEnvironment({} as any);

    instance.fakeTimers!.useFakeTimers();

    const timer1 = instance.global.setTimeout(() => {}, 0);
    const timer2 = instance.global.setInterval(() => {}, 0);

    [timer1, timer2].forEach(timer => {
      expect(typeof timer).toBe("number");
    });
  });
});
