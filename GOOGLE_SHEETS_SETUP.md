# Configuración de Google Sheets para Formulario de Contacto

## 📋 Pasos para Configurar la Integración

### 1. Crear Google Spreadsheet
1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala "AutomateFlow - Contactos"
4. Copia el ID del spreadsheet desde la URL (la parte entre `/d/` y `/edit`)
   ```
   https://docs.google.com/spreadsheets/d/[ESTE_ES_EL_ID]/edit
   ```

### 2. Configurar Google Apps Script
1. Ve a [Google Apps Script](https://script.google.com)
2. Crea un nuevo proyecto
3. Nómbralo "AutomateFlow Contact Form"
4. Borra el código predeterminado
5. Copia y pega el código del archivo `google-apps-script.js`
6. Reemplaza `TU_ID_DE_SPREADSHEET` con el ID real de tu spreadsheet
7. Guarda el proyecto (Ctrl+S)

### 3. Implementar como Web App
1. En Google Apps Script, haz clic en **"Implementar"** > **"Nueva implementación"**
2. Configuración:
   - **Tipo**: Aplicación web
   - **Ejecutar como**: Yo (tu email)
   - **Acceso**: Cualquiera
3. Haz clic en **"Implementar"**
4. Autoriza los permisos necesarios
5. Copia la **URL de la aplicación web**

### 4. Configurar el Frontend
1. Abre el archivo `src/utils/googleSheets.ts`
2. Reemplaza `YOUR_SCRIPT_ID` en `GOOGLE_SCRIPT_URL` con la URL que copiaste
3. La URL debería verse así:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec'
   ```

### 5. Probar la Integración
1. Ejecuta tu aplicación Next.js: `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario y envíalo
4. Verifica que los datos aparezcan en tu Google Sheet

## 📊 Estructura de la Hoja de Cálculo

El script creará automáticamente estas columnas:
- **Fecha**: Timestamp del envío
- **Nombre**: Nombre completo del usuario
- **Email**: Dirección de correo electrónico
- **Teléfono**: Número de teléfono (opcional)
- **Empresa**: Empresa (opcional)
- **Mensaje**: Descripción del proyecto
- **Origen**: Siempre será "AutomateFlow Website"

## 🔧 Solución de Problemas

### Error: "No se puede acceder al spreadsheet"
- Verifica que el ID del spreadsheet sea correcto
- Asegúrate de que la hoja sea accesible por el script

### Error: "Script no autorizado"
- Vuelve a implementar el script
- Verifica los permisos de acceso

### El formulario no envía datos
- Revisa la consola del navegador para errores
- Verifica que la URL del script sea correcta
- Asegúrate de que el script esté implementado como "Cualquiera" puede acceder

## 🔒 Seguridad y Privacidad

- Los datos se envían directamente a tu Google Sheet personal
- No se almacenan en servidores externos
- Solo tú tienes acceso a los datos recopilados
- Considera implementar validación adicional en el script

## 📧 Alternativa: Formspree

Si prefieres una solución más simple, puedes usar Formspree:
1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Configura un nuevo formulario
4. Usa la función `submitToFormspree` en lugar de `submitToGoogleSheets`
5. Configura Formspree para enviar datos a Google Sheets automáticamente

## 🎯 Funcionalidades Implementadas

✅ Envío asíncrono de datos
✅ Estados de carga y confirmación
✅ Validación de formulario
✅ Limpieza automática después del envío
✅ Manejo de errores
✅ Indicadores visuales de estado
✅ Timestamp automático
✅ Formateo automático de la hoja