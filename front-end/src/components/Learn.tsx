import { Card } from 'antd'
import React from 'react'
import { LearnItem } from './LearnItem'

type LearnProps = React.HTMLAttributes<HTMLDivElement>

export const Learn: React.FC<LearnProps> = ({ className }) => {
  return (
    <Card title="学习动态" className={className}>
      <div className="grid grid-flow-row gap-4">
        {[...Array(10)].map((_, index) => (
          <LearnItem key={index} index={index} />
        ))}
      </div>
    </Card>
  )
}
