## Tailwind Version
```
1.0.1
```

## Theme Concept

This theme uses [Tailwind CSS framework](https://tailwindcss.com/) so it needs to compile CSS styles first. [Laravel mix](https://laravel.com/docs/5.8/mix) is used for Tailwind styles building.

Your source files are stored within `assets/src` directory. 
Built files are stored within `assets/build` directory.

OctoberCMS then references to `assets/build/css/app.css` style file and  `assets/build/js/app.js` script file.

## How to use this theme

1. Change your active directory to theme directory
```
$ cd ./themes/tailwind-css-starter-theme
```

2. Install dependencies
```
$ npm install
```

3. Start developing
```
$ npm run watch
```

4. For production build use this command (instead of `watch`)
```
$ npm run prod
```

Commands from 3. and 4. steps will build your source files from `assets/src` directory into  `assets/build` directory.

## Tailwind Configuration

Tailwind configuration file is present in `./tailwind.config.js`. You can refresh this configuration file using these commands sequention:

1. Firstly, delete old config file:
```
$ rm ./tailwind.config.js
```

2. Generate a new config file now.

 - For minimal configuration file use  this command:
```
$ npx tailwind init
```

 - For full configuration file use  this command:
```
$ npx tailwind init --full
```
