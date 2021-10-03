var fs = require('fs')
const superagent = require('superagent')

// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let output = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        output += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return output;
}

//console.log(generateString(5));

//callback
superagent
 /*  .get(`https://robohash.org/${generateString(5)}`)
     .then((res) => {
       console.log('robot image is ', res.request.url)
       fs.writeFile('./robotImage.txt', res.request.url, () => {
         console.log('sucessfully written the file')
       })
     })

*/

// promise
function writeFilePromise(fileLocation, result) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileLocation, result, (err) => {
        if (err) {
          reject('not able to write to the file')
        }
        resolve()
      })
    })
}
  
 /*
    return superagent.get(`https://robohash.org/${generateString(5)}`)
  
   .then((res) => {
     console.log('robot image is ', res.request.url)
     return writeFilePromise('./robotImage.txt', res.request.url)
   })
   .then(() => {
     console.log('sucessfully written the file')
   })
   .catch((err) => {
     console.log(err)
   })
*/

// aync await

async function getRobotPic() {
    try {
      
      const res1 =  superagent.get(
        `https://robohash.org/${generateString(5)}`
      )
      const res2 =  superagent.get(
        `https://robohash.org/${generateString(5)}`
      )
      const res3 =  superagent.get(
        `https://robohash.org/${generateString(5)}`
      )
      const all = await Promise.all([res1, res2, res3]);
      const images = all.map((el) => el.request.url);
      console.log(images);


      //console.log('robot image is ', res.request.url)
      await writeFilePromise('./robotImage.txt', images.join("\n"));
      console.log('sucessfully written the file')
    } catch (err) {
      throw err
    }
    
  }
  
  (async () => {
    try {
      await getRobotPic()
      console.log('end')
    } catch (err) {
      console.log('end due to error')
    }
  })()