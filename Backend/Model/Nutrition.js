const mongoose = require('mongoose');

const NutritionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    meals: [
        {
            name: String,
            calories: Number,
            protein: Number,
            carbs: Number,
            fats: Number
        }
    ],
    date: { type: Date, default: Date.now }
});

const Nutrition = mongoose.model('Nutrition', NutritionSchema);
module.exports = Nutrition;
