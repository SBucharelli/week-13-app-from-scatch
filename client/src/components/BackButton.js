import React from 'react'
import { Link } from 'react-router-dom'

export default ({ page }) => (
  <Link to={`${page}`}>Go Back</Link>
)