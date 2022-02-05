# project-auth
This week we're going to introduce an important part of almost every API - how to authenticate users and handle passwords. 
It is an ultimate project where I had to tie all the skills I've learnt so far to build an API with authentication to implement a registration flow, 
and a frontend with forms to register, sign in, and view some content once the user is logged in. 


# How I approached a problem

The project needed two parts; a backend API, and a React frontend. We created a `User` model using mongoose, with properties for your registered user, and to store a user's access token.
Then, on the frontend side of things, we built up a registration form that POSTs to the API. We had to store the access token we get back in the browser using local storage, and then use that token when making other requests to the API.
Once a user is logged in,  they will need to have one last endpoint which returns some content which only logged-in users should be able to access. The user can choose what they want this endpoint to return, and if they want to make multiple endpoints, that's fine too. 
It could return hard-coded data or something from the database. Whatever you choose, it should be displayed in the frontend after the user has logged in.

# View it Live!
https://autentification-mary-ru.netlify.app/login
https://mary-snopok-auth-project.herokuapp.com/
