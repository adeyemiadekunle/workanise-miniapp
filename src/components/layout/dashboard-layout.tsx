import { fetchLocalUserData } from '@/lib/local-storage'
import { Navigate, Outlet } from 'react-router-dom'
import { Navigation } from './navigation';

export const DashboardLayout = () => {
    const { accessToken } = fetchLocalUserData() || {};

    if (!accessToken) return <Navigate to={`/auth/login`} replace />;

    return (
        <main className="flex flex-col h-full text-white">
            <div className='w-full h-full flex flex-col py-3 px-5 mb-[60px]'>
                <Outlet />
            </div>
            <nav
                className={`fixed bottom-0 left-0 right-0 w-full bg-black
                    }`}
                style={{
                    height: "60px",

                }}
            >
                <Navigation />
            </nav>
        </main>
    );
}