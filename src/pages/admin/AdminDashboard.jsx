import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MessageSquare, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { getBookings, getInquiries } from '../../services/adminService'

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalBookings: 0,
        pendingBookings: 0,
        confirmedBookings: 0,
        totalInquiries: 0,
        unreadInquiries: 0
    })
    const [recentBookings, setRecentBookings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bookings, inquiries] = await Promise.all([
                    getBookings(),
                    getInquiries()
                ])

                setStats({
                    totalBookings: bookings.length,
                    pendingBookings: bookings.filter(b => b.status === 'pending').length,
                    confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
                    totalInquiries: inquiries.length,
                    unreadInquiries: inquiries.filter(i => !i.isRead).length
                })

                setRecentBookings(bookings.slice(0, 5))
            } catch (error) {
                console.error('Error fetching dashboard data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const StatCard = ({ icon: Icon, label, value, color, subValue, link }) => (
        <Link
            to={link}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group"
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-gray-500 text-sm mb-1">{label}</p>
                    <p className="text-3xl font-bold text-gray-800">{value}</p>
                    {subValue && (
                        <p className="text-sm text-gray-400 mt-1">{subValue}</p>
                    )}
                </div>
                <div className={`p-3 rounded-lg ${color}`}>
                    <Icon className="text-white" size={24} />
                </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-orange group-hover:underline">
                View details <ArrowRight size={14} className="ml-1" />
            </div>
        </Link>
    )

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange"></div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-500 mt-1">Welcome back! Here's what's happening at your hotel.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon={Calendar}
                    label="Total Bookings"
                    value={stats.totalBookings}
                    color="bg-blue-500"
                    link="/admin/bookings"
                />
                <StatCard
                    icon={Clock}
                    label="Pending Bookings"
                    value={stats.pendingBookings}
                    color="bg-orange"
                    subValue="Needs confirmation"
                    link="/admin/bookings"
                />
                <StatCard
                    icon={CheckCircle}
                    label="Confirmed"
                    value={stats.confirmedBookings}
                    color="bg-green-500"
                    link="/admin/bookings"
                />
                <StatCard
                    icon={MessageSquare}
                    label="New Inquiries"
                    value={stats.unreadInquiries}
                    color="bg-purple-500"
                    subValue={`${stats.totalInquiries} total`}
                    link="/admin/inquiries"
                />
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Recent Bookings</h2>
                        <Link to="/admin/bookings" className="text-sm text-orange hover:underline">
                            View all →
                        </Link>
                    </div>
                </div>
                <div className="p-6">
                    {recentBookings.length === 0 ? (
                        <div className="text-center py-8">
                            <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">No bookings yet</p>
                            <p className="text-sm text-gray-400">Bookings from the website will appear here</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        <th className="pb-3">Room Type</th>
                                        <th className="pb-3">Check-in</th>
                                        <th className="pb-3">Check-out</th>
                                        <th className="pb-3">Guests</th>
                                        <th className="pb-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {recentBookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-gray-50">
                                            <td className="py-3 font-medium text-gray-800 capitalize">
                                                {booking.roomType?.replace('-', ' ') || 'N/A'}
                                            </td>
                                            <td className="py-3 text-gray-600">
                                                {booking.checkIn?.toDate?.()?.toLocaleDateString('en-US', {
                                                    weekday: 'short',
                                                    month: 'short',
                                                    day: 'numeric'
                                                }) || booking.checkIn || 'N/A'}
                                            </td>
                                            <td className="py-3 text-gray-600">
                                                {booking.checkOut?.toDate?.()?.toLocaleDateString('en-US', {
                                                    weekday: 'short',
                                                    month: 'short',
                                                    day: 'numeric'
                                                }) || booking.checkOut || 'N/A'}
                                            </td>
                                            <td className="py-3 text-gray-600">{booking.guests || 'N/A'}</td>
                                            <td className="py-3">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking.status === 'confirmed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : booking.status === 'completed'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : booking.status === 'cancelled'
                                                            ? 'bg-red-100 text-red-800'
                                                            : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {booking.status || 'pending'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    className="rounded-xl p-6"
                    style={{ background: 'linear-gradient(to right, #006A4E, #004D38)' }}
                >
                    <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>Need Help?</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Contact IT support for any dashboard-related issues
                    </p>
                    <a
                        href="mailto:it@hotelashrafee.com"
                        className="btn-primary inline-block text-sm"
                        style={{ backgroundColor: '#fb923c', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '500' }}
                    >
                        Contact Support
                    </a>
                </div>
                <div
                    className="rounded-xl p-6"
                    style={{ background: 'linear-gradient(to right, #fb923c, #f97316)' }}
                >
                    <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '0.5rem' }}>View Website</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        See how customers view your hotel online
                    </p>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: 'white', color: '#fb923c', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: '600', display: 'inline-block', fontSize: '0.875rem' }}
                    >
                        Open Website →
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
