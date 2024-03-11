import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="flex-c h-[500px] text-center text-gray-500">
      <div className=''>
        <p className="h5">Ooops..</p>
        <p className='mb-6'>something went wrong!</p>
        <Link className='btn-primary mt-4' to="/">Reload</Link>
      </div>
    </div>
  )
}
