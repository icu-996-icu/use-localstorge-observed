import React from 'react'

import useLocalstorgeObserved from 'use-localstorge-observed'

const App = () => {
  const isChange = useLocalstorgeObserved("token")
  console.log(isChange)
  return (
    <div>
     sasas
    </div>
  )
}
export default App
