import fs from "fs";
import Util from "../core/util";

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

        for (const byte of this.buffer.values()) {
            console.log(Util.toBin(byte));
        }

        // TODO
        return this.buffer;
    }
}
