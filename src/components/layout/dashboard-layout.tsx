import { fetchLocalUserData } from '@/lib/local-storage'
import { Navigate, Outlet } from 'react-router-dom'
import { Navigation } from './navigation';

export const DashboardLayout = () => {
    const { accessToken } = fetchLocalUserData() || {};

    if (!accessToken) return <Navigate to={`/auth/login`} replace />;

    return (
        <main className="flex flex-col h-full max-h-screen text-white">
            <div className='w-full flex flex-col py-3 px-5'>
                <Outlet />
            </div>
            <nav
                className={`fixed bottom-0 left-0 right-0 w-full bg-black
                    }`}
                style={{
                    height: "60px",
                    // boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.05), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)'
                }} // Explicitly set navbar height
            >
                <Navigation />
            </nav>
        </main>
    );
}