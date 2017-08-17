### Bare bones (mutating) stateful module in express

Install and run:

```
npm i && node index
```

Get current state:

```
curl http://localhost:3333/get
```

Add 'something' to state:

```
curl http://localhost:3333/add/something
```

Remove 'something' from state:

```
curl http://localhost:3333/remove/something
```
