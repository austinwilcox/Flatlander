import { parseArgs } from "jsr:@std/cli/parse-args";

const options = {
  dryRun: false,
  startingDirectory: "",
  targetDirectory: ""
};

async function extractFile(path: string) {
  for await (const file of Deno.readDir(path)) {
    if (file.isFile) {
      const fileToMove = `${path}/${file.name}`
      const moveLocation =  `${options.targetDirectory}/${file.name}`
      if (options.dryRun === false) {
        Deno.rename(fileToMove, moveLocation);
        return;
      }

      console.log(`Move ${fileToMove} to: ${moveLocation}`);
    }

    if (file.isDirectory) {
      extractFile(`${path}/${file.name}`);
    }
  }
}

async function main() {
  options.startingDirectory = Deno.cwd();
  const args = parseArgs(Deno.args);

  if(!args.t) {
    throw new Error("Please supply a target directory to move files to.")
  }

  if(args.d) {
    options.dryRun = true
  }

  options.startingDirectory = args.s || Deno.cwd()
  options.targetDirectory = args.t

  await extractFile(options.startingDirectory)
}

await main();
