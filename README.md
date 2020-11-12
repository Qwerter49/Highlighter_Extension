# inContext
 

Backend respository: Change this
<br>[Demo Video](Add video link here)

## Built With
Frontend: Web Extension API's, Vue for popup <br>
Backend: Node, Express, PostgreSQL

## How to Use
inContext is undergoing the review process in the Chrome Web Store, until it is available, follow these steps.<br>
Clone down the repo to your local machine <br>
cd into the repository and run npm install <br>
run npm run build to build the dist directory <br>
In Google Chrome, type in chrome://extensions in your url and press enter <br>
On the top right, click the toggle that says Developer Mode <br>
Click on the button that says "load unpacked" <br>
Navigate to where you cloned down inContext <br>
Select the dist file <br>
inContext is now installed on your browser. Make sure you are signed into a gmail account <br>
Turn on Chrome Sync by pressing the icon on the top right of chrome and clicking "turn on sync" if it is off (this is required for contacts to appear) <br>
Now, on any website, press Ctrl+Alt+H (Command+Alt+H for mac) to open the Editor menu <br>
Click on the Highlighter to highlight any text you'd like <br>
If you make a mistake, use the Eraser to get rid of it! <br>
Once everything important is highlighted click the save button to keep it on refresh <br>
If a friend needs the website, click on the inContext icon in the top right in your browser bar, go to contacts, and press "Send Context"


## App Features

### Start a Party

On login/signup, users are directed to the 'Start a Party' by:
1. Inputting a title
2. Adding other users via a filter that displays data based on a match input of name, phone number, or email
3. Inputting a location

When these steps are completed, the party is marked as active, and others users will be able to view their party on login.

![start-a-party](https://res.cloudinary.com/kristine-and-samuel/image/upload/v1590701050/PICKYeats/party.gif)

### Like/Dislike and View Restaurant Details

When a user is in an active party, they are directed to a restaurant card based on the location paramaters. A restaurant card displays an image and some information on load with like and dislike buttons for the user to make a decision. There is also an option to View More with additional images and information like reviews. 

![restaurants](https://res.cloudinary.com/kristine-and-samuel/image/upload/v1590701185/PICKYeats/restaurants.gif)

### Matching a Place & My Party screen

When a user likes a place that another user in the party has previously liked, a match notification will display for the user. The user can then view their party matches on the 'My Party' screen. An badge indicator will also display on the party icon in the upper-left with the number of matched places.

![Highlight and Save](https://media.giphy.com/media/XvENrZxERfG4ePYIgr/giphy.gif)

## Challenges

Implementing Redux for the first time, there was a learning curve associated with understanding when and how to use reducers and the dispatch method. I found that using hooks with Redux really simplified this process. With this app needing to hold a lot of different pieces of data, Redux ended up being very useful and easier to debug with React Native Debugger in order to see state in one place.

On that note, the data modeling and logic to retrieve data for users added to a party and match restaurants for users in the party made the app pretty complex. The more features I added, the more I realized that I needed to create more APIs and routes for the data I needed to store and retrieve. With needed to check for a matched restaurant on every interaction, it was also difficult matching up the frontend state to data being saved. I needed to refactor a few times in order to get this to work properly.

## Future Implementation

- Build and test for iOS
- Add swipe animations
- Add profile page and features
- Implement additional match logic for parties with 2+ users

## Collaboration

1. Fork and/or clone this repo & the backend repo - https://github.com/kadrianne/pickyeats-backend
2. Create PostgreSQL database `createdb pickyeats`
3. Migrate database tables in backend: `python3 manage.py migrate`
4. Run backend server: `python3 manage.py runserver`
5. Install dependencies on frontend: `npm install`
6. Run frontend server: `npx react-native run-android`
7. Checkout new branch
   
I have a GitHub project board with a few backlog items here: https://github.com/kadrianne/pickyeats/projects/1<br>
If you'd like to collaborate on this project, please email me: kristine.a.du@gmail.com
