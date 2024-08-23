class Cache {
    constructor() {
        this.map = new Map();
    }

    map: Map<string, any>;

    get(key: string) {
        return this.map.get(key);
    }

    set(key: string, value: any) {
        this.map.keys().next().value
        this.map.set(key, value);
    }


}
