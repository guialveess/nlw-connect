import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IcconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function IcconButton({className, ...props}: IcconButtonProps) {
  return (
    <button
      className="{twMerge('items-center justify-between p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 duration-300 transition-colors', className)}"
      {...props}
    />
  )
}
