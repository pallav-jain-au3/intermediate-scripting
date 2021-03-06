class Stack {
    constructor() {
        this._storage = [];
        this._count = 0;
    }

    push(value) {
        this._storage[this._count] = value;
        this._count++;
        return this._count;
    }

    pop() {
        if (this._count > 0) {
            let value = this._storage[--this._count];
            delete this._storage[this._count]
            return value;
        }
    }

    get peek() {
        if (this._count > 0) {
            return this._storage[this._count - 1];
        }
    }

    isEmpty() {
        return this._count == 0
    }


}
module.exports = Stack;