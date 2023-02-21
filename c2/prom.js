const fs = require('fs'); // vcituvanje na modul/paket so files za rab
// fs.writeFile(
//     'data.txt',  // file kade sto kje se zapise
//     'HELLO WORLD.... Node... :(', // sto se zapisuva u file
//     (err) => { // funkc koja kje se izzvrsi otkako kje zapise file-ot
//         if(err) return console.log(err);
//         console.log('zapisot e napraven');
//     }
// );

fs.writeFile('data.txt', 'HELLO WORLD.... Node... :(', (err) => {
    if (err) return console.log(err);
    console.log('zapisot e napraven');
});

//promise


// cekor 1
// const fileWrite = () => {

// };

// cekor 2
// const fileWrite = () => {
//     return new Promise();
// };

// cekor 3
// const fileWrite = () => {
//     return new Promise(() => {

//     });
// };

// cekor 4
// const fileWrite = () => {
//     return new Promise((success, fail) => {

//     });
// };

// cekor 5
// const fileWrite = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('data.txt', 'HELLO WORLD.... Node... :(', (err) => {
//             if (err) return console.log(err);
//             console.log('zapisote napraven');
//         });
//     });
// };

// cekor 6
// const fileWrite = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('data.txt', 'HELLO WORLD.... Node... :(', (err) => {
//             if (err) return fail(err);
//             return success();
//         });
//     });
// };

// cekor 7
const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if (err) return fail(err);
            return success();
        });
    });
};

fileWrite('data1.txt', 'nov file so zapis od promise!')
    .then(() => {
        console.log('zapisot e uspesen (vo noviot file)')
    })
    .catch(err => {
        console.log(err);
    });


    // (async () => {
//     try {
//         await fileWrite('data1.txt', 'Нов фајл со запис од promise!');
//         await fileWrite('data1.txt', 'Нов фајл со запис од promise!');
//         await fileWrite('data1.txt', 'Нов фајл со запис од promise!');
//     } catch(err) {
//         console.log(err);
//     }
// })();

const main = async () => {
    try {
        await fileWrite('data1.txt', 'Nov file so zapis od promise');
        await fileWrite('data1.txt', 'Nov file so zapis od promise');
        await fileWrite('data1.txt', 'Nov file so zapis od promise');
    } catch (err) {
        console.log(err);
    }
};

main();
