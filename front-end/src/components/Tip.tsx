import { Card } from 'antd'
import cls from 'classnames'
import React from 'react'

interface TipProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string
}

export const Tip: React.FC<TipProps> = ({ className }) => {
  return (
    <Card title="社区小贴" className={cls(className)}>
      <div className="text-base text-center leading-8">
        本网站是一个主张友好、分享、自由的技术交流社区 <br />
        欢迎大家访问 <br />
        <div className="text-amber-600 font-bold">Online-Learning</div>
      </div>
    </Card>
  )
}
