class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Inserting methods
    addAtHead(value) {
        let node = new ListNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        
        return ++this.length;
    }

    addAtTail(value) {
        if (this.isEmpty()) {
            return this.addAtHead(value);

        }
        const node = new ListNode(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this.length;

    }
    addAtIndex(index, value) {
        if (index > this.length) {
            return;
        } else if (index == this.length - 1) {
            return this.addAtTail(value);
        } else if (index <= 0) {
            return this.addAtHead(value);
        } else {
            let node = new ListNode(value);
            let currentNode = this.getNodeAtIndexAtIndex(index);
            let previousNode = this.getNodeAtIndexAtIndex(index - 1);
            previousNode.next = node;
            node.next = currentNode;
            return  ++this.length;
        }
    }
    // get methods
    get(index) {
        if (index < 0 || index > this.length - 1) {
            return -1;
        }
        let currentNode = this.head;
        while (index) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode.value;
    }

    getNodeAtIndexAtIndex(index) {
        if (index < 0 || index > this.length - 1) {
            return -1;
        }
        let currentNode = this.head;
        while (index != 0) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode;
    }



    //Checking value methods

    isHead(node) {
        return this.head === node;
    }
    isEmpty() {
        return this.length === 0;
    }

    isTail(node) {
        return node === this.tail;
    }
    contains(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;

    }
    //Removing node methods

    removeHead() {
        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;

        }
        let currentNode = this.head.next;
        this.head.next = null;
        this.head = currentNode;
        this.length--;
        return;
    }

    removeTail() {
        if (this.isHead(this.tail)) {
            this.removeHead();
            return this.head;
        }
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;
        return currentNode;
    }

    remove(value) {
        if (this.isEmpty()) {
            return;
        }
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (this.isHead(currentNode)) {
            this.removeHead();
            return;
        } else if (this.isTail(currentNode)) {
            this.removeTail();
            return;
        }
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }
    deleteAtIndex(index) {
        if (index < 0 || index > this.length - 1) {
            return;
        }
       let currentNode = this.getNodeAtIndexAtIndex(index);
      
        if (this.isHead(currentNode)) {
            return this.removeHead();
        } else if (this.isTail(currentNode)) {
            return this.removeTail();
        } else {
            let previousNode = this.getNodeAtIndexAtIndex(index - 1);
            previousNode.next = currentNode.next;
            currentNode = null;
            this.length--;
            return;

        }
    }
}

module.exports = LinkedList;