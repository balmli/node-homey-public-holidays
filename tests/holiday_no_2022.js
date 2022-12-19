const expect = require("chai").expect;
const holidays = require('../lib/holidays');


const getDay = (y, m, d) => {
    return new Date(y, m, d, 0, 0, 0, 0);
};

describe("Norwegian holidays", function () {

    describe("2022", function () {
        it("Check 01.01.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 0, 1)).type).to.equal('public');
        });
        it("Check 02.01.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 0, 2))).to.equal(false);
        });
        it("Check 01.01.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 0, 2), 'yesterday').type).to.equal('public');
        });
        it("Check 13.02.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 1, 13)).type).to.equal('observance');
        });
        it("Check 15.04.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 3, 15)).type).to.equal('public');
        });
        it("Check 16.04.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 3, 16))).to.equal(false);
        });
        it("Check 18.04.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 3, 18)).type).to.equal('public');
        });
        it("Check 01.05.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 4, 1)).type).to.equal('public');
        });
        it("Check 02.05.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 4, 2))).to.equal(false);
        });
        it("Check 08.05.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 4, 8)).type).to.equal('observance');
        });
        it("Check 17.05.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 4, 17)).type).to.equal('public');
        });
        it("Check 29.05.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 4, 29))).to.equal(false);
        });
        it("Check 26.05.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 4, 26)).type).to.equal('public');
        });
        it("Check 04.06.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 5, 4))).to.equal(false);
        });
        it("Check 05.06.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 5, 5)).type).to.equal('public');
        });
        it("Check 06.06.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 5, 6)).type).to.equal('public');
        });
        it("Check 04.07.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 6, 4))).to.equal(false);
        });
        it("Check 27.11.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 10, 27)).type).to.equal('observance');
        });
        it("Check 24.12.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 11, 24)).type).to.equal('bank');
        });
        it("Check 25.12.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 11, 25)).type).to.equal('public');
        });
        it("Check 26.12.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 11, 26)).type).to.equal('public');
        });
        it("Check 31.12.2022", function () {
            expect(holidays.isHoliday('NO', getDay(2022, 11, 31)).type).to.equal('bank');
        });
    });
});
