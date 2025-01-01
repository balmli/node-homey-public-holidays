import Holidays from 'date-holidays';
import {countries} from '../lib';

/*
npx ts-node create.ts > ../lib/holidays_list.ts
 */

console.log('import {Holidays} from "./types";\n');
console.log('export const holidays_list: Holidays = {');
countries.map(c => {
    let args = c.id.split('-');
    let hd;
    if (args.length === 2) {
        hd = new Holidays(args[0], args[1].toLowerCase());
    } else if (args.length === 3) {
        hd = new Holidays(args[0], args[1].toLowerCase(), args[2].toLowerCase());
    } else {
        hd = new Holidays(c.id);
    }
    const startYear = new Date().getFullYear();
    for (let year = startYear; year < startYear + 3; year++) {
        let dates = hd.getHolidays(year);
        if (dates) {
            const result = dates
                .filter(date => date.type !== 'public')
                .reduce(
                    (accumulator, target) => ({...accumulator, [target.date.substr(0, 10)]: target}),
                    {});

            const publicHolidays = dates
                .filter(date => date.type === 'public')
                .reduce(
                    (accumulator, target) => ({...accumulator, [target.date.substr(0, 10)]: target}),
                    {});

            Object.keys(publicHolidays).forEach(function (key) {
                // @ts-ignore
                result[key] = publicHolidays[key];
            });

            Object.keys(result)
                .sort()
                .forEach(function (key) {
                    // @ts-ignore
                    let ho = result[key];
                    console.log(`"${c.id}-${ho.date.substr(0, 10)}":{"type":"${ho.type}","name":"${ho.name}"},`);
                });
        }
    }
});
console.log('};');
