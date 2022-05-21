class Node {
    constructor(value) {
       this.value = value;
       this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
       let newNode = new Node(val)
       if(!this.first) {
           this.first = newNode;
           this.last = newNode;
       }else {
           let temp = this.first;
           this.first = newNode;
           this.first.next = temp;
       }
       return ++this.size
    }

    pop() {
        if(!this.first) return null
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.size --
        return temp.value
    }
}

let stck = new Stack
stck.push(1)
stck.push(2)
stck.push(3)
stck.push(4)
console.log(stck)
// console.log(stck.pop())
// console.log(stck.size)