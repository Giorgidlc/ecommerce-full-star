import '../styles/css/dashboard.css'
import { NavbarDashboard } from "../components/NavbarDashboard";
import MainDashboard from "../components/MainDashboard"
import CardsDashboard from '../components/CardsDashboard';

const Dashboard = () => {
    return(
        <>
            <section>
                <NavbarDashboard />
            </section>
            <section>
                <MainDashboard />
            </section>
            <section>
                <CardsDashboard />
            </section>

        </>
        
    )
}

export default Dashboard