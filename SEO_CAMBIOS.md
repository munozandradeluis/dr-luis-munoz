# Cambios SEO realizados

Proyecto preparado para `https://drluismunozandrade.com/`.

## Cambios técnicos principales
- Canonical autocanónica añadida a todas las páginas indexables.
- La portada declara como canónica `https://drluismunozandrade.com/`.
- Redirección permanente de `www.drluismunozandrade.com` hacia la versión sin `www`.
- Redirección permanente de `/index.html` hacia `/`.
- Redirección del alias estable `dr-luis-munoz.vercel.app` hacia el dominio principal.
- `robots.txt` creado con referencia al sitemap.
- `sitemap.xml` reconstruido con solo URLs indexables y fecha de actualización.
- `agenda.html` y `modal-confirmacion.html` marcadas como `noindex,follow`.
- Duplicados evidentes consolidados mediante redirección:
  - `nodulo-tiroides.html` → `nodulo-tiroideo.html`
  - `tumor-recto.html` → `cancer-recto.html`
  - `tumor-tiroides.html` → `cancer-tiroides.html`
  - `tumor-pancreas.html` → `cancer-pancreas.html`
- El archivo defectuoso de hemorroides se renombró a `hemorroides-quito.html`.
- Enlaces internos actualizados para apuntar a las URLs canónicas.
- Se añadieron enlaces relacionados visibles en portada, coloproctología y hernias.
- Se añadieron descripciones SEO a páginas clave que no tenían.
- Se mejoraron títulos SEO de páginas clave.
- Se añadió marcado estructurado básico `Person` + `WebSite` a la portada.
- Se corrigió la imagen social rota de la página `hemorroides-quito.html`.

## Después de publicar
1. Confirmar que `https://www.drluismunozandrade.com/` redirige a `https://drluismunozandrade.com/`.
2. Confirmar que `https://drluismunozandrade.com/index.html` redirige a `/`.
3. Abrir `https://drluismunozandrade.com/robots.txt`.
4. Abrir `https://drluismunozandrade.com/sitemap.xml`.
5. En Search Console, volver a enviar el sitemap.
6. Solicitar indexación solo de las páginas prioritarias.
