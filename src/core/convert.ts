/**
 * Conversion utility class.
 */
export default abstract class Convert {
    /**
     * Convert a number to its binary representation.
     */
    public static numToBin(num: number): string {
        return (num >>> 0).toString(2);
    }

    /**
     * Extract corresponding character codes from a string.
     */
    public static strToCode(str: string): string {
        let result: string = "";

        for (let i: number = 0; i < str.length; i++) {
            result += str.charCodeAt(i);
        }

        return result;
    }
}
