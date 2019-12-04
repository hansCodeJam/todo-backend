/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(element, callBack) {
  const newArray = []

  for(item of element) {
    newArray.push(callBack(item))
  }

  return newArray;


  
}

const filter = function(element, callBack) {
  const newArray = []

  for(item of element) {
    if(callBack(item)) {
      newArray.push(item)
    }
  }

  return newArray;
}

const twoPileSort = function(arr, test) {
  const sorted = [];

  arr.forEach(function(element){
    if(test(element)) {
      sorted.unshift(element)
    } else {
      sorted.push(element)
    }
  })

  return sorted;

}

/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(arr) {
  return arr.text;
}

const getCompleteness = function (arr) {
  return arr.complete;
}

const getPriority = function (arr) {
  return arr.priority;
}

const isComplete = function(arr) {
  return arr.complete;
}

const isHighPriority = function(arr) {
  return arr.priority === 2;
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todos) {
    const newArray = [];

    todos.forEach(todo => newArray.push(getTodoName(todo)))

    return newArray;

    // return map(getTodoName(todo))
}

const namesAndPriorities = function(todos) {
    const newArray = [];

    todos.forEach(todo => isHighPriority(todo) ? newArray.push(`${getTodoName(todo)} - High`) : newArray.push(`${getTodoName(todo)} - Low`))


    return newArray;

}

const justNotComplete = function(todos) {
    const newArray = []

    todos.forEach(todo => !isComplete(todo) ? newArray.push(todo) : '')

    return newArray;


    // return filter(getCompleteness(todos))
}

const justComplete = function(todos) {
  const newArray = []

  todos.forEach(todo => isComplete(todo) ? newArray.push(todo) : '')

  return newArray;
}

const priority2Only = function(todos) {
  const newArray = []

  todos.forEach(todo => isHighPriority(todo) ? newArray.push(todo) : '')

  return newArray;
}

const priority1Only = function(todos) {
  const newArray = []

  todos.forEach(todo => !isHighPriority(todo) ? newArray.push(todo) : '')

  return newArray;
}

const notCompleteFirst = function(todos) {
  const newArray = []

  todos.forEach(todo => !isComplete(todo) ? newArray.unshift(todo) : newArray.push(todo))

  return newArray;
}

const priority2First = function(todos) {
  const newArray = []

  todos.forEach(todo => isHighPriority(todo) ? newArray.unshift(todo) : newArray.push(todo))

  return newArray;
}



module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}