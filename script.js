let currentStep = 1;
const totalSteps = 6;

function nextStep() {
    const activeStep = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
    if (activeStep) {
        activeStep.classList.remove('active');
    }

    currentStep++;

    if (currentStep <= totalSteps) {
        const nextStepEl = document.querySelector(`.quiz-step[data-step="${currentStep}"]`);
        if (nextStepEl) {
            nextStepEl.classList.add('active');
        }
        updateProgress();
    } else {
        showCalculating();
    }
}

function updateProgress() {
    const progress = (currentStep - 1) / totalSteps * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function showCalculating() {
    document.getElementById('progress').style.width = '100%';
    document.getElementById('calculating').classList.add('active');
    
    // Simular processamento para parecer "real"
    setTimeout(() => {
        window.location.href = 'sales.html';
    }, 2500);
}
