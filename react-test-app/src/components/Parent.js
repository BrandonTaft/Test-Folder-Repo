import React from 'react'
import Test from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';

export function Parent() {
  const [data, setData] = useState('Hey');
  

  return (
    <div className="App">
      <Test setData={setData}/>
      
      {data}
    </div>
  )
}