fetchJobs().then(jobs => {
  const container = document.getElementById("chart-container");

  jobs.forEach((job, i) => {
    const canvasId = `chart${i}`;
    container.innerHTML += `<div class="chart-block"><h3>${job.name}</h3><canvas id="${canvasId}"></canvas></div>`;
    
    new Chart(document.getElementById(canvasId), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [job.progress, 100 - job.progress]
        }]
      }
    });
  });
});
