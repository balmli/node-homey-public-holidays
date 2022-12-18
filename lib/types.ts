export interface Country {
    id: string,
    name: string,
}

export type Countries = Country[];

export enum Condition {
    yesterday = 'yesterday',
    today = 'today',
    tomorrow = 'tomorrow',
}

export interface Holiday {
    type: string,
    name: string,
}

export type Holidays = { [key: string]: Holiday }
