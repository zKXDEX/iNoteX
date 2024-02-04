import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingSettingsTitle = ({ className, ...props }: ComponentProps<'div'>) => {

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">Settings</span>
    </div>
  )
}
