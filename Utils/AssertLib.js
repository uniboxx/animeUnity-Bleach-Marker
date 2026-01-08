

class AssertLib {
    // --- Reference Docs ---
    // https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript
    static assert(condition, message) {
        if (typeof message == "string") {
            message = Error(message);
        }
        if (!condition) {
            throw message || "Assertion failed";
        }
    }
}