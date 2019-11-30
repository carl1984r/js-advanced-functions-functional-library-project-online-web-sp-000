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

    size: obj => { return Object.values(obj).length },

    first: (arr, amt = 1) => { return amt > 1 ? arr.slice(0, amt) : arr[0] },

    last: (arr, amt = 1) => { return amt > 1 ? arr.slice(arr.length - amt) : arr[arr.length - 1] },

    compact: arr => { return arr.filter(value => !!value) },

    sortBy: (arr, fn = value => value) => {
      const newArr = [...arr];
      newArr.sort((firstE, secondE) => { return fn(firstE) - fn(secondE) });
      return newArr;
    },

    flatten: (val, surfaceLevel = false, newArray = []) => {
      if(!Array.isArray(val)) { return newArray.push(val) };
      if(surfaceLevel) { return val.flat() } else { for(const element of val) { fi.flatten(element, false, newArray) } }
      return newArray;
    },

    uniq: (array, whatever, fn = value => value ) => {
      const newArray = [];
      for(const value of array) { if(!newArray.find(conflict => fn(value) === fn(conflict) )) { newArray.push(value) } };
      return newArray;
    },


  }
})()

fi.libraryMethod()
