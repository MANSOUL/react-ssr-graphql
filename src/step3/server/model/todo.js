class Todo {

  load() {
    if (!this.todos) {
      this.todos = [];
      this.todos.push({
        id: Date.now() + '',
        content: 'Hello mine~',
        done: false,
        delete: false,
        createdAt: Date.now() + '',
        updatedAt: Date.now() + ''
      });
    }
  }

  find(id) {
    return this.todos.find(item => {
      return item.id === id;
    });
  }

  write() {
    // fs.writeFileSync(fileDir, JSON.stringify(this.todos));
  }

  create(content) {
    this.load();
    this.todos.push({
      id: Date.now() + '',
      content,
      done: false,
      delete: false,
      createdAt: Date.now() + '',
      updatedAt: Date.now() + ''
    });
    this.write();
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