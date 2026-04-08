import React from 'react'
import ContactHeader from '../Contact/ContactHeader'
import ContactLocations from '../Contact/ContactLocations'
import ContactFormSection from '../Contact/ContactFormSection'

export default function ContactUs() {
  return (
    <div className=''>
      <ContactHeader />
      {/* <ContactFormSection/> */}
      {/* <ContactLocations /> */}
      <div className="w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden border border-slate-200 mb-8 shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7268.604350458697!2d54.50105963555249!3d24.370789385886066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40d8b91e5561%3A0xcff88e1e90cc1200!2sMusaffah%20-%20M10%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1775298873854!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dubai Map Location"
        ></iframe>
      </div>

    </div>
  )
}
