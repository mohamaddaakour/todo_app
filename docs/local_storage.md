- Local Storage is a built-in feature provided by web browsers that allows a website to store data on the user's computer as key-value pairs.

- Local Storage can only store strings.

```ts
// to take the value of the todos keys from the local storage
const stored = localStorage.getItem("todos");
```

```ts
// to set new item or update an old item by using the key and providing its value
// local storage can only handle strings so if we have an array or object we have
// to convert it into a JSON string
localStorage.setItem("todos", JSON.stringify(todos));
```

```ts
// to convert a JSON string into an array or object
const parsed: unknown = JSON.parse(stored);
```