# Configuración del Proyecto INN Services

## Estructura

Tu proyecto ahora está configurado como un sitio HTML estático servido por Next.js:

- **`public/index.html`** - Página de inicio
- **`public/servicios.html`** - Página de servicios
- **`public/blog.html`** - Página de blog
- **`public/styles.css`** - Estilos principales

## Cómo Funciona

Las URLs se han configurado para funcionar correctamente:

- `/` → `public/index.html`
- `/servicios` → `public/servicios.html`
- `/blog` → `public/blog.html`

## Próximos Pasos

1. **Agregar imágenes**: Copia tus imágenes a `public/images/`
2. **Probar localmente**: El dev server está corriendo en el preview
3. **Verificar links**: Los links internos en los HTML hacen referencia a `servicios.html` y `blog.html`

## Nota Importante

Si necesitas hacer cambios a los HTML o CSS:
- Edita los archivos en `public/`
- Los cambios se reflejarán automáticamente en el navegador

¡Tu sitio está listo! 🚀
