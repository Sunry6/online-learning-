import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/front/chapter/system')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="bg-white rounded-lg p-6">
      <h1 className="flex justify-center text-3xl mt-12 font-bold">系统课程</h1>
      <div className="text-center mt-6">
        系统课程指从零开始学习一门编程语言, 比如从零开始学习JavaScript编程语言
      </div>

      <section className="">
        {[...Array(12)].map((_, index) => (
          <img src={`/public/images/system/${index + 1}.jpeg`} alt="" />
        ))}
      </section>
    </main>
  )
}
