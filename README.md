# RxTx

This is a seed web application built on top of node.js and angular.js. These are the salient features:  

------  

**[Sails.js](http://sailsjs.org)**  
Used as a server-side MVC framework and manages manages http routing, access control, and an ORM for persistent data management.  

**[Grunt](http://gruntjs.com/)**  
Build System  

**[Passport](http://passportjs.org/)**  
Authentication  

**[Angular.js](http://angular.org)**  
Client side MVC  

**[ngbp](http://joshdmiller.github.io/ng-boilerplate/#/home)**  
Client code follows the ng-boilerplate directory structure

------

Steps to run locally
-----

**1.** Clone the repo and change into directory:  
```
git clone https://github.com/bridge-athletic/RxTx.git
cd RxTx
```  
**2.** Install global dependencies:  
```
// Sails.js
npm install -g sails

// SASS
sudo gem install sass
```
**3.** Install Node packages:  
```
npm install
```  
**4.** Install resources managed by Bower:  
```
bower install
```
**5.** Lift the server:  
```
sails lift
```
**6.** Visit **[http://localhost:1337](http://localhost:1337)** in your browser

