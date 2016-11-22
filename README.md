# meteor-python
Call Python script from Meteor endpoint

# Demo

<img src="https://github.com/ArthurGerbelot/meteor-python/blob/master/preview/pyt.png?raw=true" />

**Click on first button**

<img src="https://github.com/ArthurGerbelot/meteor-python/blob/master/preview/pyt1.png?raw=true" />

**Click on last button**

<img src="https://github.com/ArthurGerbelot/meteor-python/blob/master/preview/pyt3.png?raw=true" />

# Push on Heroku

 - Install [Meteor](https://www.meteor.com/install)
 - Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
 - Clone repo 
    - `git clone git@github.com:ArthurGerbelot/meteor-python.git`
    - `cd meteor-python`
 - Login with heroku and create app
    - `heroku login`
    - `heroku apps:create appname`
 - Use buildpack for Meteor on Heroku 
    - **Best choice** `heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git`
    - **Meteor v1.4 +** `heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git`
 - Setup ROOT_URL `heroku config:set ROOT_URL="https://<appname>.herokuapp.com"`
 - Push `git push heroku master`
 
 **Usefull**
 - Logs `heroku logs`
 - Version `heroku version`
 - Set Configs `heroku config:set VAR="value"`
 - List config `heroku config`
 - List buildpacks `heroku buildpacks`
    
