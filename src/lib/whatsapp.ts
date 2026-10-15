const WHATSAPP_PHONE_NUMBER = "254101517171";
const BOOKING_MESSAGE = "Hello, I would like to book an appointment at SkyLife Medical Clinic.";

export const getWhatsAppUrl = (message = BOOKING_MESSAGE) =>
	`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_BOOKING_URL = getWhatsAppUrl();