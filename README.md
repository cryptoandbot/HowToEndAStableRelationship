# Live Football Betting Prediction Bot

A **Telegram bot** that delivers **real-time football match predictions**, complete with odds and betting tips, updated hourly.
It’s built for continuous operation and supports major European competitions.

---

## Supported Leagues

* **Premier League (England)**
* **La Liga (Spain)**
* **Bundesliga (Germany)**
* **Serie A (Italy)**
* **Ligue 1 (France)**
* **UEFA Champions League**
* **UEFA Europa League**

---

## Features

* Sends live football predictions directly to Telegram.
* Displays league name, odds, and betting tips.
* Runs automatically 24/7 with scheduled updates.
* Easily extendable with APIs such as **SofaScore** or **API-Football**.

---

## Setup Guide

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/live-football-prediction-bot.git
   cd live-football-prediction-bot
   ```

2. **Add your Telegram credentials**
   Open `main.py` and update:

   ```python
   TELEGRAM_TOKEN = "YOUR_BOT_TOKEN"
   CHAT_ID = "YOUR_CHAT_ID"
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the bot**

   ```bash
   python main.py
   ```

---

## Notes

* The bot can run on any VPS or cloud service for 24/7 operation.
* Supports expansion for more leagues or advanced analytics.
* Integrations with real-time APIs can enhance prediction accuracy.
