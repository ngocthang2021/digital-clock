const format = document.querySelector('.format');
const formatSwitchBtn = document.querySelector('.format-switch-btn');

function updateTime() {
    let today = new Date();

    // Get current Time
    let hours = today.getHours();
    let minutes = today.getMinutes();
    var seconds = today.getSeconds();

    // Get current Date
    let dayName = today.toLocaleString('defalut', {weekday: 'long'}) + ",";
    let dayNumber = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    let year = today.getFullYear();

    // Change AM/PM period
    document.querySelector('.period').innerText = hours >= 12 ? "PM" : "AM";

    var formatValue = formatSwitchBtn.getAttribute('data-format');

    if (formatValue === '12') {
        hours = hours > 12 ? hours % 12 : hours
    }
    
    // Add 0 to value < 10
    if (hours < 10) {
        hours = '0' + hours;
    };

    if (seconds < 10) {
        seconds = '0' + seconds;
    };
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;
    document.querySelector('.day-name').innerText = dayName;
    document.querySelector('.day-number').innerText = dayNumber;
    document.querySelector('.month').innerText = month;
    document.querySelector('.year').innerText = year;
};

// Switch Format
formatSwitchBtn.addEventListener('click', () => {
    formatSwitchBtn.classList.toggle('active');

    var formatValue = formatSwitchBtn.getAttribute('data-format');

    if (formatValue === '12') {
        formatSwitchBtn.setAttribute('data-format', '24');
    } else {
        formatSwitchBtn.setAttribute('data-format', '12');
    }
});

setInterval(updateTime, 1000);