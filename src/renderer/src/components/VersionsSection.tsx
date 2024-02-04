import { useState } from 'react'

export const VersionsSection = () => {
  const [versions] = useState(window.electron.process.versions)

  return (
    <div className="text">
      <p className="electron-version text-zinc-700">v1.0.0</p>

    </div>
  )
}