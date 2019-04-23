# MealPlanner

A meal planning app (in progress) that will allow you to upload meals and create weekly meal lists based upon those existing meals.

Currently lives [here](http://www.thebrianpye.com/MealPlanner/).

## The idea behind this app

I just want something that will generate a menu based on the meals we have in our cooking arsenal. I've had a ton of ideas on how to extend it but it will require help as it's going to need a database, a login, etc.

In general the app _needs_ to do these things (and maybe more):
- Return a list that creates a menu based off of existing user meals. This would carry some options:
    + list could be daily/weekly/monthly
    + list can be put together manually w/ the aid of sorting/tags and checkboxes
    + generate random list that can be edited with items being removed/replaced
- A decent looking UI

I'm sure there's more.

#### Local CLI commands:
- `npm run build`: compiles and builds index.js into dist/main.js
- `npm run watch-js`: watches for index.js changes and auto reloads main.js
- `npm run styles`: compile sass to css
- `npm run start-server`: launch local webpack server
