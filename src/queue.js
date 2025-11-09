const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;  // создаем значение для  начала списка
    this.tail = null;  //создаем значение для конца списка
 }
  
  getUnderlyingList() {
    return this.head; //выводим список с самого начала
  }

  enqueue(value) {
    
    const node = new ListNode(value);

      if (!this.head || !this.tail) {
        this.head= node;//обработка случая если не было ничего
        this.tail = node;
      } else {
        this.tail.next =node;// поправляем конец списка
        this.tail = node;
      }
      return this;
  }

  dequeue() {
    let headDot = this.head; //первый эл
    this.head = this.head.next;//убираем его из списка
    return headDot.value;//выводим то что удалили
  }

}

module.exports = {
  Queue
};
