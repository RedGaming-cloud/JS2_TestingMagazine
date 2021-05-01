'use strict'

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status !== 200) {
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

let getRequest = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve;
            }
        } else {
            reject('Error1');
        }
    })
};

getRequest()
    .then(console.log('true2'))
    .catch(console.log('error2'));

