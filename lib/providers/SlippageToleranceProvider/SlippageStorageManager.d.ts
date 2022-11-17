export default class SlippageStorageManager {
    static readonly _name = "Slippages";
    static get(): {
        swap: number;
    } | null;
    static set(data: {
        swap: number;
    }): void;
}
