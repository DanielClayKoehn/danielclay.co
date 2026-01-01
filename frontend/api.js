const API =
  window.location.hostname === "localhost"
    ? "http://localhost:4000/api"
    : "https://api.oiland.wine/api";

export const fetchJobs = () =>
  fetch(`${API}/jobs`).then(res=>res.json());

export const updateTaskStatus = (jobId, emp, task, status, notes="") =>
  fetch(`${API}/jobs/${jobId}/employee/${emp}/task/${task}`, {
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ status, notes })
  });

