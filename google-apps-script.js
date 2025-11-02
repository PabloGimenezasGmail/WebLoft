/**
 * Google Apps Script para recibir datos del formulario y añadirlos a Google Sheets
 * 
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * 1. Ve a https://script.google.com/
 * 2. Crea un nuevo proyecto
 * 3. Pega este código
 * 4. Reemplaza 'TU_ID_DE_SPREADSHEET' con el ID real de tu Google Sheet
 * 5. Guarda el proyecto
 * 6. Ve a Implementar > Nueva implementación
 * 7. Tipo: Aplicación web
 * 8. Ejecutar como: Yo
 * 9. Acceso: Cualquiera
 * 10. Copia la URL y úsala en tu archivo googleSheets.ts
 */

// Reemplaza esto con el ID de tu Google Spreadsheet
const SPREADSHEET_ID = '1ok0OqDYcmL18IAItyGCRFMH92AWwJ5Ihw3UaLAt1Isg';
const SHEET_NAME = 'Leads'; // Nombre de la hoja
const NOTIFICATION_EMAILS = [
  'mgarciasospedra@gmail.com',
  'pablogimenezas@gmail.com',  // Reemplaza con el segundo email
  'moniica.garciia1999@gmail.com'   // Reemplaza con el tercer email
];

function doPost(e) {
  try {
    // Obtener los datos del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Abrir la hoja de cálculo
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Preparar los datos para insertar
    const timestamp = new Date(data.timestamp);
    const formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss');
    
    const rowData = [
      formattedDate,
      data.name || '',
      data.email || '',
      "'" + data.phoneNumber || '',
      data.company || '',
      'Nuevo',
      formattedDate,
      '',
      data.message || ''      
    ];
    
    // Añadir nueva fila
    sheet.appendRow(rowData);
    
    // Enviar email de notificación
    try {
      sendEmailNotification(data);
    } catch (emailError) {
      // Continuar aunque falle el email
    }
    
    // Respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Google Apps Script está funcionando')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Función para enviar email de notificación
function sendEmailNotification(data) {
  try {
    const subject = '🔔 Nuevo contacto desde AutomateFlow';
    
    const phoneValue = data.phoneNumber || 'No proporcionado';
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Nuevo Contacto</h1>
          <p style="color: white; margin: 10px 0 0 0;">AutomateFlow Website</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px;">
          <h2 style="color: #333; margin-top: 0;">Información del Contacto</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: white;">
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 150px;">Nombre:</td>
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">${data.name || 'No proporcionado'}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">
                <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email || 'No proporcionado'}</a>
              </td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Teléfono:</td>
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">
                <a href="tel:${phoneValue}" style="color: #667eea; text-decoration: none;">${phoneValue}</a>
              </td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Empresa:</td>
              <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">${data.company || 'No proporcionado'}</td>
            </tr>
            <tr style="background: white;">
              <td style="padding: 15px; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 15px;">
                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message || 'No proporcionado'}</div>
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: white; border-left: 4px solid #667eea; border-radius: 4px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Fecha:</strong> ${Utilities.formatDate(new Date(data.timestamp), Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss')}
            </p>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
              <strong>Origen:</strong> ${data.source || 'Website'}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${data.email}" style="display: inline-block; padding: 15px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Responder al Cliente
            </a>
          </div>
        </div>
        
        <div style="background: #333; padding: 20px; text-align: center;">
          <p style="color: #999; margin: 0; font-size: 12px;">
            AutomateFlow - Automatización de Procesos Empresariales
          </p>
        </div>
      </div>
    `;
    
    // Enviar el email
    MailApp.sendEmail({
      to: NOTIFICATION_EMAILS.join(','), // Une los emails con comas
      subject: subject,
      htmlBody: htmlBody,
      name: 'AutomateFlow Notificaciones'
    });
  } catch (error) {
    throw error; // Re-lanzar para que aparezca en los logs principales
  }
}