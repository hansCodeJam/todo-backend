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
  const array = []

  for(item of element) {
    array.push(callBack(item))
  }

  return array;
}

const filter = function(element, callBack) {
  const array = []

  for(item of element) {
    if(callBack(item)) {
      array.push(item)
    }
  }

  return array;
}

const twoPileSort = function() {
  
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(name) {
  return name.text;
}

const getCompleteness = function () {
  return name.complete;
}

const getPriority = function () {
  return name.priority;
}

const isComplete = function() {
  
}

const isHighPriority = function() {
  
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function() {

}

const namesAndPriorities = function() {
  
}

const justNotComplete = function() {
  
}

const justComplete = function() {
  
}

const priority2Only = function() {
  
}

const priority1Only = function() {
  
}

const notCompleteFirst = function() {
  
}

const priority2First = function() {
  
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