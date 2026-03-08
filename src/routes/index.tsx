import { createFileRoute,Link } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-3xl text-center">Welcome to react-interview-task!</h1>
        <div className="grid grid-cols-3  items-center gap-2 mt-4">
          <div className="flex flex-col border bg-blue-100 rounded-md p-2 gap-2 hover:bg-blue-200">
            <Link  to="/mini-search-filter">Mini Search Filter</Link>
          </div>
        </div>

    </div>
  )
}

