import React from 'react'

const Credentials = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-black p-20%'>
        <form>
          <div>
          <label 
          className="block text-gray-300 text-sm font-medium mb-1"
          htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input w-full bg-gray-100 text-black py-2 px-3 rounded-lg"
            placeholder="you@yourcompany.com"
            required
          />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Credentials
