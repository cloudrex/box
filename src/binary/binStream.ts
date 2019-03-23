export default class BinStream {
    protected readonly buffer: Buffer;

    protected pos: number;

    public constructor(buffer: Buffer) {
        this.buffer = buffer;
        this.pos = 0;
    }

    /**
     * Retrieve the position counter.
     */
    public getPos(): number {
        return this.pos;
    }

    /**
     * Advance the position counter, and return the
     * corresponding item.
     */
    public next(): number {
        return this.buffer[++this.pos];
    }

    /**
     * Retrieve the next item without modifying the
     * position counter. Returns null if there is no
     * next item.
     */
    public peek(): number | null {
        return this.buffer[this.pos + 1] || null;
    }

    /**
     * Whether the position counter can continue
     * to advance.
     */
    public get hasNext(): boolean {
        return this.pos <= this.buffer.length;
    }

    /**
     * Reset the position counter to 0.
     */
    public reset(): this {
        this.pos = 0;

        return this;
    }

    /**
     * Retrieve the item located at the current position
     * counter.
     */
    public get(): number {
        return this.buffer[this.pos];
    }

    /**
     * Whether the upcoming sequence repeats
     * at least once.
     */
    public isRepeat(): boolean {
        const current: number = this.get();

        // Next item matches current item.
        if (this.peek() === current) {
            return true;
        }

        return false;
    }
}
