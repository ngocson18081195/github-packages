import Express from 'express';
const app = Express();

app.get('/', function (req, res) {
    res.send('Hello World 123')
})

app.listen(3000)

export const helloWorld = () => {
    return 'Howdy123!'
}