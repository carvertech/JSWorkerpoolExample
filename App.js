const workerpool = require('workerpool');
const pool = workerpool.pool();

function output(name, val) {
    for (i = 0; i < val; i++) {
        setTimeout(() => console.log(name), i*1000)
    }
    return 0;
}

pool.exec(output, ['P1', 12])
pool.exec(output, ['P2', 12])