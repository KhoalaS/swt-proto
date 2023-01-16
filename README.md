# swt-prototyp

Frontend-Prototyp für ein Ticketkaufsystem der SWT und damit letztendlich der VRT. Entwickelt wurde eine für mobile Geräte optimierte SPA mit PWA Support.

# Aufbau

Zum Scaffolding wurde der vom Vue Team empfohlene Command

        npm init vue@latest

benutzt mit vue-router für SPA Routing.

Für die Karte wurde die Javascript Bibliothek [leaflet.js](https://leafletjs.com) benutzt.

Entrypoint ist App.vue, die Views welche über Links erreichbar sind befinden sich im _views_ Ordner. Kleinere Kompenenten sind im _components_ Ordner.

# Konventionen

### Designsystem

Das Styling wurde fast ausschließlich mit [Tailwind CSS](https://tailwindcss.com/) gemacht.

### JS

Es wird die Composition API benutzt, außerdem wird die

        <script setup>

Syntax verwendet.
Variablen sind wenn möglich in camelCase notiert.

### Icons

Benutzt werden hauptsächlich Icons von [Font Awesome](https://fontawesome.com/) im Solid Design.

### Views

- [x] Login
- [x] Routenplanung
- [x] Meine Tickets
  - [x] Zoom-In für QR Code
- [x] Reiseplanung
- [x] Registrieren
- [x] Tickets
  - [x] Buchen
- [x] Map Integration
  - [x] Pin Integration
- [x] Verlauf
- [x] Favoriten
- [x] Einstellungen
