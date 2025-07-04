## 📘 1. Projektübersicht

Dieses Projekt dient der Entwicklung einer webbasierten Plattform, in der modulare Programmierbausteine (Attribute, Methoden, Events) definiert, kombiniert und dokumentiert werden können. Ziel ist es, eine Art 5GL-Programmierumgebung (Fünfte Generation), die ohne klassische Programmierung auskommt, sondern durch Konfiguration und Auswahl aus getesteten Modulen funktioniert.

---

## ✨ 2. Ziele und Nutzen

- **Wiederverwendbarkeit:** Bausteine nur einmal definieren und beliebig oft verwenden.
- **Transparenz:** Alle Änderungen automatisch protokollieren.
- **Dokumentation:** Nutzer erhalten sofort verständliche Hilfetexte zu jedem Element.
- **Flexibilität:** Zugriff von Laptop, Tablet und Smartphone über GitHub Pages.

---

## ✨ 3. Zentrale Funktionen

- **Bausteinverwaltung**
  - Anlegen, Bearbeiten und Löschen von Attributen, Methoden und Events
  - Status (z.B. „approved“, „draft“)

- **Klassendesigner**
  - Zusammenstellen neuer Klassen aus geprüften Bausteinen

- **Logbuch**
  - Automatisches Protokoll aller Änderungen mit Zeitstempel

- **Hilfedokumentation**
  - Erklärungen zu allen Feldern und Funktionen

- **Vorschau & Simulation**
  - Anzeige eines Icons und Testen der Methoden/Events

---

## ✨ 4. Technische Architektur

Frontend in HTML/JavaScript, Datenhaltung in JSON-Dateien. Keine serverseitige Logik erforderlich.

**Komponenten:**

- `index.html`: Zentrale Weboberfläche
- `logbuch.js`: Modul für automatische Log-Erfassung
- `hilfe.json`: Sammlung aller Hilfetexte
- `/data`: JSON-Dateien für Attribute, Methoden, Events

---

## ✨ 5. Workflows

**Beispiel: Neues Attribut anlegen**

1. Nutzer füllt das Formular aus.
2. Validierung prüft Pflichtfelder.
3. Das Attribut wird in `attributes.json` gespeichert.
4. Ein Log-Eintrag wird automatisch erstellt.
5. Hilfetext kann ergänzt oder aktualisiert werden.

---

## ✨ 6. Dateistruktur

/index.html
/logbuch.js
/projektbeschreibung.md
/data/
attributes.json
methods.json
events.json
/hilfe.json

yaml
Kopieren
Bearbeiten

---

## ✨ 7. Hilfetexte

Die Datei `hilfe.json` enthält strukturierte Beschreibungen aller Attribute, Methoden und Events, die in der Oberfläche eingeblendet werden können.

**Beispiel:**
```json
{
  "attribute": {
    "rotation": "Winkel der Drehung in Grad.",
    "scale": "Größe des Objekts relativ zu 1."
  }
}
✨ 8. Versionierung & Änderungen
Datum	Änderung	User
2024-07-06	Projektstart	Charlie
2024-07-06	Logbuch-Modul implementiert	Charlie
2024-07-06	Projektbeschreibung erstellt	Charlie

✨ 9. Kurzübersicht
Projektname:
5GL-Baustein-Sammlung

Ziel:
Erstellung einer modularen, webbasierten Entwicklungsumgebung ohne klassische Programmierung.

Status:
In Entwicklung

Nächster Schritt:
Implementierung der Bausteinverwaltung mit Formularen.

✨ 10. Diagramm
mermaid
Kopieren
Bearbeiten
graph TD
    User --> Frontend
    Frontend --> Logbuch
    Frontend --> Hilfedatei
    Frontend --> JSON-Daten
✨ 11. Lizenz und Nutzung
Dieses Projekt dient ausschließlich zu Lern- und Testzwecken. Eine kommerzielle Nutzung erfordert Rücksprache.

