const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var addKittenToEnd = [...kittens, name];
  return addKittenToEnd;
}

function prependKitten(name) {
  var addKittenToBeginning = [name, ...kittens];
  return addKittenToBeginning;
}

function removeLastKitten() {
  return kittens.slice(-1);
}

function removeFirstKitten() {
  var byeFirstKitten = kittens.slice(1);
}
