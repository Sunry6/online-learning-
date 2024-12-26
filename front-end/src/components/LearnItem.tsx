import React from 'react'
import cls from 'classnames'
import { UserIcon } from './UserIcon'
import { Random } from 'mockjs'

interface LearnItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number
}

export const LearnItem: React.FC<LearnItemProps> = ({ className, index }) => {
  return (
    <div
      className={cls(
        'grid grid-cols-[auto_1fr] content-between gap-2 border-b pb-3',
        className,
      )}
      key={index}>
      <UserIcon src={`/images/user/${index + 1}.jpeg`} className="w-9 h-9" />
      <div className="grid grid-flow-row justify-between">
        <a className="font-bold text-base opacity-90 truncate">
          {Random.csentence(20, 80)}
        </a>
        <div className="text-xs flex gap-1 self-end">
          <a>{Random.ctitle(3, 6)}</a> 在 {Random.integer(2, 100)}分钟前学习
        </div>
      </div>
    </div>
  )
}
