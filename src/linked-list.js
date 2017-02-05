const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0
    this._tail = null
    this._head = null
  }

  append(data) {
    let node = new Node(data)

    if (this.length == 0) {
      this._head = node
      this._tail = node
    }
    else {
      this._tail.next = node
      node.prev = this._tail
      this._tail = node
    }

    this.length++

    return this
  }

  head() {
    return this._head ? this._head.data : null
  }

  tail() {
    return this._tail ? this._tail.data : null
  }

  at(index) {
    let node = this._head

    for(let i = 0; i <= Math.min(index, this.length); i++) {
      if (i == index) {
        return node.data
      }

      node = node.next
    }
  }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
