const startDate = new Date('2025-03-09');
const endDate = new Date('2025-09-01');
const currentDate = new Date();

const totalDuration = endDate - startDate;
const elapsedDuration = currentDate - startDate;
const percentage = Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100));

document.querySelector('.progress-bar').style.width = percentage + '%';
document.querySelector('.progress-bar').textContent = Math.round(percentage) + '%';
