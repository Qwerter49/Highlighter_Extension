 ![inContext Logo](/public/icons/inContext_large.png)
 ---
 
 ## Description
 inContext is a chrome extension that allows you to highlight any wepage, save that page for later viewing, and share the page with your Google Contacts. 

Backend respository: (https://github.com/Qwerter49/in-context-backend)
<br>[Demo Video](Add video link here)

## How to Set Up
1. inContext is undergoing the review process in the Chrome Web Store, until it is available, follow these steps.<br>
2. Clone down the repo to your local machine <br>
3. `cd` into the repository and run `npm install` <br>
4. run `npm run build` to build the dist directory <br>
5. In Google Chrome, type in chrome://extensions in your url and press enter <br>
6. On the top right, click the toggle that says Developer Mode <br>
7. Click on the button that says "load unpacked" <br>
8. Navigate to where you cloned down inContext <br>
9. Select the `dist` file <br>
10. inContext is now installed on your browser. 

## How to Use
1. Make sure you are signed into a gmail account <br>
2. Turn on Chrome Sync by pressing the icon on the top right of chrome and clicking "turn on sync" if it is off (this is required for contacts to appear) <br>
3. Now, on any website, press Ctrl+Alt+H (Command+Alt+H for mac) to open the Editor menu <br><br>
![Highlight and Save](https://media.giphy.com/media/XvENrZxERfG4ePYIgr/giphy.gif)<br><br>
4. Click on the Highlighter to highlight any text you'd like <br>
5. If you make a mistake, use the Eraser to get rid of it! <br>
6. Once everything important is highlighted click the save button to keep it on refresh <br>
7. If a friend needs the website, click on the inContext icon in the top right in your browser bar, go to contacts, and press "Send Context"<br><br>
![Send Context](https://media.giphy.com/media/671CVikg8GTjPylYLn/giphy.gif)

## Built With
Frontend: Web Extension API's, Vue for popup <br>
Backend: Node, Express, Objection for replationships. 

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
