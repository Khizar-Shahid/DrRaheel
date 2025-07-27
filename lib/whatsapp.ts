export const openPhoneDialer = () => {
  const phoneNumber = '+92-339-0097397'
  
  // Try multiple approaches for better compatibility
  if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
    // Mobile devices - use tel: protocol
    window.location.href = `tel:${phoneNumber}`
  } else {
    // Desktop - try to open phone dialer or show number
    try {
      window.open(`tel:${phoneNumber}`, '_self')
    } catch (error) {
      // Fallback - copy to clipboard and show alert
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard. Please call this number to book your appointment.`)
      }).catch(() => {
        alert(`Please call ${phoneNumber} to book your appointment.`)
      })
    }
  }
}

// Keep the old function for backward compatibility if needed
export const openWhatsApp = () => {
  const phoneNumber = '+92-339-0097397'
  const message = encodeURIComponent('Hi! I would like to book an appointment for dental consultation.')
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`
  window.open(whatsappUrl, '_blank')
} 