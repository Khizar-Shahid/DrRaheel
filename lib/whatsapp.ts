export const openWhatsApp = () => {
  const phoneNumber = '+92-339-0097397'
  const message = encodeURIComponent('Hi! I would like to book an appointment for dental consultation.')
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`
  window.open(whatsappUrl, '_blank')
} 