import '../styles/css/dashboard.css'
import { NavbarDashboard } from "../components/NavbarDashboard";
import MainDashboard from "../components/MainDashboard"

const Dashboard = () => {
    return(
        <>
            <section>
                <NavbarDashboard />
            </section>
            <section>
                <MainDashboard />
            </section>

        </>
        
    )
}

export default Dashboard