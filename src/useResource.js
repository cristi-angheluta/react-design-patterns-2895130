import { useEffect, useState } from 'react'
import axios from 'axios'

export const useResource = (resourcePath) => {
  const [resource, setResource] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourcePath)
      setResource(response.data)
    })()
  }, [resourcePath])

  return resource;
}
