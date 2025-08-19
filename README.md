# 📰 Fake News Analyzer & Awareness Portal  

An **interactive web-based platform** built with **Python (Flask)** and modern frontend tools to **detect fake news**, create awareness, and visualize statistics with engaging animations.  

---

## 🚀 Features  

✅ **News Detection** – Paste a headline or article and get a fake/real prediction with confidence scores.  
✅ **Interactive Reports** – Pie charts and graphs showing fakeness vs correctness.  
✅ **Animated Dashboard** – Recent fake news stories (default: Pakistan) with smooth animations.  
✅ **Country Selector** – Choose any country to view its top circulating fake news.  
✅ **Global & Local Stats** – Graphs of past fake news cases worldwide and in Pakistan.  
✅ **Awareness Section** – Laws & punishments for spreading fake news with images/icons.  
✅ **Responsive UI** – Works seamlessly on desktop and mobile with animations.  

---

## 🛠️ Tech Stack  

**Backend:**  
- Python 3.x  
- Flask  
- Scikit-learn / NLTK (for fake news detection)  
- Pandas, NumPy  

**Frontend:**  
- HTML, CSS, JavaScript  
- Bootstrap / TailwindCSS  
- Plotly.js or Chart.js (graphs & reports)  
- Anime.js / GSAP (animations)  

**Hosting (Optional):**  
- Hugging Face Spaces (Gradio / Streamlit)  
- Replit / Vercel / Local Flask Server  

---

## 📂 Project Structure  

```bash
Fake-News-Analyzer/
│
├── app.py                # Main Flask application
├── requirements.txt      # Python dependencies
├── static/               # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
├── templates/            # HTML templates (Jinja2)
│   ├── index.html        # Home page with animated news
│   ├── analyze.html      # News analysis page
│   ├── laws.html         # Laws & punishments
│   ├── stats.html        # Graphs for past fake news
│   └── country.html      # Country-specific fake news
├── models/               # ML model for fake news detection
│   └── fake_news_model.pkl
├── data/                 # Sample datasets
│   └── fake_news.csv
└── README.md             # Project documentation
