import { execSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const presentationsDir = join(process.cwd(), 'presentations');

const presentations = readdirSync(presentationsDir).filter((name) =>
  statSync(join(presentationsDir, name)).isDirectory(),
);

console.log(`Building ${presentations.length} presentations...\n`);

for (const name of presentations) {
  console.log(`\n--- Building: ${name} ---`);
  execSync(`yarn workspace @qawb/${name} build`, { stdio: 'inherit' });
}

console.log('\nAll presentations built successfully.');
