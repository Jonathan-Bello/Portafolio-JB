import { FileBlob, SpreadsheetFile } from '@oai/artifact-tool';
import path from 'node:path';

const dir = 'C:/Users/jonat/Downloads/scrappy';
const files = process.argv.slice(2);
for (const file of files) {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(path.join(dir, file)));
  const sh = wb.worksheets.getItemAt(0);
  const used = sh.getUsedRange();
  console.log(`FILE ${file}`);
  const values = used.values;
  const rows = values.slice(1).filter(r => !String(r[0] ?? '').includes('css.jonathanbello.com'));
  console.log(`ROWS_PROJECT ${rows.length}`);
  for (const r of rows) console.log(JSON.stringify(r));
}
