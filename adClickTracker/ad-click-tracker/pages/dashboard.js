import { useClick } from '../context/ClickContext';
import ClickButton from '../components/ClickButton';

const Dashboard = () => {
    const {clicks} = useClick();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Total Clicks: {clicks}</p>
            <ClickButton />
        </div>
    );
};

export default Dashboard;

