class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null

        let temp = this.first
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const quickQueue = new Queue
quickQueue.enqueue(1)
quickQueue.enqueue(2)
quickQueue.enqueue(3)
console.log(quickQueue.first)
console.log(quickQueue.last)
console.log(quickQueue.size)
quickQueue.enqueue(4)
console.log(quickQueue.dequeue())