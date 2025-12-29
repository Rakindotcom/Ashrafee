import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Mail, Lock, AlertCircle, Hotel } from 'lucide-react'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    // Redirect to intended page or dashboard
    const from = location.state?.from?.pathname || '/admin'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            await login(email, password)
            navigate(from, { replace: true })
        } catch (err) {
            console.error('Login error:', err)
            switch (err.code) {
                case 'auth/invalid-email':
                    setError('Invalid email address')
                    break
                case 'auth/user-not-found':
                    setError('No account found with this email')
                    break
                case 'auth/wrong-password':
                    setError('Incorrect password')
                    break
                case 'auth/invalid-credential':
                    setError('Invalid email or password')
                    break
                case 'auth/too-many-requests':
                    setError('Too many failed attempts. Please try again later.')
                    break
                default:
                    setError('Failed to sign in. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{ background: 'linear-gradient(135deg, #006A4E 0%, #004D38 50%, #003D2E 100%)' }}
        >
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange rounded-full mb-4">
                        <Hotel className="text-white" size={32} />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Hotel Ashrafee</h1>
                    <p className="text-gray-300">Admin Dashboard</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-navy text-center mb-6">Welcome Back</h2>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                            <AlertCircle size={20} />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@hotelashrafee.com"
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:ring-0 transition-colors"
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange focus:ring-0 transition-colors"
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange hover:bg-orange-hover text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <span>Sign In</span>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-500 mt-6">
                        Admin access only. Contact IT for credentials.
                    </p>
                </div>

                {/* Back to website link */}
                <div className="text-center mt-6">
                    <a
                        href="/"
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                        ← Back to Hotel Website
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
