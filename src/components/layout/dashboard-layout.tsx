import { fetchLocalUserData } from '@/lib/local-storage'
import { Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';

export const DashboardLayout = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const getUserData = async () => {
            const data = await fetchLocalUserData();
            setAccessToken(data?.accessToken || null);
        };
        getUserData();
    }, []);

    if (!accessToken) return <Navigate to={`/auth/login`} replace />;
    
    return (
        <div className="h-full">
            <Outlet />
        </div>
    );
}