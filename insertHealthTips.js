// insertHealthTips.js

const mongoose = require('mongoose');
const HealthTip = require('./models/healthTip');

// Array of health tips to be inserted into the database
const healthTipsData = [
    {
      "tip": "Take a teaspoon of vinegar before a meal",
      "description": "Consuming vinegar before a meal may help with digestion and contribute to better blood sugar control.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28292654/"
    },
    {
      "tip": "Avoid spiking insulin earlier in the day",
      "description": "Consuming carbohydrates with a lower glycemic index earlier in the day may help minimize insulin spikes and promote stable energy levels.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/23446906/"
    },
    {
      "tip": "Eat more protein to increase calorie burn throughout the day",
      "description": "Protein has a higher thermic effect compared to carbohydrates and fats, leading to increased calorie expenditure.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/3802961/"
    },
    {
      "tip": "Consider fasting for health benefits",
      "description": "Intermittent fasting can promote metabolic health, improve insulin sensitivity, support weight loss, and have positive effects on brain function and longevity.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6128599/"
    },
    {
      "tip": "Stay hydrated",
      "description": "Adequate water intake is essential for various bodily functions, including digestion, nutrient absorption, temperature regulation, and waste removal.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2908954/"
    },
    {
      "tip": "Incorporate fiber-rich foods",
      "description": "Fiber-rich foods help promote digestion, satiety, and a healthy gut microbiome, and may reduce the risk of chronic diseases.",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4420681/"
    },
    {
      "tip": "Prioritize quality sleep",
      "description": "Adequate and quality sleep is essential for cognitive function, mood regulation, immune function, and hormone balance.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28401449/"
    },
    {
      "tip": "Practice mindful eating",
      "description": "Mindful eating involves paying attention to the sensory experience of eating, promoting satisfaction, preventing overeating, and fostering a healthier relationship with food.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/29318641/"
    },
    {
      "tip": "Incorporate strength training",
      "description": "Strength training exercises help build muscle mass, increase bone density, improve metabolic health, and support overall strength and physical function.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/23676423/"
    },
    {
      "tip": "Reduce processed and sugary foods",
      "description": "Minimizing intake of processed and sugary foods can help reduce inflammation, support weight management, and lower the risk of chronic diseases.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/34043752/"
    },
    {
      "tip": "Stay physically active throughout the day",
      "description": "Incorporating movement into daily routine helps improve circulation, boost energy levels, and counteract the negative effects of prolonged sitting.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28515062/"
    },
    {
      "tip": "Practice stress management techniques",
      "description": "Stress management techniques such as deep breathing, meditation, and yoga promote relaxation, reduce cortisol levels, and improve resilience to stress.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/30465581/"
    }
  ]

// Function to insert health tips into the database
async function insertHealthTips() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://michaelesparza35:HvEsPm51zZOkPocp@cluster0.nezzbkf.mongodb.net/healthapp', { useNewUrlParser: true, useUnifiedTopology: true });

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