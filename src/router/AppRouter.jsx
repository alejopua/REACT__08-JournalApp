import { Routes, Route } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>

      {/* Login and Register */}
      <Route path="auth/*" element={<AuthRoutes />} />

      {/* Journal app */}
      <Route path="/*" element={<JournalRoutes />} />

    </Routes>
  )
}
