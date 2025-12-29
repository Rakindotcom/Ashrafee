import { useState, useEffect } from 'react'
import { MessageSquare, Search, Mail, Phone, Calendar, Eye, EyeOff, User } from 'lucide-react'
import { getInquiries, markInquiryRead } from '../../services/adminService'

const AdminInquiries = () => {
    const [inquiries, setInquiries] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedInquiry, setSelectedInquiry] = useState(null)

    useEffect(() => {
        fetchInquiries()
    }, [])

    const fetchInquiries = async () => {
        try {
            const data = await getInquiries()
            setInquiries(data)
        } catch (error) {
            console.error('Error fetching inquiries:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleMarkRead = async (inquiryId, isRead) => {
        try {
            await markInquiryRead(inquiryId, isRead)
            setInquiries(prev =>
                prev.map(i => i.id === inquiryId ? { ...i, isRead } : i)
            )
            if (selectedInquiry?.id === inquiryId) {
                setSelectedInquiry(prev => ({ ...prev, isRead }))
            }
        } catch (error) {
            console.error('Error updating inquiry:', error)
        }
    }

    const handleViewInquiry = async (inquiry) => {
        setSelectedInquiry(inquiry)
        if (!inquiry.isRead) {
            await handleMarkRead(inquiry.id, true)
        }
    }

    const formatDate = (timestamp) => {
        if (!timestamp) return 'N/A'
        if (timestamp.toDate) {
            return timestamp.toDate().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        }
        return timestamp
    }

    const filteredInquiries = inquiries.filter(inquiry => {
        const matchesFilter = filter === 'all' ||
            (filter === 'unread' && !inquiry.isRead) ||
            (filter === 'read' && inquiry.isRead)
        const matchesSearch = !searchQuery ||
            inquiry.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inquiry.email?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesFilter && matchesSearch
    })

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
                    <h1 className="text-2xl font-bold text-gray-800">Contact Inquiries</h1>
                    <p className="text-gray-500 mt-1">Manage customer inquiries from the contact form</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-orange rounded-full"></span>
                        {inquiries.filter(i => !i.isRead).length} unread
                    </span>
                    <span>Total: {inquiries.length}</span>
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
                            placeholder="Search by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-orange focus:ring-0"
                        />
                    </div>

                    {/* Read/Unread Filter */}
                    <div className="flex items-center gap-2">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="border border-gray-200 rounded-lg px-3 py-2 focus:border-orange focus:ring-0"
                        >
                            <option value="all">All Messages</option>
                            <option value="unread">Unread Only</option>
                            <option value="read">Read Only</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Inquiries List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
                    {filteredInquiries.length === 0 ? (
                        <div className="text-center py-12">
                            <MessageSquare className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">No inquiries found</p>
                            <p className="text-sm text-gray-400">Contact form submissions will appear here</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                            {filteredInquiries.map((inquiry) => (
                                <div
                                    key={inquiry.id}
                                    onClick={() => handleViewInquiry(inquiry)}
                                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedInquiry?.id === inquiry.id ? 'bg-orange/5 border-l-4 border-orange' : ''
                                        } ${!inquiry.isRead ? 'bg-orange/5' : ''}`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${!inquiry.isRead ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'
                                            }`}>
                                            <User size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className={`font-medium truncate ${!inquiry.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                                                    {inquiry.fullName || 'Unknown'}
                                                </h3>
                                                {!inquiry.isRead && (
                                                    <span className="w-2 h-2 bg-orange rounded-full flex-shrink-0"></span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 truncate">{inquiry.email}</p>
                                            <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                                                {inquiry.message || 'No message'}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-2">
                                                {formatDate(inquiry.createdAt)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Inquiry Detail */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    {selectedInquiry ? (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-800">Inquiry Details</h2>
                                <button
                                    onClick={() => handleMarkRead(selectedInquiry.id, !selectedInquiry.isRead)}
                                    className={`p-2 rounded-lg transition-colors ${selectedInquiry.isRead
                                            ? 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                            : 'bg-orange/10 text-orange hover:bg-orange/20'
                                        }`}
                                    title={selectedInquiry.isRead ? 'Mark as unread' : 'Mark as read'}
                                >
                                    {selectedInquiry.isRead ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <div className="border-t pt-4 space-y-4">
                                <div className="flex items-center gap-3">
                                    <User className="text-gray-400" size={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Name</p>
                                        <p className="font-medium text-gray-800">{selectedInquiry.fullName}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="text-gray-400" size={20} />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href={`mailto:${selectedInquiry.email}`} className="font-medium text-orange hover:underline">
                                            {selectedInquiry.email}
                                        </a>
                                    </div>
                                </div>

                                {selectedInquiry.phone && (
                                    <div className="flex items-center gap-3">
                                        <Phone className="text-gray-400" size={20} />
                                        <div>
                                            <p className="text-sm text-gray-500">Phone</p>
                                            <a href={`tel:${selectedInquiry.phone}`} className="font-medium text-orange hover:underline">
                                                {selectedInquiry.phone}
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {selectedInquiry.roomType && (
                                    <div className="flex items-center gap-3">
                                        <Calendar className="text-gray-400" size={20} />
                                        <div>
                                            <p className="text-sm text-gray-500">Room Preference</p>
                                            <p className="font-medium text-gray-800 capitalize">
                                                {selectedInquiry.roomType?.replace(/-/g, ' ')}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {(selectedInquiry.checkIn || selectedInquiry.checkOut) && (
                                    <div className="flex items-center gap-3">
                                        <Calendar className="text-gray-400" size={20} />
                                        <div>
                                            <p className="text-sm text-gray-500">Dates</p>
                                            <p className="font-medium text-gray-800">
                                                {selectedInquiry.checkIn} - {selectedInquiry.checkOut}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-sm text-gray-500 mb-2">Message</p>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-gray-700 whitespace-pre-wrap">
                                        {selectedInquiry.message || 'No message provided'}
                                    </p>
                                </div>
                            </div>

                            <div className="border-t pt-4 flex gap-2">
                                <a
                                    href={`mailto:${selectedInquiry.email}`}
                                    className="flex-1 btn-primary text-center text-sm py-2"
                                >
                                    Reply via Email
                                </a>
                                {selectedInquiry.phone && (
                                    <a
                                        href={`tel:${selectedInquiry.phone}`}
                                        className="flex-1 btn-secondary text-center text-sm py-2"
                                    >
                                        Call
                                    </a>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <MessageSquare className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">Select an inquiry</p>
                            <p className="text-sm text-gray-400">Click on an inquiry to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminInquiries
