# Field Guide to Mounts & Critters

A mobile companion app for **World of Warcraft** collectors.  
Track your **mounts**, **pets**, and more – wherever you are.

> ⚠️ This is a work in progress. Functionality and UI may change.

---

## 🔧 Tech Stack

- **Frontend:** [Ionic](https://ionicframework.com/) with [Angular](https://angular.io/)
- **Backend:** [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **API:** [Blizzard Developer API](https://develop.battle.net/)
- **Authentication:** Blizzard OAuth 2.0

---

## 📱 Features (Planned / In Development)

- ✅ Mount & Pet collection tracking  
- 🔄 Sync via Blizzard Battle.net account  
- 🌍 Region & realm selector  
- 🔍 Search & filter collections  
- 📊 Stats overview (e.g. % collected, missing, rare finds)

---

## 🚀 Setup Instructions

### 🔹 1. Clone the repo

```bash
git clone https://github.com/your-username/field-guide-wow.git
cd field-guide-mounts-critters
````

---

### 🔹 2. Frontend Setup

```bash
cd frontend
npm install
ionic serve
```

---

### 🔹 3. Backend Setup

```bash
cd backend
npm install
# Create a .env file from the example
cp .env.example .env
node server.js
```

---

### 🔹 4. .env Configuration (in `/backend`)

Create a `.env` file:

```
BLIZZARD_CLIENT_ID=your-client-id
BLIZZARD_CLIENT_SECRET=your-client-secret
```

---

## 📝 Notes

* Make sure you have a valid **Blizzard API client ID and secret**.
* OAuth URIs for Blizzard are region-specific. [More info here](https://develop.battle.net/documentation/guides/using-oauth).
* Frontend and backend must be run separately in development.

---

## 🔒 Disclaimer

This app uses data provided by Blizzard Entertainment® but is not endorsed or affiliated with Blizzard in any way.
Blizzard is the source of the data, and all trademarks remain property of their respective owners.

---

## 📅 TODO

* [ ] Blizzard OAuth login & account linking
* [ ] UI for mount and pet collection
* [ ] Mount detail views
* [ ] TTL data caching on backend
* [ ] Region/realm selection support
* [ ] Privacy policy and data disclaimer

---

## 📄 License

MIT – see `LICENSE.md` for details.
