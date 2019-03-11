# MealPlanner

A meal planning app (in progress) that will allow you to upload meals and create weekly meal lists based upon those existing meals.

Currently lives [here](http://www.thebrianpye.com/MealPlanner/).

## The idea behind this app

The original intent was for this to be a meal planner for me and my wife - automate the weekly dinner list. What at first seemed like a fitting way to practive and improve my javascript skills and solve a real-world problem has revealed itself to be a much larger under-taking than when initially conceived (I guess an unavoidable issue when you're doing something that requires quite a bit of steps that you've never done before).

What the end-all goal is for this app is to give the user a list of meals (presumably for dinner) based off of the meals the user has. But what I didn't see was the wormhole of options this would require not to mention the unrealized idea of needing to save user profiles in order to save their lists. Oh boy oh boy.

In general the app _needs_ to do these things (and maybe more):
- Create a basic profile that keeps a record of all of the user's meals
- Allow users to create new meals, edit and remove existing meals
- Have an option to pass a recipe (I think these would be displayed as cards when clicking on the meal name)
- Add tags/labels to provide methods of organization and sorting
- Return a list that creates a menu based off of existing user meals. This would carry a ton of options:
    + list could be daily/weekly/monthly
    + list can be put together manually w/ the aid of sorting/tags and checkboxes
    + generate random list that can be edited
- A UI...

I'm sure there's more.

#### Local CLI commands:
- `npm run build`: compiles and builds index.js into dist/main.js
- `npm run watch`: watches for index.js changes and auto reloads main.js
- `npm run scss`: compile sass to css
- `npm run server`: launch local webpack server
