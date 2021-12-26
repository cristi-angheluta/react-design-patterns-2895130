import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const withEditableResource = (Component, resourcePath, resourceName) => {
  return props => {
    const [originalData, setOriginalData] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath)
        setOriginalData(response.data)
        setData(response.data)
      })()
    }, [])

    const onChange = changes => {
      setData({...data, ...changes})
    }

    const onSave = async () => {
      const response = await axios.post(resourcePath, {[resourceName]: data})
      setOriginalData(response.data)
      setData(response.data)
    }

    const onReset = () => {
      setData(originalData)
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${resourceName}`]: onChange,
      [`onSave${resourceName}`]: onSave,
      [`onReset${resourceName}`]: onReset
    }

    return <Component {...props} {...resourceProps} />
  }
}
