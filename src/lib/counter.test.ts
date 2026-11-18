import { describe, it, expect } from "vitest";
import { increment } from "./counter";

describe("increment", () => {
  it("1을 더한다", () => {
    expect(increment(0)).toBe(1);
  });
});
