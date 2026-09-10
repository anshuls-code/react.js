import React from 'react'

function Card({username}) {
    console.log(username)
  return (
    <div className="max-w-sm rounded-xl bg-white p-6 shadow-lg m-5">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        Card Title
      </h2>

      <p className="mb-4 text-gray-600">
        This is a simple card component built with React and Tailwind CSS.
      </p>

      <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
        {username}
      </button>
    </div>
  )
}

export default Card
