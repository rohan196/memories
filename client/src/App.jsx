import React from 'react'
import memories from './images/memories.png'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center title_logo'>
        <div className='w-11/12 m-4 p-2 flex flex-col border-2 rounded-2xl'>
          <div className='flex m-auto'><h2 className='text-2xl font-medium '>Memories</h2></div>
          <div className='flex m-auto'><img className='h-20' src={memories} /></div>
        </div>
      </div>
      {/* <div className='flex justify-center post_form_grid'>
        <div className='w-11/12 grid grid-cols-2 gap-4'>
          <div>
            <Posts />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div> */}
      <div className='flex justify-center post_form_grid'>
        <div className='w-11/12 flex flex-cols gap-4'>
          <div className='flex-1 w-60'>
            <Posts />
          </div>
          <div className='flex-1 w-30'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
