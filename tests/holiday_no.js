const expect = require('chai').expect;
const holidays = require('../lib/holidays');
const {holidays_list: holidayList} = require('../lib/holidays_list');

const getDay = (year, month, day) => new Date(year, month - 1, day, 0, 0, 0, 0);

const norwegianYears = Array.from(new Set(
    Object.keys(holidayList)
        .map(key => /^NO-(\d{4})-\d{2}-\d{2}$/.exec(key))
        .filter(Boolean)
        .map(match => Number(match[1])),
)).sort((a, b) => a - b);

const fixedPublicHolidays = [
    {month: 1, day: 1},
    {month: 5, day: 17},
    {month: 12, day: 25},
    {month: 12, day: 26},
];

describe('Norwegian holidays', function () {
    it('contains three consecutive years of data', function () {
        expect(norwegianYears).to.have.lengthOf(3);
        expect(norwegianYears).to.deep.equal([
            norwegianYears[0],
            norwegianYears[0] + 1,
            norwegianYears[0] + 2,
        ]);
    });

    norwegianYears.forEach(year => {
        describe(String(year), function () {
            fixedPublicHolidays.forEach(({month, day}) => {
                it(`recognizes ${day}.${month}.${year} as a public holiday`, function () {
                    const result = holidays.isHoliday('NO', getDay(year, month, day));

                    expect(result).to.not.equal(false);
                    expect(result.type).to.equal('public');
                });
            });

            it('supports relative-day lookups', function () {
                const result = holidays.isHoliday('NO', getDay(year, 1, 2), 'yesterday');

                expect(result).to.not.equal(false);
                expect(result.type).to.equal('public');
            });
        });
    });

    it('returns false for an unknown country', function () {
        expect(holidays.isHoliday('UNKNOWN', getDay(norwegianYears[0], 1, 1))).to.equal(false);
    });
});
