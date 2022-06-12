import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TeamsLayout } from './layout/TeamsLayout'

export default function BaseRouter() {
  return (
    <Routes>
      <Route path="/" element={<TeamsLayout />} />
    </Routes>
  )
}
