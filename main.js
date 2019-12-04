/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/
 
const map = (element, callBack) => {
  const newArray = []

  for(item of element) {
    newArray.push(callBack(item))
  } 
  
  return newArray;


  
}

const filter = (element, callBack) => {
  const newArray = []

  for(item of element) {
    if(callBack(item)) {
      newArray.push(item)
    }
  } 
  
  return newArray;
}

const twoPileSort = (arr, test) => {
  const sorted = [];

  arr.forEach((element) => {
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

const getTodoName = arr => arr.text;


const getCompleteness = arr => arr.complete;


const getPriority = arr => arr.priority;


const isComplete = arr => arr.complete;


const isHighPriority = arr => arr.priority === 2;




/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = todos => {
    const newArray = [];

    todos.forEach(todo => newArray.push(getTodoName(todo)))
    
    return newArray;

}

const namesAndPriorities = todos => {
    const newArray = [];
    
    todos.forEach(todo => todo.priority === 2 ? newArray.push(`${getTodoName(todo)} - High`) : newArray.push(`${getTodoName(todo)} - Low`))
    
    return newArray;
  
}

const justNotComplete = todos => {
    const newArray = []

    todos.forEach(todo => !todo.complete ? newArray.push(todo) : '')
    
    return newArray;
}

const justComplete = todos => {
  const newArray = []

  todos.forEach(todo => todo.complete ? newArray.push(todo) : '') 
  
  return newArray;
}

const priority2Only = todos => {
  const newArray = []

  todos.forEach(todo => todo.priority === 2 ? newArray.push(todo) : '') 
  
  return newArray;
}

const priority1Only = todos => {
  const newArray = []

  todos.forEach(todo => todo.priority === 1 ? newArray.push(todo) : '') 
  
  return newArray;
}

const notCompleteFirst = todos => {
  const newArray = []

  todos.forEach(todo => !todo.complete ? newArray.unshift(todo) : newArray.push(todo)) 
  
  return newArray;
}

const priority2First = todos => {
  const newArray = []

  todos.forEach(todo => todo.priority === 2 ? newArray.unshift(todo) : newArray.push(todo)) 
  
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