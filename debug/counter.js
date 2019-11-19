export function from0to(n, inc) {
  console.log(`Counting from 0 to ${n} by ${inc}:`);
  for (let i = 0; i < n; i += inc) {
    console.log(i);
  }
}
export function asyncFrom0to(n, inc) {
  setImmediate(() => {
    console.log(`Counting from 0 to ${n} by ${inc}:`);
    for (let i = 0; i < n; i += inc) {
      console.log(i);
    }
  });
}
