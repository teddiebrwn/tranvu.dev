import { isStep1Valid } from "./validateContactForm";

describe("isStep1Valid", () => {
  it("returns true for non-empty name and email", () => {
    expect(isStep1Valid("John", "john@example.com")).toBe(true);
  });

  it("returns false for empty name", () => {
    expect(isStep1Valid("", "john@example.com")).toBe(false);
  });

  it("returns false for empty email", () => {
    expect(isStep1Valid("John", "")).toBe(false);
  });

  it("returns false for both empty", () => {
    expect(isStep1Valid("", "")).toBe(false);
  });

  it("trims whitespace and returns false if only whitespace", () => {
    expect(isStep1Valid("   ", "   ")).toBe(false);
  });

  it("returns true for trimmed non-empty values", () => {
    expect(isStep1Valid(" John ", " john@example.com ")).toBe(true);
  });

  it("returns false for invalid email format (missing @)", () => {
    expect(isStep1Valid("John", "johnexample.com")).toBe(false);
  });

  it("returns false for invalid email format (missing domain)", () => {
    expect(isStep1Valid("John", "john@.com")).toBe(false);
  });

  it("returns false for invalid email format (missing TLD)", () => {
    expect(isStep1Valid("John", "john@example")).toBe(false);
  });

  it("returns true for valid email with subdomain", () => {
    expect(isStep1Valid("John", "john@mail.example.com")).toBe(true);
  });
});
