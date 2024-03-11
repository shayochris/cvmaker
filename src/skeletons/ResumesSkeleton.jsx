import React from 'react'

export default function ResumesSkeleton() {
  return (
    <div className='w-full h-[500px] flex-c bg-white'>
      <div className='w-full'>
        {
          [...Array(5)].map(() => (
            <div className="container-md border p-2 my-2 flex-a">
              <div className="h-12 w-[20%] lg:w-[10%] bg-gray-200 rounded-lg mr-2"></div>
              <div className="w-[90%]">
                <div className="p-1 rounded-lg bg-gray-200 my-1"></div>
                <div className="p-1 rounded-lg bg-gray-200 my-1"></div>
                <div className="p-1 rounded-lg bg-gray-200 my-1 w-[50%]"></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
