alert("WELCOME!");

function sumM(f, m) {
    let sum = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < f.length; j++) {
            if (m[i] % f[j] == 0) {
                sum += m[i];
                break;
            }
        }
    }

    return sum;
}

let f = [2, 3];
let m = [2, 3, 4, 5, 6, 7, 8];

console.log("Sum of multiples:", sumM(f, m));