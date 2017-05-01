import Calc from './calc';
describe("text calculation app", function () {
    it("should add numbers", function () {
        expect(Calc.add(1, 5)).toBe(6);
    })
})