const a = x => x+1;
const b = x => x+2;
const c = x => x*4;
const d = x => x-1;

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const useCompose = compose(
    a,b,c,d
);

console.log(useCompose(5));

