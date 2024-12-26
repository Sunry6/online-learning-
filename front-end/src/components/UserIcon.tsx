import cls from 'classnames'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface UserIconProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}

export const UserIcon: React.FC<UserIconProps> = ({ className, src }) => {
  return (
    <div
      className={cls(
        'hover:scale-125 duration-300 cursor-pointer overflow-hidden h-612',
        className,
      )}>
      <LazyLoadImage
        alt={''}
        effect="blur"
        wrapperProps={{
          style: { transitionDelay: '1s' },
        }}
        className={cls('w-12 h-12 object-cover rounded-lg', className)}
        src={src}
      />
    </div>
  )
}
