const a = 1;
const b = 2;
const c = 3;

(function first(){
  const b = 5;
  const c = 6;
  (function second(){
    const b = 8;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    (function third(){
      const a = 7;
      const c = 9;
      (function fourth(){
        const a = 1;
        const c = 8;
      })()
    })()
  })()
})()