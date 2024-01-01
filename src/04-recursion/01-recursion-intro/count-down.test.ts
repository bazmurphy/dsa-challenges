import countDown from "./count-down";

describe("countDown", () => {
  const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log numbers in reverse order and print "All done!"', () => {
    countDown(3);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 3); // 3 is logged first
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 2); // 2 is logged next
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 1); // 1 is logged last
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, "All done!"); // 'All done!' is logged after counting down
  });

  it("should handle num <= 0", () => {
    countDown(0);
    expect(consoleLogSpy).toHaveBeenCalledWith("All done!"); // 'All done!' is logged when num is 0
    countDown(-1);
    expect(consoleLogSpy).toHaveBeenCalledWith("All done!"); // 'All done!' is logged when num is negative
  });
});
