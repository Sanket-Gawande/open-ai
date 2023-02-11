
import React from 'react'

const loader = () => {
  return (
    <section className=' grid place-items-center fixed inset-0 backdrop-filter backdrop-blur-sm bg-slate-800/60'>
      <div className='w-[400px] h-auto p-8 bg-white rounded-md'>Please wait, AI is generating images</div>
    </section>
  )
}

export default loader