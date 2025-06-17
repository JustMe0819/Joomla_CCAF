document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('multiStepForm');
  const steps = form.querySelectorAll('.bv-step-content');
  const progressSteps = document.querySelectorAll('.bv-step');
  let currentStep = 0;

  function showStep(n) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === n);
      progressSteps[i].classList.toggle('active', i === n);
    });
    currentStep = n;
  }

  function validateStep(n) {
    const step = steps[n];

    // Étape 2 spéciale : validation checkbox avec “Peu importe”
    if (n === 1) {
      const checkboxes = step.querySelectorAll('input[type="checkbox"][name="service[]"]');
      const peuImporte = step.querySelector('#peu_importe');
      const isChecked = Array.from(checkboxes).some(cb => cb.checked);
      if (!isChecked) {
        alert("Veuillez cocher au moins une option dans 'Où souhaitez-vous aider ?'");
        return false;
      }
      return true;
    }

    // Validation classique pour les autres étapes
    const inputs = step.querySelectorAll('input, textarea');
    for (const input of inputs) {
      if (input.hasAttribute('required')) {
        if (input.type === 'checkbox') {
          // Checkbox required (ex: dernière étape)
          const checkboxes = step.querySelectorAll('input[type=checkbox][name="' + input.name + '"]');
          if (![...checkboxes].some(c => c.checked)) {
            alert('Veuillez cocher au moins une option.');
            return false;
          }
        } else if (!input.value.trim()) {
          alert(`Veuillez remplir le champ : "${input.placeholder || input.name}"`);
          input.focus();
          return false;
        }
      }
    }
    return true;
  }

  // Gestion “Peu importe” à l’étape 2
  const step2 = steps[1];
  const serviceCheckboxes = step2.querySelectorAll('input[type="checkbox"][name="service[]"]');
  const peuImporte = step2.querySelector('#peu_importe');

  peuImporte.addEventListener('change', function() {
    if (this.checked) {
      serviceCheckboxes.forEach(cb => {
        if (cb !== this) cb.checked = false;
      });
    }
  });

  serviceCheckboxes.forEach(cb => {
    if (cb !== peuImporte) {
      cb.addEventListener('change', function() {
        if (this.checked) {
          peuImporte.checked = false;
        }
      });
    }
  });

  form.querySelectorAll('.bv-btn-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        if (currentStep < steps.length - 1) showStep(currentStep + 1);
      }
    });
  });

  form.querySelectorAll('.bv-btn-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) showStep(currentStep - 1);
    });
  });

  form.addEventListener('submit', e => {
    if (!validateStep(currentStep)) {
      e.preventDefault();
    }
  });

  showStep(0);
});
