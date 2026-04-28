import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';

async function main() {
  const scriptsDir = join(process.cwd(), 'scripts');
  const files = readdirSync(scriptsDir);
  
  // Filter for seed scripts, excluding this master script
  const seedScripts = files
    .filter(file => file.startsWith('seed-') && file.endsWith('.ts'))
    .sort();

  console.log(`🚀 Found ${seedScripts.length} seed scripts to run...`);

  for (const script of seedScripts) {
    const scriptPath = join(scriptsDir, script);
    console.log(`\n--- Running ${script} ---`);
    try {
      // Use npx tsx to ensure it's available and handles ESM/TS correctly
      execSync(`npx tsx "${scriptPath}"`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`❌ Error running ${script}`);
      process.exit(1);
    }
  }

  console.log('\n✅ All seed scripts completed successfully!');
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
