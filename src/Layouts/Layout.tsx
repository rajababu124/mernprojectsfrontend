import Navbar from "../features/todo/Components/Navbar"
import Todo from "../features/todo/Todo"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-10 bg-gray-100 border-b-4 '>
                <div className="col-span-2 border-r-2 p-4 bg-white" style={{height : '86vh'}}>
                    {/* Add Sidebar or ComingSoon component here */}
                </div>
                <div className="col-span-8 p-4">
                    <Todo />
                </div>
            </div>
        </>

    )
}

export default Layout
