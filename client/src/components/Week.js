import React from 'react'
import { Link } from "react-router-dom"

function Week({ weeks }) {
  return (
    <div>
      {
        weeks.map(week => (
          <div key={week._id}>
            <Link to={`/weeks/${week.slug}`}>
              {week.week}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Week