import { sum } from "../src/sum"

test("soma dois números", () => {
  expect(sum(2, 3)).toBe(5);
});