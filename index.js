var recipes = {
  Apple: 'Apples'
};

function updateObjectWithKeyAndValue (obj, key, i) {
  obj[key] = i;
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key] = value;
  return obj
}

function destructivelyDeleteFromObjectByKey (obj, key) {
  delete obj[key];
  return obj
}

function deleteFromObjectByKey (obj, key) {
  var newObj = Object.assign(obj);
  delete newObj.delete
  return newObj
  
}