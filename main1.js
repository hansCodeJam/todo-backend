Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@hansCodeJam 
Code Pull requests 0 Projects 0 Wiki Security Pulse
todo-backend/main.js
@phenix1229 phenix1229 done
09ae271 3 hours ago
@phenix1229@abbreviatedman
133 lines (104 sloc)  2.97 KB
  
/********************
 * OPTIONAL HELPERS *
 ********************/

/*
These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.
They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!
*/

const map = function(arr, func) {
  const newArr = [];
  arr.forEach(item => newArr.push(func(item)));
  return newArr;
}

const filter = function(arr, func) {
  const newArr =[];
  arr.forEach(item => func(item) === true ? newArr.push(item) : '');
  return newArr;
}

const twoPileSort = function(arr, func) {
  const newArr = [];
  arr.forEach(item => func(item) === true ? newArr.unshift(item) : newArr.push(item));
  return newArr;
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text;
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete;
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todo) {
  newArr = [];
  todo.forEach(item => newArr.push(item.text));
  return newArr;
}

const namesAndPriorities = function(todo) {
  const newArr = [];
  todo.forEach(item => 
    isHighPriority(item) ? newArr.push(`${getTodoName(item)} - High`) : newArr.push(`${getTodoName(item)} - Low`));
  return newArr;
}

const justNotComplete = function(todo) {
  const newArr = [];
  todo.forEach(item => !isComplete(item) ? newArr.push(item) : '')
  return newArr
}

const justComplete = function(todo) {
  const newArr = [];
  todo.forEach(item => isComplete(item) ? newArr.push(item) : '')
  return newArr
}

const priority2Only = function(todo) {
  const newArr = [];
  todo.forEach(item => isHighPriority(item) ? newArr.push(item) : '')
  return newArr
}

const priority1Only = function(todo) {
  const newArr = [];
  todo.forEach(item => !isHighPriority(item) ? newArr.push(item) : '')
  return newArr
}

const notCompleteFirst = function(todo) {
  const newArr = [];
  todo.forEach(item => !isComplete(item) ? newArr.unshift(item) : newArr.push(item));
  return newArr;
}

const priority2First = function(todo) {
  const newArr = [];
  todo.forEach(item => isHighPriority(item) ? newArr.unshift(item) : newArr.push(item));
  return newArr;
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
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
