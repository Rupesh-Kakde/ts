ASSIGNMENT 3 - ANGULAR (VS CODE PROJECT FORMAT)

This ZIP contains three separate Angular CLI projects:
1. student-details-app - display 10 students in a table
2. notepad-app - add, edit, update, delete notes and display current date/time
3. pune-students-app - extra practice: display only students from Pune

Every project has the full Angular CLI structure: angular.json, package.json, src/main.ts, src/app/app.ts, src/app/app.html, src/app/app.css and supporting configuration. Application code contains no comments.

RUN IN VS CODE
1. Extract the ZIP file.
2. Open the extracted Assignment3_Angular_VSCode folder in VS Code.
3. Choose Terminal > New Terminal.
4. Change to the project folder and install packages on first run.
5. Run ng serve with the port shown below.
6. Open the corresponding localhost URL in a browser.
7. Stop the server with Ctrl+C.

Q1:
cd student-details-app
npm install
ng serve --port 4301
http://localhost:4301

Q2:
cd notepad-app
npm install
ng serve --port 4302
http://localhost:4302

Q3 EXTRA PRACTICE:
cd pune-students-app
npm install
ng serve --port 4303
http://localhost:4303

Run one project at a time in the same terminal, or use a separate terminal for each project. node_modules is not included in this ZIP, so npm install is required once per project and needs internet access.

These are modern Angular CLI projects like the Assignment 2 VS Code ZIP, not AngularJS 1.x single-file HTML programs.
