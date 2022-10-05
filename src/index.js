import { useState } from 'react'

export const useRunner = () => {
  const [running, setRunning] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  const run = (fn, ...args) => {
    try {
      setRunning(true)

      const promiseOrResult = fn([...args])
      const isPromise = promiseOrResult instanceof Promise

      if (!isPromise) {
        setRunning(false)
        setData(promiseOrResult)
        return
      }

      promiseOrResult
        .then((data) => {
          setData(data)
        })
        .catch((e) => {
          setError(e)
        })
        .finally(() => {
          setRunning(false)
        })
    } catch (e) {
      setRunning(false)
      setError(e)
    }
  }

  return [data, run, running, error]
}
