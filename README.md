# Angular2-BaseProject

## Description

This is a little repository that bring you a development environment to create a project with Angular 2 and SASS (optional). It works with gulp and lite-server.

## Architecture

|-- dist			// Folder that contains the build of the app (will be generated | same structure as "./src")  
|-- node_modules	// Folder that contains all the modules (will be generated)  
|-- src				// Folder that contains all the sources (development environment)  
|&nbsp;&nbsp;&nbsp;|-- app  
|&nbsp;&nbsp;&nbsp;|-- assets  
|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|-- fonts  
|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|-- images  
|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|-- styles  
|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|-- vendors  
|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--libs  
|&nbsp;&nbsp;&nbsp;|--index.html  
|-- bs-config		// Config for lite-server  
|-- gulpfile.js 	// Gulpfile which contains tasks  
|-- package.json 	// Config for npm dependencies, etc...  
|-- readme.md 		// Me :)  
|-- tsconfig.json 	// Config for the compiler  
|-- tslint.json 	// Config for tslint module (the format of ".ts" files)  

------------------

## 1 - Software needed

Before anything, you need to download and install [NodeJS](https://nodejs.org/en/) with is npm package.

## 2 - Modules npm

You will also need some modules from npm. Here is a list with their command to install them :

* Gulp :
> npm install -g gulp

* Gulp-cli :
> npm install -g gulp-cli

## 3 - Dependencies

So now, you have to install all modules present in the file "package.json" by simply write this command line from the root folder :
> npm install

## 4 - Start your project

And finally, you can launch the lite-server and watcher to start coding :
> npm run start
*if nothing appears on the web browser, just refresh your page*

## 5 - Tips

To clean your project :
> npm run clean

To build your project without starting the lite-server and watchers :
> npm run build

------------------

## Special thanks

A big thanks to [@kolorobot](https://github.com/kolorobot) for his great [repo](https://github.com/kolorobot/angular2-typescript-gulp) that helped me a lot to understand all of this.

## License

None, take it and make whatever you want. :)