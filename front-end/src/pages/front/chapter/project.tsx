import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'antd'

export const Route = createFileRoute('/front/chapter/project')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Card title="实战项目" extra={<a href="#">More</a>}></Card>
}
