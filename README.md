# useRunner();

An easy to use React hook, that handles your async and sync functions, being very versitaile in it's implementation.

# Hook structure

```js
const [
  data, // The resulting data or when the promise is resolved
  run, // A function that will call any function you want with arguments
  running, // If its running or not as a boolean (you can use this for loading status)
  error, // An error object that was caught or a rejected promise
] = useRunner()
```

# Usage

### How to use it for a async function?

```jsx
// Sample async function that expects one argument and returns a promise.
const fetchUser = (username) => {
  const url = `https://api.github.com/users/${username}`
  return fetch(url).then((r) => r.json())
}

const App = () => {
  const [data, run, running, error] = useRunner()

  const handleClick = () => {
    // we pass the function you wanna call and its arguments.
    run(fetchUser, 'emersonbroga')
  }

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      {error ? (
        <pre>
          {error.message} {error.stack}
        </pre>
      ) : null}
      <button onClick={handleClick}>{running ? 'Loading' : 'Run'}</button>
    </div>
  )
}
```

### How to use it for a sync function?

```jsx
// Sample sync function that expects one argument and returns a string.
const userLike = (username, language) => {
  return `${username} likes ${language}`
}

const App = () => {
  const [data, run, running, error] = useRunner()

  const handleClick = () => {
    // we pass the function you wanna call and its arguments.
    run(userLike, 'emersonbroga', 'javascript')
  }

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
      {error ? (
        <pre>
          {error.message} {error.stack}
        </pre>
      ) : null}
      <button onClick={handleClick}>{running ? 'Loading' : 'Run'}</button>
    </div>
  )
}
```

# Sample

Sample on [CodePen.io](https://codepen.io/emersonbroga/pen/jOxprma)
