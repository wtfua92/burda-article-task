## How to test:

1) in root folder run `docker-compose up -d`;
2) if haven't yet, run `docker-compose exec php_api composer install`;
3) go to `react-app` folder;
4) run `docker-compose run --rm npm yarn install` (just once);
5) run `docker-compose run --rm -p3000:3000 npm yarn start`;
6) open your browser and go to `localhost:3000`;

---

### Frontend requirements:
* install docker if not already installed https://docs.docker.com/install/ :heavy_check_mark:
* start the local environment with `docker-compose up -d` and install the dependencies with `docker-compose exec php_api composer install`
* the site is available under http://localhost:8080/bazaar-article_49926
    * optional: you can use the Node container for building `docker-compose run --rm node_sass npm -v; docker-compose run --rm node_sass node-sass /var/www/../source.scss /var/www/public/target.css`
* based on the provided description supported by screenshots in /data/img/mockups
    * create / update the TWIG templates in /templates for the layout
    * create the CSS assets using your own mixins without any library support (Bootstrap, Foundation, ...), e.g. SASS / LESS
    * create the JS assets for the sticky header, without using any existing framework 

### Frontend advanced:
* use react-app/README.md for setting up and start REACT dev application :heavy_check_mark:
* build REACT application that will be available on http://localhost:8080/index.html 
* render page from frontend requirements as REACT application :heavy_check_mark:
* use GET http://localhost:8080/api/bazaar-article_49926 for getting article data from API :heavy_check_mark:

---

#### General requirements:
* build a responsive site with :heavy_check_mark:
    * sticky header
    * assets

* description / readme on how to
    * setup the project :heavy_check_mark:
    * build the assets

##### Layout requirements:
* semantic elements :heavy_check_mark:
    * header
    * main
    * footer

* responsive breakpoints for :heavy_check_mark:
    * small devices
        * less than 660px
    * medium devices
        * less than 1000px
    * large devices

* container properties :heavy_check_mark:
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

* container > child properties :heavy_check_mark:
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
        * will disappear with transition :heavy_check_mark:
    * on page scroll up
        * will appear with transition :heavy_check_mark:
    * on page scroll end
        * will appear with transition :heavy_check_mark:

---

###### Nice to have:
* HTML
    * Semantic outline :heavy_check_mark:
* CSS
    * Preprocessor
        * Sass :heavy_check_mark:
    * Naming convention
        * BEM :heavy_check_mark:
    * Prefixed
        * latest 2 major browser versions :heavy_check_mark:
* JS
    * ES5 and ES6 :heavy_check_mark:
* Assets
    * Development
    * Production

Columns are filled with content by the provided data :)
