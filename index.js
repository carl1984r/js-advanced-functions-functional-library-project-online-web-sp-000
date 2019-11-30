const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, fn) {
      for(const value of Object.values(obj)) {
        fn(value);
      };
      return obj;
    },

    map: function(obj, fn) {
      const newArr = [];
      for(const value of Object.values(obj)) {
        newArr.push(fn(value));
      };
      return newArr
    },

    reduce: function(obj, fn, accumulator) {
      let i = 0;
      const array = Object.values(obj);
      if(!accumulator) {
        accumulator = array[0];
        i = 1;
      };
      for(; i < array.length; i++) {
        accumulator = fn(accumulator, array[i]);
      };
      return accumulator;
    },

    find: (obj, fn) => { for(const value of Object.values(obj)) { if(fn(value)) { return value } } },

    filter: (obj, fn) => {
      const newArr = [];
      for(const value of Object.values(obj)) {
        if(fn(value)) { newArr.push(value) };
      };
      return newArr;

    },


  }
})()

fi.libraryMethod()
