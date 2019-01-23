const LOGGED_PARAM_KEY = 'logged_param';

const logParam = (target: Object, key: string | symbol, index: number) => {
    const loggedParams: number[] = Reflect.getOwnMetadata(LOGGED_PARAM_KEY, target, key) || [];
    loggedParams.push(index);
    Reflect.defineMetadata(LOGGED_PARAM_KEY, loggedParams, target, key);
}

class Inventory {
    private items = new Array<string>();

    constructor(@logParam private initialItem: string) {
        this.items.push(initialItem);
    }

    addItem(@logParam item: string) {
        this.items.push(item);
    }
}

new Inventory('Pen').addItem('Pencil');
