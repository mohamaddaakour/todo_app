```tsx
<div>
    { /* todos is an array */ }
    { /* map built in function in javascript will iterate over */ }
    { /* todos array and create a new array */ }
    { /* todo is the variable that will represent the element of the todos array in each iteration */ }
    { /* key is always used with map to give each element in the new array an id */ }
    { /* to differ each element from the other */ }
    { /* the body of the map is inside () to return all this piece of component in each iteration */ }
    {todos.map((todo) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
        />
    ))}
</div>
```

```tsx
// use effect is a hook used when we are working
// with something outside our work like working with API's
// and what inside it will be executed one time when we render first time
// and re-excuted only if the state inside the dependency array change
// if the dependency array is empty what inside it will be executed once
// when we render first time only
useEffect(() => {
    ...
}, [todos]);
```