# swt-prototyp

Frontend-Prototyp für ein Ticketkaufsystem der SWT und damit letztendlich der VRT. Entwickelt wurde eine für responsive SPA mit PWA Support. Der Fokus wurde dabei jedoch auf mobile Endgeräte gelegt.

# Aufbau

Zum Scaffolding wurde der vom Vue Team empfohlene Command

        npm init vue@latest

benutzt mit vue-router für SPA Routing.

Für die Karte wurde die Javascript Bibliothek [leaflet.js](https://leafletjs.com) benutzt.

Entrypoint ist App.vue, die Views welche über Links erreichbar sind befinden sich im _views_ Ordner. Kleinere Kompenenten sind im _components_ Ordner.

# Konventionen

## Designsystem

Das Styling wurde fast ausschließlich mit [Tailwind CSS](https://tailwindcss.com/) gemacht.

## JS

Es wird die Composition API benutzt, außerdem wird die

        <script setup>

Syntax verwendet.
Variablen sind wenn möglich in camelCase notiert.

## Icons

Benutzt werden hauptsächlich Icons von [Font Awesome](https://fontawesome.com/) im Solid Design.

# Views

__Customer:__

- [x] Login
- [x] Routenplanung
- [x] Meine Tickets
- [x] Reiseplanung
- [x] Registrieren
- [x] Tickets
- [x] Map Integration
  - [x] Pin Integration
- [x] Verlauf
- [x] Favoriten
- [x] Einstellungen

__Admin:__
- [x] Ticket Variante hinzufügen
- [x] Preise für Variante ändern pro Preisstufe
- [x] Änderungen rückgangig machen
- [ ] Variante löschen
- [ ] Preisstufe für Variante löschen 
- [x] "Jump to change" bei Klick auf ChangeTile

### Nice to have

- [x] Responsive
- [x] Darkmode
