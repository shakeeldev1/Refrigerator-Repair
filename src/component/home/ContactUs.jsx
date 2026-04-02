import React from 'react'
import ContactHeader from '../Contact/ContactHeader'
import ContactLocations from '../Contact/ContactLocations'
import ContactFormSection from '../Contact/ContactFormSection'

export default function ContactUs() {
  return (
    <div>
        <ContactHeader/>
        <ContactFormSection/>
        <ContactLocations/>
    </div>
  )
}
