const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destrutivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}
