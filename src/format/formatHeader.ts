import Convert from "../core/convert";

export default abstract class FormatHeader {
    /**
     * The format name. Should not be longer than 6 characters.
     */
    public static readonly id: string = "box";

    /**
     * Create the format header, and retrieve the binary form.
     */
    public static create(): Buffer {
        return Buffer.from(Convert.strToCode(`:${FormatHeader.id}|`));
    }
}
