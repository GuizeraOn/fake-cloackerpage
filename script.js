let currentStep = 1;
const totalSteps = 6;

function nextStep() {
    const activeStep = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
    if (activeStep) {
        activeStep.classList.remove('active');
    }

    currentStep++;
    updateProgress();

    if (currentStep <= totalSteps) {
        const nextStepEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
        if (nextStepEl) {
            nextStepEl.classList.add('active');
        }
    } else {
        showCalculating();
    }
}

function updateProgress() {
    const progress = (currentStep - 1) / totalSteps * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function showCalculating() {
    document.getElementById('calculating').classList.add('active');
    
    // Simular processamento para parecer "real"
    let percent = 0;
    const interval = setInterval(() => {
        percent += 10;
        if (percent > 100) {
            clearInterval(interval);
            window.location.href = 'sales.html';
        }
    }, 200);
}

