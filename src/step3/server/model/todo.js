import fs from 'fs';

class Todo {

  load() {
    this.todos = require('../data/todo.json');
  }

  find(id) {
    return this.todos.find(item => {
      return item.id === id;
    });
  }

  write() {
    fs.writeFileSync('../data/todo.json', JSON.stringify(this.todos));
  }

  create(content) {
    this.load();
    this.todos.push({
      id: Date.now() + '',
      content,
      done: false,
      delete: false,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }

  list() {
    this.load();
    return this.todos;
  }

  done(id) {
    this.load();
    const item = this.find(id);
    item.done = true;
    item.updatedAt = Date.now();
    this.write();
  }

  delete(id) {
    this.load();
    const item = this.find(id);
    item.delete = true;
    item.updatedAt = Date.now();
    this.write();
  }
}

export default Todo;