export default {
  Query: {
    list: (_, {}, { dataSources }, info) => {
      const todos = dataSources.todo.list();
      return {
        todos
      };
    },

    item: (_, { id }, { dataSources }) => {
      return dataSources.todo.find(id);
    }
  },

  Mutation: {
    create: (_, { content }, { dataSources }) => {
      try {
        dataSources.todo.create(content);
        return {
          success: true
        };
      }
      catch (err) {
        return {
          success: false
        };
      }
    },

    done: (_, { id }, { dataSources }) => {
      try {
        dataSources.todo.done(id);
        return {
          success: true
        };
      }
      catch (err) {
        return {
          success: false
        };
      }
    },

    delete: (_, { id }, { dataSources }) => {
      try {
        dataSources.todo.delete(id);
        return {
          success: true
        };
      }
      catch (err) {
        return {
          success: false
        };
      }
    }
  }
}