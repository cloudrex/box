import fs from "fs";
import Util from "../core/util";
import FormatHeader from "../format/formatHeader";
import BinStream from "../binary/binStream";

export default class Compressor {
    /**
     * The path of the target file.
     */
    protected readonly path: string;

    protected buffer?: Buffer;

    public constructor(path: string) {
        this.path = path;
        this.buffer = undefined;
    }

    /**
     * Whether the corresponding file
     * path exists.
     */
    public get exists(): boolean {
        return fs.existsSync(this.path);
    }

    /**
     * Load the target file.
     */
    public load(): this {
        // Ensure target file exists.
        if (!this.exists) {
            throw new Error("Unable to load target file because it does not exist");
        }

        // Read and save the target file's data.
        this.buffer = fs.readFileSync(this.path);

        return this;
    }

    public compress(): Buffer {
        // Ensure target file is loaded.
        if (this.buffer === undefined) {
            throw new Error("Cannot compress when the target file is not loaded");
        }

        const result: Buffer = FormatHeader.create();
        const stream: BinStream = new BinStream(this.buffer);

        while (stream.hasNext) {
            if (stream.isRepeat()) {
                console.log("Repeats!");
            }

            stream.next();
        }

        // TODO
        return result;
    }
}
