"use client"
import TestContext from '@/components/Test/TestContext'
import TestContextInfo from '@/components/Test/TestContextInfo'
import Link from 'next/link'

import React from 'react'


const page = () => {
  return (<>
    
    <div className="h-screen  bg-slate-500 text-center  ">
            <section>
            <h1 className="pt-10 pb-5 border-b text-3xl">Home Page Loaded</h1>
            <div>
            <Link className='m-2 text-blue-400' href="/">Home page</Link>
            </div>
            </section>

             
          </div>
  </>)
}

export default page