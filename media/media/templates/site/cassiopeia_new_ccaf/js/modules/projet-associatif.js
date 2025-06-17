
  const cards = document.querySelectorAll('.objective-card');

  function getDirection(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle >= -45 && angle < 45) return 'right';
    if (angle >= 45 && angle < 135) return 'bottom';
    if (angle >= -135 && angle < -45) return 'top';
    return 'left';
  }

  cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      const dir = getDirection(e, card);
      card.setAttribute('data-dir', dir);
    });
  });

