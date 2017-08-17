let express = require('express')
let state = require('./state')

let app = express()

app.get('/get', (req, res) => {
  res.json({ state: state.things })
})

app.get('/add/:thing', (req, res) => {
  state.addThing(req.params.thing)
  res.json({ state: state.things })
})

app.get('/remove/:thing', (req, res) => {
  state.removeThing(req.params.thing)
  res.json({ state: state.things })
})

app.listen(3333, () => console.log('listening on 3333 ⚡️'))
