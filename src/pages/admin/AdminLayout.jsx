import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {
    LayoutDashboard,
    Calendar,
    MessageSquare,
    LogOut,
    Menu,
    X,
    Hotel,
    ChevronRight
} from 'lucide-react'

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/admin/login')
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    const navItems = [
        { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
        { path: '/admin/bookings', icon: Calendar, label: 'Bookings' },
        { path: '/admin/inquiries', icon: MessageSquare, label: 'Inquiries' }
    ]

    const NavItem = ({ path, icon: Icon, label, end }) => (
        <NavLink
            to={path}
            end={end}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                    ? 'bg-orange text-white shadow-lg'
                    : 'text-gray-300 hover:bg-navy-light hover:text-white'
                }`
            }
        >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
            <ChevronRight size={16} className="ml-auto opacity-50" />
        </NavLink>
    )

    return (
        <div className="min-h-screen flex admin-layout" style={{ backgroundColor: '#f3f4f6' }}>
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-navy transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center" style={{ flexShrink: 0 }}>
                                <Hotel className="text-white" size={20} />
                            </div>
                            <div style={{ whiteSpace: 'nowrap' }}>
                                <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem', lineHeight: '1.2' }}>Hotel Ashrafee</h1>
                                <p style={{ color: '#9ca3af', fontSize: '0.65rem' }}>Admin Panel</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-2">
                        {navItems.map((item) => (
                            <NavItem key={item.path} {...item} />
                        ))}
                    </nav>

                    {/* User Section */}
                    <div className="p-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                                <span className="text-white font-semibold">
                                    {currentUser?.email?.[0]?.toUpperCase() || 'A'}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">
                                    {currentUser?.email || 'Admin'}
                                </p>
                                <p style={{ color: '#9ca3af', fontSize: '0.75rem' }}>Administrator</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-colors"
                            style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#f87171' }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.25)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.15)'}
                        >
                            <LogOut size={18} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top Header */}
                <header className="bg-white shadow-sm px-4 py-4 lg:px-6 flex items-center justify-between">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        <Menu size={24} />
                    </button>
                    <div className="flex-1 lg:ml-0 ml-4">
                        <h2 className="text-lg font-semibold text-gray-800">Welcome to Admin Dashboard</h2>
                    </div>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-orange hover:underline hidden sm:block"
                    >
                        View Website →
                    </a>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 lg:p-6 overflow-auto">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-white border-t px-4 py-3 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Hotel Ashrafee. Admin Dashboard.
                </footer>
            </div>
        </div>
    )
}

export default AdminLayout
