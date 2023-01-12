# swt-prototyp

Frontend-Prototyp für ein Ticketkaufsystem der SWT und damit letztendlich der VRT. Entwickelt wurde eine für mobile Geräte optimierte SPA mit PWA Support.

# Aufbau

Zum Scaffolding wurde der vom Vue Team empfohlene Command

        npm init vue@latest

benutzt mit vue-router für SPA Routing.

Auch wurde das Vite-PWA Plugin eingebunden.

Für die Karte wurde die Javascript Bibliothek leaflet.js benutzt.

Entrypoint ist App.vue, die Views welche über Links erreichbar sind befinden sich im _views_ Ordner. Kleinere Kompenenten sind im _components_ Ordner.

# Konventionen

### Designsystem

Das Styling wurde fast ausschließlich mit Tailwind CSS gemacht.

### JS

Es wird die Composition API benutzt, außerdem wird die

        <script setup>

Syntax verwendet.

### Icons

Benutzt werden hauptsächlich Icons von FontAwesome im Solid Design.

### Views

- [x] Login
- [x] Routenplanung
- [x] Meine Tickets
  - [x] Zoom-In für QR Code
- [x] Reiseplanung
- [x] Registrieren
- [ ] Tickets
  - [ ] Buchen
- [x] Map Integration
  - [ ] Pin Integration
