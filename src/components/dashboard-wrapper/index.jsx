import Header from "../header"
import Sidebar from "../sidebar"

export default function DashboardWrapper(props){
    const {active, children} = props
    return (
        <>
            <Header/>
            <div className="flex w-full below-header-section">
                <Sidebar active={active}/>
                <main className="main-section">
                    {children}
                </main>
            </div>
        </>
    )
}