const express = require('express');
const app = express();
const courses = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Node.js' },
]

app.get('/', (req, res) => {
    res.send('Hello World The Great Finny');
});

app.get('/api/books', (req, res) => {
    res.send(courses);
});

app.post('/app/books', (req, res) => {

});




app.get('/api/books/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('ID not found');
    res.send(course);
});

const port = process.env.PORT || 9636;
app.listen(port, () => console.log(`Server Started ${port}...`));