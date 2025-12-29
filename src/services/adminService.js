import {
    collection,
    getDocs,
    doc,
    updateDoc,
    addDoc,
    query,
    orderBy,
    serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'

// Collections
const BOOKINGS_COLLECTION = 'bookings'
const INQUIRIES_COLLECTION = 'inquiries'

// ============ BOOKINGS ============

// Get all bookings
export const getBookings = async () => {
    try {
        const q = query(collection(db, BOOKINGS_COLLECTION), orderBy('createdAt', 'desc'))
        const snapshot = await getDocs(q)
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    } catch (error) {
        console.error('Error fetching bookings:', error)
        throw error
    }
}

// Add new booking (from booking widget)
export const addBooking = async (bookingData) => {
    try {
        const docRef = await addDoc(collection(db, BOOKINGS_COLLECTION), {
            ...bookingData,
            status: 'pending',
            createdAt: serverTimestamp()
        })
        return docRef.id
    } catch (error) {
        console.error('Error adding booking:', error)
        throw error
    }
}

// Update booking status
export const updateBookingStatus = async (bookingId, status) => {
    try {
        const bookingRef = doc(db, BOOKINGS_COLLECTION, bookingId)
        await updateDoc(bookingRef, {
            status,
            updatedAt: serverTimestamp()
        })
    } catch (error) {
        console.error('Error updating booking status:', error)
        throw error
    }
}

// ============ INQUIRIES ============

// Get all inquiries
export const getInquiries = async () => {
    try {
        const q = query(collection(db, INQUIRIES_COLLECTION), orderBy('createdAt', 'desc'))
        const snapshot = await getDocs(q)
        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    } catch (error) {
        console.error('Error fetching inquiries:', error)
        throw error
    }
}

// Add new inquiry (from contact form)
export const addInquiry = async (inquiryData) => {
    try {
        const docRef = await addDoc(collection(db, INQUIRIES_COLLECTION), {
            ...inquiryData,
            isRead: false,
            createdAt: serverTimestamp()
        })
        return docRef.id
    } catch (error) {
        console.error('Error adding inquiry:', error)
        throw error
    }
}

// Mark inquiry as read
export const markInquiryRead = async (inquiryId, isRead = true) => {
    try {
        const inquiryRef = doc(db, INQUIRIES_COLLECTION, inquiryId)
        await updateDoc(inquiryRef, {
            isRead,
            updatedAt: serverTimestamp()
        })
    } catch (error) {
        console.error('Error updating inquiry:', error)
        throw error
    }
}
