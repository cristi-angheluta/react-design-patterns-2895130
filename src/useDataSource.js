import { useEffect, useState } from 'react'

export const useDataSource = (getResourceFn) => {
  const [resource, setResource] = useState()

  useEffect(() => {
    (async () => {
      const result = await getResourceFn()
      setResource(result)
    })()
  }, [getResourceFn])
  return resource;
}
