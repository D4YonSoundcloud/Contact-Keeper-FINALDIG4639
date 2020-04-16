# __Contact Keeper Final__
## *DIG4639*
### __[LIVE PROJECT](https://fast-sea-88078.herokuapp.com/login)__

(free hosting so it might take a while to load)

### __[APP AND CODE WALKTHROUGH VIDEO W/ DEV COMMENTARY](https://www.youtube.com/watch?v=874luw7ZoAw)__

---

### __STACK USED__

* FRONT-END
  * React
* BACK-END
  * EXPRESS
  * NODE JS
* DATABASE
  * MongoDB Atlas
___

## __DEPENDECIES__
```bash
    npm i -y
```
### *DEV-DEPENDECIES*
* CONCURRENTLY
* NODEMON

```bash
    npm i --save-dev concurrently nodemon
```

* __BACK-END__
  * EXPRESS
  * EXPRESS-VALIDATOR
  * CONFIG
  * JSONWEBTOKEN
  * MONGOOSE
  * BCRYPTJS

```bash
    npm i express express-validator config jsonwebtoken mongoose bcryptjs
```
  


* __FRONT-END__
  * REACT-ROUTER-DOM
  * AXIOS
  * 
```bash
    npx create-react-app client

    cd client

    npm i react-router-dom axios
```

# DEVELOPER NOTES / THOUGHTS ON REACT IN 2020
 
___

I decided to create this after working on tons of smaller projects during the beginning of spring break my junior year of college (Mid March 2020) and the start of the COVID-19 quaratine. After making a few smaller projects with express and mongoDB, I saw that for the final in my DIG4639(React) class at UCF was a contact keeper project. I thought this would be the perfect project to implement a "basic" *CRUD* application, as well as experimenting with mongoDBAtlas, a cloud database thats honestly even easier to work with then mongoDB. 

Front-end wise, I used React, but instead of the usual class base components that I had been used to working with, and building projects with. I decided this would be the perfect time to experiment with the new React features that everyone has been "raving" about, where good or bad. Ofcourse I am talking about using functional components over class based ones.

"WAIT HOW YOU CANT DO THAT!!!!" One might say, but let me introduce you to the magic of... 
### __HOOKS__ and __CONTEXT__ 

Oh yeah, these bad boys are quite funky at first, but after wrangling with them and having a few headaches, I did start to actually appreciate the beauty of them. Listen, for me personally, the biggest inconvience and annoyance of React class based components is when you start having complex parent child relationships between components and need to pass a prop to a specific component, which might be nested 6 components deep from your main app level state, and now you're doing whats called "prop-drilling". Thats right, its so common and unfun it even has its own name. So you get your prop all the way down, now you might potentially have a super confusing time with the "this" keyword in JS (and dont even get me started on binds).

All this stuff really does not occur when you use hooks and context. You see, setting up a context with its own state and reducer, allows you to use __any state from the context__, __anywhere__ in your application with the help of a the hook 
 ```javascript
    useContext()
 ```

Calling it like so after importing your Context as well as the hook into the component

 ```javascript
    import React, { useContext } from 'react'
    import TextContext from '../context/test/testContext'

    const textContext =  useContext(TextContext);
    //deconstruct state or methods from the textContext
    const { text, textAdd, textDelete} = textContext

 ```

"But dude, I got a form component that needs component level state to have the form be empty on refresh, I can do that with a functional component"

__NOT SO FAST__

Check this hook out...
```javascript
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
```
We can then call the state with just the form variable, and if we need to set the state, we actually set the name of the set function right after declaring our form variable

```javascript
    onSubmit = e => {
        e.preventDefault();
        setForm({
            name:'test',
            email:'test@gmail.com',
            password:'password',
            passwordConfirm:'password'
        })
    }
```

This is just the basics of hooks and context took, hopefully this shows a bit about why it could be useful to start looking into using them.



This project took about a week to complete, with many, many hours spent on it almost every day of the week. I would say probably 20-25 hours total. 





