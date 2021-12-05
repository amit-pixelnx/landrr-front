import Image from 'next/image'
import Link from 'next/link'
import Sidebar from "../../components/Sidebar";
import Topbar from '../../components/Topbar';

const Dashboard = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="main">
                <div className="wrapperMain">
                    <Topbar></Topbar>
                </div>
            </div>
        </>
    );
}

export default Dashboard;