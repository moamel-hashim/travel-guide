# Travel Guide

Travel Guide is a web application for luxury people who want to find a nice and comfortable hotel on the go.

I wanted to build this app to give people an easier way to find their favorite hotel without going through multiple pages
wondering and looking through comments and seeing bad reviews. Instead, I created a functionality where the app filters out
all the low-rating hotels for a user thus giving the users only the high-rated hotels so that the user can enjoy the
luxury experience.

## Check out my website at:
https://travel-guide.moamelhashim.com/#

## Technologies

- Yelp API
- React.js
- Node.js
- Express.js
- Babel
- Webpack
- BootStrap
- CSS
- PostgreSQL
- JavaScript
- HTML5

## Features

- User is able to search a city and see all the hotels search results using the Yelp API
- User is able to add a hotel to their My Hotel page
- User can view all their added hotels
- User is able to update their added hotels
- User can delete a hotel

## Preview
![preview](https://user-images.githubusercontent.com/90476994/179867765-3851feb1-f94f-429c-b717-ea090115e7de.gif)

## Stretched features I would like to add

- Add a detail page. when a user clicks on a hotel it would show that hotel on a separate page with more details about the hotel
- Add google maps so that when a user clicks to view the hotel they can also get directions to the hotel
- Add a comment section so that users can view hotel comments and ratings
- Add a sign-in feature so that users can sign in to their own account

## Development

### System Requirements

-npm 6 or higher


### Getting started

1. clone the repository

``` shell
git clone git@github.com:moamel-hashim/travel-guide.git

cd travel-guide
```
2. Install all dependencies with npm

```shell
npm install or npm i
```
3. Create your own Yelp API token then paste it into the API_KEY visit the link below:

- https://www.yelp.com/developers/documentation/v3/authentication

4. make sure to start the database

```shell
sudo service postgresql start
```

5. double check if all the dependencies are downloaded if not do the following:

```shell
npm i react react-dom webpack-cli babel-loader @babel/core @babel/plugin-transform-react-jsx lottie-react
```
6. to start the dev experience run the following

```shell
npm run dev
```
7. finally you can check the database by running the following command

```shell
pgweb --db=travel-Guide
```
