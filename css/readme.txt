readme
SASS
https://tutorial.techaltum.com/html5.html
10 Mega Responsive Websites with HTML, CSS, and JavaScript



Sass setup 
1.  node –v. 
2. npm --version 
3. Create project folder  with project structure
￼
4. Witch to project folder - > npm init –y                  
5. npm i sass --save
6. Update package.json – Change test to sass
* "scripts": {
    * "sass": "sass src/styles/main.scss dist/styles/main.css"
* },
* Now automatic compilation will occur on change detection
* This way we can run> npm run sass 
* Otherwise give command: npx sass src/styles/main.scss dist/styles/main.css
4. Create index.html - Add link rel="stylesheet" href="styles/main.css" /> in <head> tag<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="styles/main.css" />
    <title>Sass Sandbox</title>
  </head>
  <body>
    <header>
      <h1>Sass Demo</h1>
    </header>
  </body>
</html>

5. Write main.scss for testing 
$color: blue ;
body{
    background :  $color;
}
6. > npm run sass
7. It will compile the scss into css and  it will run.

