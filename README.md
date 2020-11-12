 ![inContext Logo](/public/icons/inContext_large.png)
 ---
 
 ## Description
 inContext is a chrome extension that allows you to highlight any wepage, save that page for later viewing, and share the page with your Google Contacts. 

Backend respository: (https://github.com/Qwerter49/in-context-backend)
<br>[Demo Video](Add video link here)

## Built With
Frontend: Web Extension API's, Vue for popup <br>
Backend: Node, Express, Objection for replationships. 

## How to Set Up
inContext is undergoing the review process in the Chrome Web Store, until it is available, follow these steps.<br>
Clone down the repo to your local machine <br>
cd into the repository and run npm install <br>
run npm run build to build the dist directory <br>
In Google Chrome, type in chrome://extensions in your url and press enter <br>
On the top right, click the toggle that says Developer Mode <br>
Click on the button that says "load unpacked" <br>
Navigate to where you cloned down inContext <br>
Select the dist file <br>
inContext is now installed on your browser. 

## How to Use
Make sure you are signed into a gmail account <br>
Turn on Chrome Sync by pressing the icon on the top right of chrome and clicking "turn on sync" if it is off (this is required for contacts to appear) <br>
Now, on any website, press Ctrl+Alt+H (Command+Alt+H for mac) to open the Editor menu <br><br>
![Highlight and Save](https://media.giphy.com/media/XvENrZxERfG4ePYIgr/giphy.gif)<br><br>
Click on the Highlighter to highlight any text you'd like <br>
If you make a mistake, use the Eraser to get rid of it! <br>
Once everything important is highlighted click the save button to keep it on refresh <br>
If a friend needs the website, click on the inContext icon in the top right in your browser bar, go to contacts, and press "Send Context"<br><br>
![Send Context](https://media.giphy.com/media/671CVikg8GTjPylYLn/giphy.gif)


## Challenges

The first big challenge was finding a way to add a javascript framework to an extension popup while still being able to develop content scripts/background scripts. I started with create-react-app, realized that was way too big, and tried multiple ways of custom building a react app with Parcel. Eventually I found vue-cli-plugin-web-extension which did most of the heavy lifting for me, it just required learning Vue halfway through the project. I still had to customize the webpack configuration to get my CSS files to build properly.

The other challenge was making an extension that worked on most sites no matter what kind of element or elements the text was in. Firefox still has some issues, but it will be implemented soon!


## Known Bugs
 - Highlights in code snippits will not save on refresh
 - If contacts are not appearing, make sure Chrome Sync is enabled
 - If website alters dramatically, refresh page before saving
 - If anything stops working, press the refresh button on the chrome://extensions page
 - Please let me know of any other found bugs

## Future Implementation

- Primary and Secondary Highlighter. Primary sets title of the sent link
- Change color of highlighters
- Delete all edits on a webpage
- Delete all edits on your sync storage
- NoShare mode
- Firefox support
- Full chat support in popup
- See if a user has viewed your link
   

If you'd like to collaborate on this project, please email me: jay.oliver.technologies@gmail.com
