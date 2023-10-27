import '../styles/css/dashboard.css'
import { NavbarDashboard } from "../components/NavbarDashboard";
import CategoryDashboard from "../components/CategoryDashboard"
import CardsDashboard from '../components/CardsDashboard';

const Dashboard = () => {
    return(
        <>
            <section>
                <NavbarDashboard />
            </section>
            <section>
                <CategoryDashboard />
            </section>
            <section>
                <CardsDashboard />
            </section>

        </>
        
    )
}

export default Dashboard