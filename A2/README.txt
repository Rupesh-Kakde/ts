ASSIGNMENT 2 - ANGULAR (VS CODE PROJECT FORMAT)

This ZIP contains four separate Angular CLI projects. Each question has its own project folder and full project structure, including package.json, angular.json, src/main.ts, src/app/app.ts, src/app/app.html, and src/app/app.css. Application HTML and TypeScript code contains no comments.

PROJECTS
1. welcome-app
2. click-app
3. addition-app
4. login-app

RUN A PROJECT IN VS CODE
1. Extract this ZIP.
2. Open the extracted Assignment2_Angular_VSCode folder in VS Code.
3. Open Terminal > New Terminal.
4. Change directory to the project you want to run. Example:
   cd welcome-app
5. Install packages (first run only):
   npm install
6. Start the app:
   ng serve --port 4201
7. Open the URL shown in terminal, normally http://localhost:4201.
8. Stop the server with Ctrl+C.

RUN COMMANDS AND PORTS
Q1:
cd welcome-app
npm install
ng serve --port 4201
http://localhost:4201

Q2 (open a new terminal after stopping the previous app, or use another terminal):
cd click-app
npm install
ng serve --port 4202
http://localhost:4202

Q3:
cd addition-app
npm install
ng serve --port 4203
http://localhost:4203

Q4:
cd login-app
npm install
ng serve --port 4204
http://localhost:4204

LOGIN TEST
Username: admin
Password: admin123

IMPORTANT
These are modern Angular CLI projects, not AngularJS 1.x projects. They use the Angular syntax and structure you created in VS Code. The project files are included, but node_modules is not included; npm install downloads dependencies and requires internet access. If npm install shows an npm internal error, try using a supported Node.js LTS version and then run npm install again.
