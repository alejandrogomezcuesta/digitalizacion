const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const docsDir = path.resolve(__dirname, "../docs");
const outputRoot = process.argv[2] ? path.resolve(process.argv[2]) : docsDir;
const marpCli = path.resolve(
  __dirname,
  "../node_modules/@marp-team/marp-cli/marp-cli.js",
);

function findMarkdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return entry.name === "presentaciones-html"
        ? []
        : findMarkdownFiles(entryPath);
    }

    return entry.isFile() && entry.name.endsWith(".md") ? [entryPath] : [];
  });
}

function isMarpPresentation(sourcePath) {
  const markdown = fs.readFileSync(sourcePath, "utf8");
  const frontMatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

  return frontMatter !== null && /^marp:\s*true\s*$/m.test(frontMatter[1]);
}

const presentations = findMarkdownFiles(docsDir)
  .filter(isMarpPresentation)
  .sort();

if (presentations.length === 0) {
  throw new Error(`No Marp presentations found in ${docsDir}`);
}

for (const sourcePath of presentations) {
  const relativeSourceDir = path.relative(docsDir, path.dirname(sourcePath));
  const outputDir = path.join(
    outputRoot,
    relativeSourceDir,
    "presentaciones-html",
  );
  const outputPath = path.join(
    outputDir,
    `${path.basename(sourcePath, ".md")}.html`,
  );
  fs.mkdirSync(outputDir, { recursive: true });

  const result = spawnSync(
    process.execPath,
    [marpCli, sourcePath, "--output", outputPath],
    { stdio: "inherit" },
  );

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}