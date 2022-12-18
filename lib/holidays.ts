'use strict';

import {holidays_list} from './holidays_list'
import {Condition, Holiday} from "./types";

const addDate = function (date: Date, days: number): Date {
    // @ts-ignore
    let ret = new Date(date);
    ret.setDate(ret.getDate() + days);
    return ret;
};

export const calcDate = function (aDate: Date, condition?: Condition | string): Date {
    if (condition === Condition.yesterday || condition === 'yesterday') {
        return addDate(aDate, -1);
    } else if (condition === Condition.tomorrow || condition === 'tomorrow') {
        return addDate(aDate, 1);
    }
    return aDate;
};

const toJSONLocal = function (date: Date): string {
    // @ts-ignore
    var local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
};

export const isHoliday = function (country: string, aDate: Date, condition?: Condition | string): Holiday | boolean {
    let holi = holidays_list[country + '-' + toJSONLocal(calcDate(aDate, condition))];
    return !holi ? false : holi;
};
