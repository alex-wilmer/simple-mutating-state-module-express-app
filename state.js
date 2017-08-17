let state = {
  things: ['foo'],
  addThing(x) {
    this.things.push(x)
  },
  removeThing(x) {
    this.things = this.things.filter(t => t !== x)
  }
}

module.exports = state
