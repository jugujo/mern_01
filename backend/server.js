const express = require('express')
const connectDB = require('./config/db');

const app = express()
connectDB();

app.get('/', (req, res) => res.send('respooo'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on ${PORT}`));

// const User = require('./model/User')

// let name = 'a';
// let email = 'a';
// let passworf = 'a';

// let user = new User({
//     name,
//     email,
//     passworf
// })

// Call start
// (async() => {
//     console.log('before start');
  
//     // let user = await User.findOne({ 'aa'})
//     // user.name = 'name'

//     await user.save();
    
//     console.log('after start');
//   })();



