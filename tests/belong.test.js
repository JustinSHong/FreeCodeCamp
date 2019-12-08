import { getIndexToIns, getIndexToIns2 } from "../Basic Algorithms/belong";

let testCases;

describe("Returns the lowest index where a value should be inserted into an array once sorted", () => {
    beforeAll(() => {
        testCases = {
            one: {
                array: [10, 20, 30, 40, 50],
                target: 35,
                returnVal: 3
            },
            two: {
                array: [10, 20, 30, 40, 50],
                target: 30,
                returnVal: 2
            },
            three: {
                array: [40, 60],
                target: 50,
                returnVal: 1
            },
            four: {
                array: [3, 10, 5],
                target: 3,
                returnVal: 0
            },
            five: {
                array: [5, 3, 20, 3],
                target: 5,
                returnVal: 2
            },
            six: {
                array: [2, 20, 10],
                target: 19,
                returnVal: 2
            },
            seven: { array: [2, 5, 10], target: 15, returnVal: 3 }
        };

        return testCases;
    });

    it("should take an array of numbers as an argument", () => {});

    it("should take a number as an argument", () => {});

    it("should return the index of the given value", () => {});
});
