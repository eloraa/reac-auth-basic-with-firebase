import { Outlet } from "react-router-dom"

export const Root = () => {
  return (
    <div className="md:max-w-sm mx-auto h-full">
        <Outlet/>
    </div>
  )
}
