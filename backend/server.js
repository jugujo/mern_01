const express = require('express')
const connectDB = require('./config/db');

const app = express()
connectDB();

app.get('/', (req, res) => res.send('respooo'));

app.use(express.json({
    extended: false
}))

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

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



