const chai = require("chai");
const expect = chai.expect;
const holidays = require('../lib/holidays');

const getDay = (y, m, d) => {
  return new Date(y, m, d, 0, 0, 0, 0);
};

const toStr = (aDate) => {
    return aDate.toISOString().substring(0, 10);
}

describe("Calc date", function () {
    describe("Check", function () {
        it("Check 01.01.2019", function () {
            expect(toStr(holidays.calcDate(getDay(2019, 0, 1)))).to.eq(toStr(getDay(2019, 0, 1)));
        });
        it("Check 02.01.2019 yesterday", function () {
            expect(toStr(holidays.calcDate(getDay(2019, 0, 2), 'yesterday'))).to.eq(toStr(getDay(2019, 0, 1)));
        });
        it("Check 02.01.2019 tomorrow", function () {
            expect(toStr(holidays.calcDate(getDay(2019, 0, 2), 'tomorrow'))).to.eq(toStr(getDay(2019, 0, 3)));
        });
    });
});
