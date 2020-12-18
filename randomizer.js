const fetch = require('node-fetch');

  exports.handler = function index(event, context, callback) {
    const quotes = [
      'What would be the most surprising scientific discovery imaginable?',
      'What did you eat for breakfast?',
      'What’s your favorite scent?',
      'Teleportation or flying?',
      'What fruit or vegetable would you most want to be?',
      'Would you rather be a superhero or the world’s best chef?',
      'Respond with your favorite emoji.',
      'What was your favorite game to play as a child?',
      'Favorite Disney hero or heroine?',
      'Who’s your favorite Disney villain?',
      'What’s your favorite mythical creature?',
      'What’s your favorite sandwich and why?',
      'What does your current view look like? Share a pic in the thread!',
      'What is your favorite item you’ve bought this year?',
      'What does your favorite shirt look like? Bonus points if you share a pic in the thread!',
      'What fictional family would you be a member of?',
      '☕ or 🍵?',
      'What is your favorite dessert?',
      'What is your go to meal to cook?',
      'You can have an unlimited supply of one thing for the rest of your life, what is it? Sushi? Scotch Tape?',
      'What’s your best scar story?',
      'If you could see one movie again for the first time, what would it be and why?',
      'What are your favorite pizza toppings? From pepperoni to olives, every ingredient is valid.',
      'Do you know any good jokes? Share!',
      'What book are you currently reading? Discuss your current book and maybe get some suggestions for your next great read.',
      'What is your Starbucks order?',
      'What is your favorite fast food restaurant?',
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    // This posts the message but returns null
    postData('WORKFLOW WEBHOOK URL GOES HERE', { "Content": quote })
      .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
      .catch(error => console.error(error));

    function postData(url = '', data = {}) {
      // Default options are marked with *
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => console.log(response)); // parses JSON response into native JavaScript objects
    }
  }
