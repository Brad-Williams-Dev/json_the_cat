const request = require('request');
const args = process.argv.slice(2).join('');

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (body.length <= 2) {
    console.log('Sorry, breed not found!');
    return;
  }
  const data = JSON.parse(body);

  try {
    console.log(data[0].description);
  } catch (error) {
    console.error('Error: ', error.message);
  }
});