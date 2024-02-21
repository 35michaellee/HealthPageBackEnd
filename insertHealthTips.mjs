

import mongoose from 'mongoose';
import HealthTip from './models/healthTip.mjs';

// Array of health tips to be inserted into the database
const healthTipsData = [
    {
      "tip": "Take a teaspoon of vinegar before a meal",
      "description": "Consuming vinegar before a meal may help with digestion and contribute to better blood sugar control.",
      "url": "https://www.uchicagomedicine.org/forefront/health-and-wellness-articles/debunking-the-health-benefits-of-apple-cider-vinegar"
    },
    {
      "tip": "Avoid spiking insulin earlier in the day",
      "description": "Consuming carbohydrates with a lower glycemic index earlier in the day may help minimize insulin spikes and promote stable energy levels.",
      "url": "https://www.healthline.com/nutrition/blood-sugar-spikes#TOC_TITLE_HDR_3"
    },
    {
      "tip": "Eat more protein to increase calorie burn throughout the day",
      "description": "Protein has a higher thermic effect compared to carbohydrates and fats, leading to increased calorie expenditure.",
      "url": "https://www.revolution-pts.com/blog/understanding-the-thermic-effect-of-food#:~:text=The%20energy%20required%20to%20digest,the%20energy%20provided%20by%20it.&text=So%20that%20means%20protein%20tops,used%20for%20digestion%20and%20metabolism."
    },
    {
      "tip": "Consider fasting for health benefits",
      "description": "Intermittent fasting can promote metabolic health, improve insulin sensitivity, support weight loss, and have positive effects on brain function and longevity.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4516560/"
    },
    {
      "tip": "Stay hydrated",
      "description": "Adequate water intake is essential for various bodily functions, including digestion, nutrient absorption, temperature regulation, and waste removal.",
      "url": "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/water-essential-to-your-body"
    },
    {
      "tip": "Incorporate fiber-rich foods",
      "description": "Fiber-rich foods help promote digestion, satiety, and a healthy gut microbiome, and may reduce the risk of chronic diseases.",
      "url": "https://www.healthline.com/nutrition/foods-high-in-soluble-fiber"
    },
    {
      "tip": "Prioritize quality sleep",
      "description": "Adequate and quality sleep is essential for cognitive function, mood regulation, immune function, and hormone balance.",
      "url": "https://www.linkedin.com/pulse/unlocking-power-sleep-crucial-role-health-wellness-malathy-saranya-geksc/?trk=article-ssr-frontend-pulse_more-articles_related-content-card"
    },
    {
      "tip": "Practice mindful eating",
      "description": "Mindful eating involves paying attention to the sensory experience of eating, promoting satisfaction, preventing overeating, and fostering a healthier relationship with food.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29318641/"
    },
    {
      "tip": "Incorporate strength training",
      "description": "Strength training exercises help build muscle mass, increase bone density, improve metabolic health, and support overall strength and physical function.",
      "url": "https://extension.usu.edu/nutrition/research/mindful-eating"
    },
    {
      "tip": "Reduce processed and sugary foods",
      "description": "Minimizing intake of processed and sugary foods can help reduce inflammation, support weight management, and lower the risk of chronic diseases.",
      "url": "https://www.scripps.org/news_items/4232-six-keys-to-reducing-inflammation"
    },
    {
      "tip": "Stay physically active throughout the day",
      "description": "Incorporating movement into daily routine helps improve circulation, boost energy levels, and counteract the negative effects of prolonged sitting.",
      "url": "https://www.petesrealfood.com/blogs/blog/8-tips-to-incorporate-more-daily-movement-in-your-routine#:~:text=Schedule%20Regular%20Movement%20Breaks&text=Breaking%20up%20long%20periods%20of,you%20have%20a%20sedentary%20job."
    },
    {
      "tip": "Practice stress management techniques",
      "description": "Stress management techniques such as deep breathing, meditation, and yoga promote relaxation, reduce cortisol levels, and improve resilience to stress.",
      "url": "https://www.healthline.com/nutrition/ways-to-lower-cortisol#breathing-exercises"
    }
  ]

// Function to insert health tips into the database
async function insertHealthTips() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://michaelesparza35:HvEsPm51zZOkPocp@cluster0.nezzbkf.mongodb.net/healthapp', { useNewUrlParser: true, useUnifiedTopology: true });
    await HealthTip.deleteMany();
    // Insert health tips into the database
    await HealthTip.insertMany(healthTipsData);

    console.log('Health tips inserted successfully!');
  } catch (err) {
    console.error('Error inserting health tips:', err);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

// Call the function to insert health tips
insertHealthTips();