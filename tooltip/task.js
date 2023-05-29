document.addEventListener('DOMContentLoaded', function () {
    var tooltips = document.querySelectorAll('.has-tooltip');   
    tooltips.forEach(function (tooltip) {
      tooltip.addEventListener('click', function (event) {
        event.preventDefault(); 
        event.stopPropagation();   
        var existingTooltip = document.querySelector('.tooltip_active');  
        if (existingTooltip) {
          existingTooltip.classList.remove('tooltip_active'); 
        }
        var title = tooltip.getAttribute('title'); 
        var tooltipElement = document.createElement('div'); 
        tooltipElement.classList.add('tooltip'); 
        tooltipElement.innerText = title;           
        tooltip.appendChild(tooltipElement);
          tooltipElement.classList.add('tooltip_active'); 
      });
    });
    document.addEventListener('click', function (event) {
      var tooltip = document.querySelector('.tooltip_active'); 
      if (tooltip && !tooltip.contains(event.target)) {
        tooltip.classList.remove('tooltip_active'); 
      }
    });
  });
  