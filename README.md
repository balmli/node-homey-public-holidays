# Homey Public Holidays

Utility library that exposes the next few years of public-holiday data for a curated list of countries and regions, tailored for Homey apps but usable in any Node.js project.

## Features
- Lightweight TypeScript API for checking whether a date is a holiday.
- Includes helper for day offsets (`yesterday`, `today`, `tomorrow`).
- Bundles a generated dataset sourced from [`date-holidays`](https://github.com/commenthol/date-holidays).

## Installation

```bash
npm install @balmli/homey-public-holidays
```

## Quick Start

```typescript
import {holidays, Condition, countries} from '@balmli/homey-public-holidays';

// Inspect available country/region identifiers
console.log(countries[0]); // { id: 'AU', name: 'Australia' }

// Check if a date is a holiday (returns a Holiday object or false)
const checkDate = new Date('2027-05-17');
const result = holidays.isHoliday('NO', checkDate);
if (result) {
  console.log(result.type, result.name);
}

// Apply relative day offsets
const yesterday = holidays.calcDate(new Date(), Condition.yesterday);
```

## API Overview
- `countries`: array of supported `{ id, name }` objects.
- `holidays.isHoliday(countryId, date, condition?)`: returns the matching holiday entry or `false`.
- `holidays.calcDate(date, condition?)`: shifts the date by `yesterday` or `tomorrow`, otherwise returns the same day.
- `Condition`: enum of supported offset keywords.

## Regenerating Holiday Data
The large `lib/holidays_list.ts` file is generated from `date-holidays`. To refresh it with the latest upstream data:

```bash
cd scripts
npm install         # skip if dependencies are already installed
npm run create > ../lib/holidays_list.ts
```

The generator outputs data for the current year and the next two years.

## Development
- `npm run build`: compile the TypeScript sources to `dist/`.
- `npm test`: build and run the Mocha test suite found in `tests/`.

## License
ISC © Bjørnar Almli
