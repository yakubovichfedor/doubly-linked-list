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

  insertAt(index, data) {
    if (this.length == 0) {
      this.append(data)
      return this
    }

    let node = this._head

    for(let i = 0; i <= Math.min(index, this.length); i++) {
      if (i == index) {
        let prev = node.prev
        let newNode = new Node(data)

        newNode.prev = node.prev
        node.prev = newNode
        newNode.next = node
        if (prev) {
          prev.next = newNode
        }
        if (index == 0) {
          this._head = newNode
        }
      }

      node = node.next
    }

    this.length++

    return this
  }

  isEmpty() {
    return this.length == 0
  }

  clear() {
    this._head = null
    this._tail = null
    this.length = 0

    return this
  }

  deleteAt(index) {
    if (this.length < 1)
      return

    if (index == 0) {
      this._head = this._head.next

      if (this._head) {
        this._head.prev = null
      }
    }
    else if (index == this.length - 1) {
      this._tail = this._tail.prev
      this._tail.next = null
    }
    else {
      let node = this._head

      for(let i = 0; i <= index; i++) {
        if (i == index) {
          let next = node.next
          let prev = node.prev

          prev.next = next
          next.prev = prev
        }

        node = node.next
      }
    }

    this.length--

    return this
  }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
