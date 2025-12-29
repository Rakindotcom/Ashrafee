import { useState, useEffect } from 'react'
import { Calendar, Search, Filter, Check, X, Clock, CheckCircle } from 'lucide-react'
import { getBookings, updateBookingStatus } from '../../services/adminService'

const AdminBookings = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [updatingId, setUpdatingId] = useState(null)

    useEffect(() => {
        fetchBookings()
    }, [])

    const fetchBookings = async () => {
        try {
            const data = await getBookings()
            setBookings(data)
        } catch (error) {
            console.error('Error fetching bookings:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleStatusChange = async (bookingId, newStatus) => {
        setUpdatingId(bookingId)
        try {
            await updateBookingStatus(bookingId, newStatus)
            setBookings(prev =>
                prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b)
            )
        } catch (error) {
            console.error('Error updating status:', error)
        } finally {
            setUpdatingId(null)
        }
    }

    const formatDate = (timestamp) => {
        if (!timestamp) return 'N/A'
        if (timestamp.toDate) {
            return timestamp.toDate().toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })
        }
        return timestamp
    }

    const filteredBookings = bookings.filter(booking => {
        const matchesFilter = filter === 'all' || booking.status === filter
        const matchesSearch = !searchQuery ||
            booking.roomType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.guestName?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesFilter && matchesSearch
    })

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        confirmed: 'bg-green-100 text-green-800 border-green-200',
        completed: 'bg-blue-100 text-blue-800 border-blue-200',
        cancelled: 'bg-red-100 text-red-800 border-red-200'
    }

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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Bookings Management</h1>
                    <p className="text-gray-500 mt-1">Manage all hotel room bookings</p>
                </div>
                <div className="text-sm text-gray-500">
                    Total: {filteredBookings.length} booking(s)
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by room type or guest name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-orange focus:ring-0"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="flex items-center gap-2">
                        <Filter size={20} className="text-gray-400" />
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="border border-gray-200 rounded-lg px-3 py-2 focus:border-orange focus:ring-0"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {filteredBookings.length === 0 ? (
                    <div className="text-center py-12">
                        <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                        <p className="text-gray-500">No bookings found</p>
                        <p className="text-sm text-gray-400">Bookings from the website will appear here</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <th className="px-6 py-4">Room Type</th>
                                    <th className="px-6 py-4">Check-in</th>
                                    <th className="px-6 py-4">Check-out</th>
                                    <th className="px-6 py-4">Nights</th>
                                    <th className="px-6 py-4">Guests</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-800 capitalize">
                                            {booking.roomType?.replace(/-/g, ' ') || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {formatDate(booking.checkIn)}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {formatDate(booking.checkOut)}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {booking.nights || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {booking.guests || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[booking.status] || statusColors.pending}`}>
                                                {booking.status === 'pending' && <Clock size={12} className="mr-1" />}
                                                {booking.status === 'confirmed' && <CheckCircle size={12} className="mr-1" />}
                                                {booking.status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {booking.status !== 'confirmed' && (
                                                    <button
                                                        onClick={() => handleStatusChange(booking.id, 'confirmed')}
                                                        disabled={updatingId === booking.id}
                                                        className="p-1.5 bg-green-100 text-green-600 rounded hover:bg-green-200 disabled:opacity-50"
                                                        title="Confirm"
                                                    >
                                                        <Check size={16} />
                                                    </button>
                                                )}
                                                {booking.status !== 'completed' && booking.status === 'confirmed' && (
                                                    <button
                                                        onClick={() => handleStatusChange(booking.id, 'completed')}
                                                        disabled={updatingId === booking.id}
                                                        className="p-1.5 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 disabled:opacity-50"
                                                        title="Mark Complete"
                                                    >
                                                        <CheckCircle size={16} />
                                                    </button>
                                                )}
                                                {booking.status !== 'cancelled' && (
                                                    <button
                                                        onClick={() => handleStatusChange(booking.id, 'cancelled')}
                                                        disabled={updatingId === booking.id}
                                                        className="p-1.5 bg-red-100 text-red-600 rounded hover:bg-red-200 disabled:opacity-50"
                                                        title="Cancel"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminBookings
