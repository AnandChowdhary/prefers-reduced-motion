import prefersReducedMotion from "./index";

test("should be a string", () => {
  expect(typeof prefersReducedMotion()).toBe("string");
});

test("should be reduce or no-preference", () => {
  expect(["reduce", "no-preference"].includes(prefersReducedMotion())).toBeTruthy();
});

test("should be reduce, no-preference, or unknown", () => {
  expect(["reduce", "no-preference", "unknown"].includes(prefersReducedMotion())).toBeTruthy();
});
