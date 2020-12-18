# slack-randomizer-workflow

The following documentation allows you to create a Slack Workflow Webhook that allows you to post randomized messages to a Slack channel at specific times and dates.

What you’ll need to get started:

A code text editor (Such as: Atom, Sublime Text or Brackets)
An AWS Account (Through Conduit, you will use Lambda and CloudWatch Events)
A terminal
Node.js must be installed on your computer.
Slack

Step 1: Create a Webhook Workflow in Slack. Name the variable Content and make sure the variable is added into the Slack message.

Step 2: Edit the function’s code.
If you don’t have a code text editor yet, you will need to download one. Try this https://www.sublimetext.com/

Create a folder to house your code’s file.
Copy the code below into a Code text editor.
Add your Slack's Workflow Webhook URL in place of WORKFLOW WEBHOOK URL GOES HERE.
Save your file as index.js to the folder you created. very important to name it index.js or it won’t work

Step 3: Install Node Fetch in your folder.

Using your Terminal open the folder that houses your index.js - or you may need to install this on your mac first https://www.npmjs.com/get-npm
Run the following command in the terminal: npm install node-fetch --save
Open your folder to ensure the node modules were installed properly, you should see a folder that says node_modules.
Select your index.js file, node_modules folder and package-lock.json file and zip them.

Step 4: Create a Lambda function.

Go to your AWS account and select the service Lambda.
Select the Create function button.
Keep the default Author from Scratch selection selected.
Name your function.
From the Runtime dropdown select Node.js 10.x.
Select the Create function button.
Scroll down to the code text area and delete the default index.js file that is in the folder.
From the Code entry type dropdown select Upload a .zip file and upload your zipped folder.
Select the Save button.

Step 5: Add a CloudWatch event to Lambda to have the bot fire off at specific times and dates.

Scroll to the top of your Lambda function’s page and select the button Add trigger to add a new CloudWatch trigger.
From the Select a trigger dropdown, select CloudWatch Events.
Using the Rule dropdown, select Create a new rule.
Enter your rule name in the Rule name* field.
Enter a Schedule Expression in the Schedule expression* field. Learn about using Schedule Expressions.
Select the Add button.
FAQ-
What are cron expressions
https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html

Your webhook is now ready! 🎊🤖
