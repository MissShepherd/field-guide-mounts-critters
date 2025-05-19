# Mounts & Menagerie: A Collector's Compendium

A mobile companion app for **World of Warcraft** collectors.  
Track your **mounts**, **pets**, and more – wherever you are.

> ⚠️ This is a work in progress. Functionality and UI may change.

## 🔧 Tech Stack

- **Frontend:** [Ionic](https://ionicframework.com/) with [Angular](https://angular.io/)
- **API:** [Blizzard Developer API](https://develop.battle.net/)
- **Authentication:** Blizzard OAuth 2.0

## 📱 Features (Planned / In Development)

- ✅ Mount & Pet collection tracking  
- 🔄 Sync via Blizzard Battle.net account  
- 🌍 Region & realm selector  
- 🔍 Search & filter collections  
- 📊 Stats overview (e.g. % collected, missing, rare finds)

## 📦 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/wow-companion-app.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app locally:
   ```bash
   ionic serve
   ```

## 📝 Notes

- Make sure you have a valid **Blizzard API client ID and secret**.
- OAuth URIs for Blizzard are region-specific. [More info here](https://develop.battle.net/documentation/guides/using-oauth).

## 🔒 Disclaimer

This app uses data provided by Blizzard Entertainment® but is not endorsed or affiliated with Blizzard in any way.  
Blizzard is the source of the data, and all trademarks remain property of their respective owners.

---

## 📅 TODO

- [ ] Add login & account linking
- [ ] Create UI for collection viewer
- [ ] Store and cache data with TTL
- [ ] Add support for toys and achievements
- [ ] Publish a privacy policy and data disclaimer

## 📄 License

MIT – see `LICENSE.md` for details.
