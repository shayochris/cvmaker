import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import ResumesSkeleton from '../skeletons/ResumesSkeleton'
import { Link } from 'react-router-dom'
import Error from './Error'

export default function Resumes() {
  const { data: resumes, loading, error } = useFetch()
  useEffect(() => {
  }, [])

  return (
    <div>
      <div>
        {loading && <ResumesSkeleton />}
        {error && <Error />}
        {!loading && !error &&
          <div>
            {resumes?.length ?
              <div className='container-md mt-4'>
                {resumes.map((resume, index) => (
                  <div key={index} className="cv-card flex-b p-3 mb-1 border-r-2 border-green-500">
                    <p>{resume.title}</p>
                    <p className='font-semibold text-secondary'>{resume.progress}</p>
                  </div>
                ))}
              </div>
              :
              <div className="h-[500px]  flex-c">
                <div className='lg:w-[40%] mx-auto text-center text-gray-500'>
                  <p className="h5">No CVs yet</p>
                  <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt odio maiores.</p>
                  <button onclick={() => navigate("/create")} className="btn-primary">create</button>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}
