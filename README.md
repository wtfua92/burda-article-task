## Description:
Burda Style as a publishing company provides articles on a luxury sites.
From a given Symfony application render a site which displays the article in a responsive layout.
You have a given local dev environment with PHP 7 and NGINX based on Docker. The backend functionality is already provided.
There is also an optional container with Node, NPM & Sass for building the frontend.

---

### Frontend requirements:
* install docker if not already installed https://docs.docker.com/install/
* start the local environment with `docker-compose up -d` and install the dependencies with `docker-compose exec php_api composer install`
* the site is available under http://localhost:8080/bazaar-article_49926
    * optional: you can use the Node container for building `docker-compose run --rm node_sass npm -v; docker-compose run --rm node_sass node-sass /var/www/../source.scss /var/www/public/target.css`
* based on the provided description supported by screenshots in /data/img/mockups
    * create / update the TWIG templates in /templates for the layout
    * create the CSS assets using your own mixins without any library support (Bootstrap, Foundation, ...), e.g. SASS / LESS
    * create the JS assets for the sticky header, without using any existing framework

### Frontend advanced:
* use react-app/README.md for setting up and start REACT dev application
* build REACT application that will be available on http://localhost:8080/index.html
* render page from frontend requirements as REACT application
* use GET http://localhost:8080/api/bazaar-article_49926 for getting article data from API

---

#### General requirements:
* build a responsive site with
    * sticky header
    * assets

* description / readme on how to
    * setup the project
    * build the assets

##### Layout requirements:
* semantic elements
    * header
    * main
    * footer

* responsive breakpoints for
    * small devices
        * less than 660px
    * medium devices
        * less than 1000px
    * large devices

* container properties
    * small view
        * header
            * full width
            * sticky
        * main
            * full width
            * full height
        * footer
            * full width
    * medium view
        * header
            * full width
            * sticky
        * main
            * full width
            * full height
        * footer
            * full width
    * large view
        * header
            * full width
            * sticky
        * main
            * max-width: 1000px
            * full height
            * center
        * footer
            * full width

* container > child properties
    * small view
        * main > child
            * one column
                * 12 / 12
    * medium view
        * main > child
            * two columns
                * 6 / 12
    * large view
        * header > child
            * max-width: 1000px
            * center
        * main > child
            * two columns
                * 8 / 12
                * 4 / 12
        * footer > child
            * max-width: 1000px
            * center
            
##### Functionality:
* sticky header
    * on page scroll down
        * will disappear with transition
    * on page scroll up
        * will appear with transition
    * on page scroll end
        * will appear with transition

---

###### Nice to have:
* HTML
    * Semantic outline
* CSS
    * Preprocessor
        * Sass
    * Naming convention
        * BEM
    * Prefixed
        * latest 2 major browser versions
* JS
    * ES5 and ES6
* Assets
    * Development
    * Production

Columns are filled with content by the provided data :)
