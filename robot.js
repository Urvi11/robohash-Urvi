var fs = require('fs')
const superagent = require('superagent')

// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));

//callback
superagent
   .get(`https://robohash.org/generateString(5)`)
     .then((res) => {
       console.log('robot image is ', res.request.url)
       fs.writeFile('./robotImage.txt', res.request.url, () => {
         console.log('sucessfully written the file')
       })
     })