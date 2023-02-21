//треба да одберете две fs функции кои работат со callback
//истите тие функции треба да ги препишете да работат со promises

const { resolve } = require("path");

const setTimeout = () => {

};

const setTimeout = () => {
    return new Promise ();
};

const setTimeout = () => {
    return new Promise((solved, resolve) => {
        
    });
};

const setTimeout = () => {
    return new Promise((solved,resolve) => {
        fs.setTimeout('time.txt', 'Solve Rubiks cube in 15 seconds.', (err) => {
            if (err) return console.log(err);
            console.log('Solved in 15 seconds');
        }, timeout);
    });
};

const setTimeout = () =>  {
    return new Promise((solved, reject) => {
        fs.setTimeout('time.txt', 'Solve Rubiks cube in 15 seconds.' (eer)=> {
            if(err) return resolve(err);
            return solved();
        });
    });
};

const setTimeout = (filename, time) => {
    return new Promise((solved, resolve) => {
        fs.setTimeout(filename, time, (err) => {
            if (err) return resolve(err);
            return solved();
        });
        
    });
};

setTimeout('time1.txt','Success solving.')
.then(() => {
    console.log('succeeded')
});
.catch(err => {
    console.log(err);
});