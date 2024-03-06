
class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
        this.length = 0;
    }

    //insert at start
    prepend(value) {
        this.headNode = new Node(value, this.headNode)
        this.length++
    }

    //insert at end
    append(value) {
        let currentNode = this.headNode
        while (currentNode.next != null) {
            currentNode = currentNode.next
        }
        currentNode.next = new Node(value)
        this.length++
    }

    //print size
    size() {
        console.log(`The list contains ${this.length} nodes.`)
    }

    //print first node
    head() {
        let currentNode = this.headNode
        console.log(currentNode)
    }

    //print last node
    tail() {
        let currentNode = this.headNode
        while (currentNode.next != null) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
    }

    //print at indexNum
    at(num) {
        let currentNode = this.headNode
        if (num > this.length) {
            console.log("This list isn't that long!")
        } else if (num <= 0) {
            console.log(currentNode)
        } else {
            for (let i = 0; i < num; i++) {
                currentNode = currentNode.next
            }
            console.log(currentNode)
        }
        }

    //remove last node
    pop() {
        let currentNode = this.headNode
        while (currentNode.next != null) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
        delete currentNode.next
        delete currentNode.data
        this.length--
    }

    //check for value in list
    contains(value) {
        let currentNode = this.headNode
        while (currentNode.next != null) {
            if (value == currentNode.data) {
                console.log(true)
            } 
            currentNode = currentNode.next
        }
    }

    //if value exists, print node index
    find(value) {
        let currentNode = this.headNode
        for (let i = 1; i < this.length; i++) {
            if (value == currentNode.data) {
                console.log(`That value is contained in node number ${i}`)
                return
            } else {
                if (currentNode.next != null) {
                currentNode = currentNode.next
                } else {
                    console.log(`That value is not in this list`)
                    return
                }
            }
        }
    }

    //convert data to string and print
    toString() {
        let currentNode = this.headNode
        let valuesArr = []
        while (currentNode.next != null) {
                valuesArr.push(`( ${currentNode.data} )`)
                currentNode = currentNode.next
            } 
            valuesArr.push(' null')
            let arrToString = String(valuesArr)
            let fixedString = arrToString.replaceAll(',', ' -> ')
            console.log(fixedString)
        }
    }

    // ?? insert at index number

    // ?? remove at index number


let ll = new LinkedList();
ll.prepend('test1')
ll.append('test2')
ll.append('test3')
ll.append('test4')
ll.append('test5')
ll.append('test6')
console.log(ll)

ll.head()
ll.tail()
ll.size()
ll.at(9)
ll.pop()
console.log(ll)
ll.contains('test3')
ll.find('test3')
ll.toString()