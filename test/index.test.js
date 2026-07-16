const { capitalizeWords, filterActiveUsers, logAction } = require("../index");

// Capitalize words
test("capitalizes each word in a normal sentence", () => {
  expect(capitalizeWords("hello world")).toBe("Hello World");
});

// function filterActiveUsers(users) {
//   return users.filter((user) => user.inactive);
// }

describe("filterActiveUsers", () => {
    // An array with mixed active/inactive users
  test("filters active users from an array with mixed active and inactive users", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false }
    ]; 
    expect(filterActiveUsers(users)).toEqual([
        { name: "Alice", isActive: true }
    ]);
  });
// An array with all inactive users
  test("returns an empty array when all users are inactive", () => {
    const users = [
      { name: "Alice", isActive: false },
      { name: "Bob", isActive: false }
    ];
    expect(filterActiveUsers(users)).toEqual([]);
  });
    // An empty array
  test("reurns an empty array when given an empty array", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });

  describe("logAction", () => {
    test("generate the correct log string for valid inputs", () => {
        const result = logAction("login", "Alice");

        expect(result).toContain("User Alice performed login");
    });
    // Missing action
    test("handles a missing action", () => {
        const result = logAction(undefined, "Alice");

        expect(result).toContain("User Alice performed undefined");
    });
    // Missing username
    test("handles a missing username", () => {
        const result = logAction("login");

        expect(result).toContain("User undefined performed login");
    });
    // Empty strings as inputs
    test("handles empty strings", () => {
        const result = logAction("", "");

        expect(result).toContain("User  performed");
    });

  });




});
