const expect = require("chai").expect;
const holidays = require('../lib/holidays');


const getDay = (y, m, d) => {
    return new Date(y, m, d, 0, 0, 0, 0);
};

describe("Norwegian holidays", function () {

    describe("2027", function () {
        it("Check 01.01.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 0, 1)).type).to.equal('public');
        });
        it("Check 02.01.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 0, 2))).to.equal(false);
        });
        it("Check 01.01.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 0, 2), 'yesterday').type).to.equal('public');
        });
        it("Check 14.02.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 1, 14)).type).to.equal('observance');
        });
        it("Check 28.03.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 2, 28)).type).to.equal('public');
        });
        it("Check 30.03.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 2, 30))).to.equal(false);
        });
        it("Check 01.05.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 4, 1)).type).to.equal('public');
        });
        it("Check 02.05.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 4, 2))).to.equal(false);
        });
        it("Check 08.05.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 4, 8)).type).to.equal('observance');
        });
        it("Check 17.05.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 4, 17)).type).to.equal('public');
        });
        it("Check 29.05.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 4, 29))).to.equal(false);
        });
        it("Check 16.05.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 4, 16)).type).to.equal('public');
        });
        it("Check 05.07.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 6, 5))).to.equal(false);
        });
        it("Check 28.11.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 10, 28)).type).to.equal('observance');
        });
        it("Check 24.12.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 11, 24)).type).to.equal('bank');
        });
        it("Check 25.12.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 11, 25)).type).to.equal('public');
        });
        it("Check 26.12.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 11, 26)).type).to.equal('public');
        });
        it("Check 31.12.2027", function () {
            expect(holidays.isHoliday('NO', getDay(2027, 11, 31)).type).to.equal('bank');
        });
    });
});
