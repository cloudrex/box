export default abstract class Util {
    /**
     * Convert a number to its binary representation.
     */
    public static toBin(num: number): string {
        return (num >>> 0).toString(2);
    }
}
