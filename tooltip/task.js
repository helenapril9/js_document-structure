document.addEventListener('DOMContentLoaded', () => {
  const tooltips = document.querySelectorAll('.has-tooltip');

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const existingTooltip = document.querySelector('.tooltip_active');
      if (existingTooltip) {
        existingTooltip.classList.remove('tooltip_active');
      }

      if (!tooltip.classList.contains('active')) {
        tooltip.classList.add('active');

        let tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        tooltipElement.innerText = tooltip.getAttribute('title');
        document.body.appendChild(tooltipElement);

        const tooltipRect = tooltip.getBoundingClientRect();
        tooltipElement.style.left = `${tooltipRect.left}px`;
        tooltipElement.style.top = `${tooltipRect.bottom}px`;
        tooltipElement.classList.add('tooltip_active');
      } else {
        tooltip.classList.remove('active');
        const tooltipElement = document.querySelector('.tooltip');
        tooltipElement.remove();
      }
    });
  });

  document.addEventListener('click', (event) => {
    const tooltips = document.querySelectorAll('.has-tooltip');
    tooltips.forEach((tooltip) => {
      if (!tooltip.contains(event.target)) {
        tooltip.classList.remove('active');
      }
    });

    const tooltipElement = document.querySelector('.tooltip');
    if (tooltipElement) {
      tooltipElement.remove();
    }
  });
});
