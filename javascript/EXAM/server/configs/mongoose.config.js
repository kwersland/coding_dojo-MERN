const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/projects_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connnection to the database'))
    .catch(() => console.log('Something went wrong'));