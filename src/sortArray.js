let a = [2, 1, 6, 8, 20, 40, 43, 57];
let b = [4, 7, 8, 23, 38, 41, 43, 53, 68, 73];

let c = [...a, ...b];

function sort(c){
    for (let i = 0; i < c.length - 1; i++) {
        for (let  j= 0; j< c.length - i; j++) {
            if (c[j] > c[j + 1]) {
                var swap = c[j];
                c[j] = c[j + 1];
                c[j + 1] = swap;
            }
        }
    }
    return c
}
console.log(sort(c));