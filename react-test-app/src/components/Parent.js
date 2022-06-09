import React from 'react'
import Child from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';

export default function Parent() {
  const [data, setData] = useState('Hey');
  

  return (
    <div className="App">
      <Child setData={setData}/>
      
      {data}
    </div>
  )
}