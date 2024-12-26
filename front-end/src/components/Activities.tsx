import { Card, Pagination } from 'antd'
import React from 'react'
import { ActivityItem } from './ActivityItem'

export const Activities: React.FC = () => {
  return (
    <main>
      <Card title="网站动态">
        <div className="grid grid-flow-row gap-4">
          {[...Array(10)].map((_, index) => (
            <ActivityItem key={index} index={index} />
          ))}
        </div>
      </Card>
      <div className="bg-white rounded-lg mt-3 py-3 px-6">
        <Pagination defaultCurrent={1} total={100} />
      </div>
    </main>
  )
}
