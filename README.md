# Slack Workflow Webhook message randomizer with Lambda and CloudWatch

 

The following documentation allows you to create a Slack Workflow Webhook that allows you to post randomized messages to a Slack channel at specific times and dates.

 

**What you’ll need to get started:**

 

1. A code text editor (Such as: Atom, Sublime Text or Brackets)

2. An AWS Account (Through Conduit, you will use Lambda and CloudWatch Events)

3. A [terminal](https://www.computerhope.com/jargon/t/terminal.htm)

4. Node.js must be installed on your computer.

5. Slack

 

**Step 1:** Create a Webhook Workflow in Slack. Name the variable **Content** and make sure the variable is added into the Slack message.

 

**Step 2:** Edit the function’s code.

If you don’t have a code text editor yet, you will need to download one. Try this https://www.sublimetext.com/

 

* Create a folder to house your code’s file.

* Copy the code below into a Code text editor.

* Add your Slack's Workflow Webhook URL in place of **WORKFLOW WEBHOOK URL GOES HERE.**

* Save your file as **index.js** to the folder you created. very important to name it index.js or it wont work

 

```

 

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

```

 

**Step 3:** Install Node Fetch in your folder.

 

1. Using your Terminal open the folder that houses your index.js  - or you may need to install this on your mac first https://www.npmjs.com/get-npm

2. Run the following command in the terminal: `npm install node-fetch --save`

3. Open your folder to ensure the node modules were installed properly, you should see a folder that says node_modules.

4. Select your **index.js file**, **node_modules folder** and **package-lock.json file** and zip them.

 

 

**Step 4:** Create a Lambda function.

 

1. Go to your AWS account and select the service **Lambda**.

2. Select the **Create function** button.

3. Keep the default **Author from Scratch** selection selected.

4. Name your function.

5. From the **Runtime** dropdown select **Node.js 10.x**.

6. Select the **Create function** button.

7. Scroll down to the code text area and delete the default **index.js** file that is in the folder.

8. From the **Code entry type** dropdown select **Upload a .zip file** and upload your zipped folder.

9. Select the **Save** button.

 

 

**Step 5:** Add a CloudWatch event to Lambda to have the bot fire off at specific times and dates.

 

1. Scroll to the top of your Lambda function’s page and select the button **Add trigger** to add a new CloudWatch trigger.

2. From the **Select a trigger** dropdown, select **CloudWatch Events**.

3. Using the Rule dropdown, select **Create a new rule.**

4. Enter your rule name in the **Rule name*** field.

5. Enter a Schedule Expression in the Schedule expression* field. Learn about using [Schedule Expressions](https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html).

6. Select the **Add** button.


FAQ-

What are cron expressions

https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html 

> **Your webhook is now ready! 🎊🤖**
