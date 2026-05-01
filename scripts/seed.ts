import { prisma } from "../src/lib/prisma";
import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join } from 'path';

async function clearDatabase() {
  console.log("🧹 Clearing database...");
  try {
    // Delete in correct order due to foreign keys
    await prisma.testResult.deleteMany({});
    await prisma.listeningResult.deleteMany({});
    await prisma.readingQuestion.deleteMany({});
    await prisma.readingTest.deleteMany({});
    await prisma.listeningQuestion.deleteMany({});
    await prisma.listeningTest.deleteMany({});
    await prisma.verificationToken.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.user.deleteMany({});
    console.log("✅ Database cleared successfully");
  } catch (e) {
    console.error("❌ Error clearing database:", e);
    throw e;
  }
}

async function runSeedScripts() {
  const scriptsDir = join(process.cwd(), 'scripts');
  const files = readdirSync(scriptsDir);
  
  // Filter for seed scripts, excluding this master script
  const seedScripts = files
    .filter(file => file.startsWith('seed-') && file.endsWith('.ts') && file !== 'seed.ts')
    .sort();

  console.log(`\n🚀 Found ${seedScripts.length} seed scripts to run...`);

  for (const script of seedScripts) {
    const scriptPath = join(scriptsDir, script);
    console.log(`\n--- Running ${script} ---`);
    try {
      execSync(`npx tsx "${scriptPath}"`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`❌ Error running ${script}`);
      process.exit(1);
    }
  }
}

async function main() {
  console.log("\n🚀 Starting database reset and seed...\n");
  try {
    await clearDatabase();
    await runSeedScripts();
    console.log("\n✨ Database reset and seeding complete!\n");
  } catch (e) {
    console.error("\n💥 Seeding failed:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
