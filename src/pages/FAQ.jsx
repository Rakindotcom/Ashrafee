import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const faqs = [
    {
      question: 'What are check-in/out times?',
      answer: 'Check-in: 2:00 PM onwards | Check-out: 12:00 PM. Early check-in and late check-out available on request.'
    },
    {
      question: 'Do you provide airport pickup?',
      answer: 'Yes, we arrange airport transfers. Please contact us 24 hours in advance. Charges apply based on vehicle type.'
    },
    {
      question: 'Is WiFi free throughout the hotel?',
      answer: 'Yes, complimentary high-speed WiFi is available in all rooms and common areas.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, VISA, MasterCard, and bKash (01828183920). Room charges can be settled at checkout.'
    },
    {
      question: 'Do you have parking facilities?',
      answer: 'Yes, free parking is available for all hotel guests on a first-come, first-served basis.'
    },
    {
      question: 'Is the restaurant halal certified?',
      answer: 'Yes, our Aahelee Restaurant is halal certified and serves authentic Asian cuisine with vegetarian options.'
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Cancellation and modification policies vary by booking type. Please contact us directly for assistance with your reservation.'
    },
    {
      question: 'Do you provide laundry services?',
      answer: 'Yes, we offer professional laundry and dry cleaning services. Items collected in the morning are typically ready by evening.'
    },
    {
      question: 'Is room service available 24/7?',
      answer: 'Yes, 24-hour room service is available. Our restaurant operates 6 AM - 11 PM, with limited menu available during night hours.'
    },
    {
      question: 'What safety measures do you have?',
      answer: 'We have 24/7 CCTV coverage, fire safety systems, standby generator, and enhanced COVID-19 safety protocols.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about Hotel Ashrafee
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                >
                  <span className="font-medium text-navy">{faq.question}</span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="text-orange" size={20} />
                  ) : (
                    <ChevronDown className="text-orange" size={20} />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Our friendly staff is here to help you 24/7
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+8801828183920" 
              className="btn-primary px-8 py-4 text-lg"
            >
              CALL: +880 1828-183920
            </a>
            <a 
              href="https://wa.me/8801828183920" 
              className="btn-whatsapp px-8 py-4 text-lg"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ