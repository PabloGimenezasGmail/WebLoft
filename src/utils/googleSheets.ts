// Función para enviar datos a Google Sheets usando Google Apps Script
export const submitToGoogleSheets = async (formData: {
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  message: string;
}) => {
    try {
        // URL de tu Google Apps Script Web App
        // Debes reemplazar esto con tu URL real después de crear el script
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxX5o0Y1LwqPTUxUDxk88XFc7HZwR2sppz9AcJPgVr4_G7g7DOMmcLpl1W_nr1ae986/exec'
        
        await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necesario para Google Apps Script
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'AutomateFlow Website'
        }),
        })

        // Con no-cors no podemos leer la respuesta, pero si llega aquí significa que se envió
        return { success: true }
    } catch (error) {
        console.error('Error sending to Google Sheets:', error)
        return { success: false, error }
    }
}