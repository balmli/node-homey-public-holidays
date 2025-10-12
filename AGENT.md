# Agent Notes

## Purpose
- TypeScript library that exposes public holiday lookups for Homey apps or other Node.js integrations.
- Core API lives under `lib/` and is bundled to `dist/` via the standard TypeScript build.

## Project Structure
- `lib/`: TypeScript sources including countries, holiday calculations, and generated holiday data.
- `dist/`: Compiled JavaScript and declarations produced by the build.
- `scripts/`: Standalone TypeScript utility used to refresh generated data (has its own `package.json`).
- `tests/`: Mocha specs executed through `npm test`.

## Build & Test
- `npm run build` compiles the library to `dist/`.
- `npm test` compiles first (via `pretest`) and then runs the Mocha test suite.

## Regenerating Holiday Data
- The large `lib/holidays_list.ts` file is generated, not hand edited.
- To refresh it, run the generator inside the `scripts` workspace:
  1. `cd scripts`
  2. `npm install` (once, or when dependencies change)
  3. `npm run create > ../lib/holidays_list.ts`
- The command streams JSON-like TypeScript to stdout, so redirecting the output back into `lib/holidays_list.ts` keeps the data current.

## Notable Files
- `lib/holidays.ts`: Calculates offsets and checks whether a given date is a holiday by reading from the generated list.
- `lib/countries.ts`: Master list of supported country/region identifiers referenced by the generator.
- `lib/index.ts`: Re-exports the public API (`countries`, `holidays_list`, helpers).
- `scripts/create.ts`: Generator script that pulls data from `date-holidays` for the next three years.

## Conventions
- Codebase targets Node 16+ and uses CommonJS modules.
- Generated files should not be manually edited; regenerate via the script above.
