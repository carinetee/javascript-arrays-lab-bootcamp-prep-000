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

function removeLastKitten(name) {
  var byeLastKitten = kittens.slice(-1);
  return byeLastKitten;
}
