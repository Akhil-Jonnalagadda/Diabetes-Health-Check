document.getElementById('riskForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const familyHistory = document.getElementById('familyHistory').value;
    const exercise = document.getElementById('exercise').value;

    if (isNaN(age) || isNaN(weight) || age <= 0 || weight <= 0) {
        alert("Please enter valid numbers for age and weight.");
        return;
    }

    const riskScore = calculateRisk(age, weight, familyHistory, exercise);

    document.getElementById('riskScore').textContent = `Your risk score is: ${riskScore}`;

    const lifestyleTips = document.getElementById('lifestyleTips');
    lifestyleTips.innerHTML = '';

    const ageRange = getAgeRange(age); // Determine age range for tips

    if (riskScore <= 3) {
        lifestyleTips.innerHTML = `<li>${getLifestyleTips(ageRange, "lowRisk")}</li>`;
    } else if (riskScore <= 6) {
      lifestyleTips.innerHTML = `<li>${getLifestyleTips(ageRange, "mediumRisk")}</li>`;
    } else {
        lifestyleTips.innerHTML = `<li>${getLifestyleTips(ageRange, "highRisk")}</li>`;
    }

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('prevention').style.display = 'block';
});

function calculateRisk(age, weight, familyHistory, exerciseLevel) {
    let score = 0;

    if (age >= 45) {
        score += 2;
    } else if (age >= 30) {
        score += 1;
    }

    if (weight > 85) {
        score += 2;
    }

    if (familyHistory === 'yes') {
        score += 2;
    }

    if (exerciseLevel === 'low') {
        score += 2;
    } else if (exerciseLevel === 'moderate') {
        score += 1;
    }
    return score;
}

function getAgeRange(age) {
    if (age < 30) {
        return "20s";
    } else if (age < 40) {
        return "30s";
    } else if (age < 50) {
        return "40s";
    } else if (age < 60) {
        return "50s";
    } else {
        return "60sAndBeyond";
    }
}

function getLifestyleTips(ageRange, riskLevel) {
    const tips = {
        "20s": {
            lowRisk: "Maintain a healthy lifestyle and keep monitoring your health.",
            mediumRisk: "Consider improving your diet and increasing physical activity.",
            highRisk: "Consult a doctor for evaluation and prevention strategies."
        },
        "30s": {
            lowRisk: "Maintain a healthy lifestyle and keep monitoring your health.",
            mediumRisk: "Consider improving your diet and increasing physical activity.",
            highRisk: "Consult a doctor for evaluation and prevention strategies."
        },
        "40s": {
            lowRisk: "Maintain a healthy lifestyle and keep monitoring your health.",
            mediumRisk: "Consider improving your diet and increasing physical activity.",
            highRisk: "Consult a doctor for evaluation and prevention strategies."
        },
        "50s": {
            lowRisk: "Maintain a healthy lifestyle and keep monitoring your health.",
            mediumRisk: "Consider improving your diet and increasing physical activity.",
            highRisk: "Consult a doctor for evaluation and prevention strategies."
        },
        "60sAndBeyond": {
            lowRisk: "Maintain a healthy lifestyle and keep monitoring your health.",
            mediumRisk: "Consider improving your diet and increasing physical activity.",
            highRisk: "Consult a doctor for evaluation and prevention strategies."
        }
    };
    return tips[ageRange][riskLevel];
}