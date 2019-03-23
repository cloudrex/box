#!/usr/bin/env node

import cli from "commander";
import Compressor from "./compression/compressor";
import path from "path";

cli
    .usage("[options] target")
    .version("1.0.0")
    .option("-d, --decompress", "Use decompress mode")
    .option("-i, --include-hash", "Whether to include original input file hash onto target")
    .parse(process.argv);

// Always require target.
if (cli.args.length !== 1) {
    console.log("Invalid amount of arguments");
    process.exit(0);
}

// Use compression mode.
if (!cli.decompress) {
    const compressor: Compressor = new Compressor(path.join(process.cwd(), cli.args[0]));

    compressor.load().compress();
}
