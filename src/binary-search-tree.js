const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.branch = null;
  }

  root() {
    return this.branch;
  }

  add(data) {
    this.branch =  addBranch(this.branch, data);
    function addBranch(dot, data){
      if(!dot){
        return new Node(data)
      }
      if(dot.data === data){
        return dot
      }
      if (dot.data > data) {
        dot.left = addBranch(dot.left, data)
      } else {
        dot.right = addBranch(dot.right, data)
      }
    return dot;
    }
  }

  has(data) {
    return checkDot(this.branch, data);
      function checkDot(dot, data) {
        if (!dot) {
          return false;
        }
        if (dot.data === data) {
          return true;
        }
        if(dot.data > data){
          return checkDot(dot.left, data);
        }else{
          return checkDot(dot.right, data);
        }
      }
  }

  find(data) {
    return findDot(this.branch, data);
      function findDot(dot, data) {
        if (!dot) {
            return null;
        }
        if (dot.data === data) {
            return dot;
        }
        if(dot.data > data){
          return findDot(dot.left, data);
        }else{
          return findDot(dot.right, data);
        }

      }
  }

  remove(data) {
    this.branch = removeDot(this.branch, data);
    function removeDot(dot, data){
      if(!dot){
        return null;
      }
      if (dot.data > data){
        dot.left = removeDot(dot.left, data);
        return dot;
      }else if(dot.data < data){
        dot.right = removeDot(dot.right, data);
        return dot;
      }else{
        //если попали сюда значит dot.data === data
        // если у узла нет ни правой и левой ветки
        if(!dot.left && !dot.right){
          return null;
        }
        // если у узла если правая ветка
        if(!dot.left ){
          dot = dot.right
          return dot;
        }
        // если у узла если левая ветка
        if(!dot.right ){
          dot = dot.left
          return dot;
        }

        //когда есть обе ветки выбираем направление в право ,нужно найти самое маленькое число справа и удалить его 
        let minFromRight = dot.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          dot.data = minFromRight.data;

          dot.right = removeDot(dot.right, minFromRight.data);

          return dot;
      }
    }
  }

  min() {
    if(!this.branch){
      return;
    }
    let dot = this.branch;

		while (dot.left && dot.left != null) {
			dot = dot.left;
		}
		return dot.data;
  }

  max() {
    if(!this.branch){
      return;
    }
    let dot = this.branch;

		while (dot.right && dot.right != null) {
			dot = dot.right;
		}
		return dot.data;
  }
}
module.exports = {
  BinarySearchTree
};