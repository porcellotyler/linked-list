class LinkedList {
    constructor() {
        this.headNode = new Node(null, null);
    }

    append(value) {
        let newNode = new Node(value, null);
        let temporaryNode = this.headNode;
        while (temporaryNode.nextNode != null) {
            temporaryNode = temporaryNode.nextNode;
        }
        return temporaryNode.nextNode = newNode;
    }

    prepend(value) {
        let head = this.headNode;
        let newNode = new Node(value, head.nextNode);
        return head.nextNode = newNode;
    }

    size() {
        let count = 0;
        let temporaryNode = this.headNode;
       while (temporaryNode.nextNode != null) {
           temporaryNode = temporaryNode.nextNode;
           count++;
        }
        return count;
    }

    head() {
        return this.headNode.nextNode;
    }

    tail() {
        let tailNode = this.headNode;
        while (tailNode.nextNode != null) {
            tailNode = tailNode.nextNode;
        }
        return tailNode;
    }
    //at is returning one node beyond what it should - need to determine why
    at(index) {
        let indexNode = this.headNode.nextNode;
        for (let count = 1; count <= index; count++) {
            indexNode = indexNode.nextNode;
        }
        return indexNode;
    }

    pop() {
        let temporaryNode = this.headNode;
        while (temporaryNode.nextNode.nextNode != null) {
            temporaryNode = temporaryNode.nextNode;
        }
        return temporaryNode.nextNode = null;
    }
    
    contains(value) {
        let temporaryNode = this.headNode;
        while (temporaryNode.nextNode != null) {
            if (temporaryNode.value === value) {
                return true
            }

            temporaryNode = temporaryNode.nextNode;
        }
        return false
    }

    find(value) {
        let temporaryNode = this.headNode;
        let index = 0;
        while (temporaryNode.nextNode != null) {
            if (temporaryNode.value === value) {
                return index;
            }

            temporaryNode = temporaryNode.nextNode;
            index++;
        }
        return null;
    }

    //need to format to (value) -> (value) -> (value) -> null -- maybe write a regex?
    toString() {
        let stringList = JSON.stringify(this).replaceAll(`{`, "").replaceAll(`}`, "").replaceAll(`"nextNode":`, "nextNode -> ").replaceAll(`"`, "").replaceAll(`,`, ", ")
        //stringList.replace('headNode', '');
        //stringList.replace('nextNode', '');

        return stringList;
    }
}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let testList = new LinkedList;
console.log(testList.append('Tyler'));
console.log(testList.append('Caroline'));
console.log(testList.prepend('First'));
console.log(testList.size());
console.log(testList.head());
console.log(testList.tail());
console.log(testList.at(2));
console.log(testList.contains('Pizza'));
console.log(testList.contains('Tyler'));
console.log(testList.find('Pizza'));
console.log(testList.find('Tyler'));
console.log(testList.pop());
console.log(testList.toString());
