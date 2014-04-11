## what is this repo?
it contains code example for using MongoDB + Express + NodeJS

### installation
1. clone this repo
2. on Terminal, go inside the folder and type "npm install"

### notes
* this is developed using a Mac + Sublime Text 2 + iTerm
* make sure you install mongodb via "brew install mongo"


### running the app
1. open Terminal, go to app folder
2. type "npm start"
3. open another Terminal window, go to app folder, type "mongod --dbpath data/" to start the mongo server using the "data" folder
4. open browser, go to "http://localhost:3003/"

### app urls
1. http://localhost:3003/users » user list
1. http://localhost:3003/users/new » add new user to list

some code are from tutorial on http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/ but some changes needed because of the Express updates