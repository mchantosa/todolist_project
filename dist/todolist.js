"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Todo = require('./todo');

var TodoList = /*#__PURE__*/function () {
  function TodoList(title) {
    _classCallCheck(this, TodoList);

    this.title = title;
    this.todos = [];
  }

  _createClass(TodoList, [{
    key: "add",
    value: function add(todo) {
      if (!(todo instanceof Todo)) {
        throw new TypeError('TypeError: can only add Todo objects');
      } else this.todos.push(todo);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.getTitle;
    }
  }, {
    key: "size",
    value: function size() {
      return this.todos.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this.todos[0];
    }
  }, {
    key: "last",
    value: function last() {
      return this.todos[this.size() - 1];
    }
  }, {
    key: "itemAt",
    value: function itemAt(index) {
      this._validateIndex(index);

      return this.todos[index];
    }
  }, {
    key: "_validateIndex",
    value: function _validateIndex(index) {
      if (!(index in this.todos)) {
        throw new ReferenceError("invalid index: ".concat(index));
      }
    }
  }, {
    key: "markDoneAt",
    value: function markDoneAt(index) {
      this.itemAt(index).markDone();
    }
  }, {
    key: "markUndoneAt",
    value: function markUndoneAt(index) {
      this.itemAt(index).markUndone();
    }
  }, {
    key: "isDone",
    value: function isDone() {
      return this.todos.every(function (todo) {
        return todo.isDone();
      });
    }
  }, {
    key: "shift",
    value: function shift() {
      return this.todos.shift();
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.todos.pop();
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      this._validateIndex(index);

      return this.todos.splice(index, 1)[0];
    }
  }, {
    key: "toString",
    value: function toString() {
      var returnStr = ["---- Today's Todos ----"];
      this.todos.forEach(function (todo) {
        return returnStr.push(todo.toString());
      });
      return returnStr.join('\n');
    }
  }, {
    key: "forEach",
    value: function forEach(callback, thisArg) {
      var arr = this.todos;

      for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        callback.call(thisArg, element, index, arr);
      }
    }
  }, {
    key: "filter",
    value: function filter(callback, thisArg) {
      var list = new TodoList(this.title);
      var filteredArr = list.todos;
      var arr = this.todos;

      for (var index = 0; index < arr.length; index++) {
        var element = arr[index];

        if (callback.call(thisArg, element, index, arr)) {
          filteredArr.push(element);
        }
      }

      return list;
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(title) {
      var matchingTodos = this.filter(function (todo) {
        return todo.getTitle() === title;
      });
      return matchingTodos.size() ? matchingTodos.itemAt(0) : undefined;
    }
  }, {
    key: "allDone",
    value: function allDone() {
      return this.filter(function (todo) {
        return todo.isDone();
      });
    }
  }, {
    key: "allNotDone",
    value: function allNotDone() {
      return this.filter(function (todo) {
        return !todo.isDone();
      });
    }
  }, {
    key: "markDone",
    value: function markDone(title) {
      var matchingTodos = this.findByTitle(title);
      if (matchingTodos) matchingTodos.markDone();
    }
  }, {
    key: "markAllDone",
    value: function markAllDone() {
      this.forEach(function (todo) {
        return todo.markDone();
      });
    }
  }, {
    key: "markAllUndone",
    value: function markAllUndone() {
      this.forEach(function (todo) {
        return todo.markUndone();
      });
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.todos.slice();
    }
  }]);

  return TodoList;
}();

module.exports = TodoList;