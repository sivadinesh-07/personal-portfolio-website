
const gradesCtx = document.getElementById('Grades');
new Chart(gradesCtx, {
  type: 'line',
  data: {
    labels: ['sem1', 'sem2', 'sem3', 'sem4','sem5','sem6'],
    datasets: [{
      label: 'Grades (%)',
      data: [8.68, 8.65, 8.61, 8.40],
      borderColor: 'rgba(2, 99, 189, 1)',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      tension: 0.3,
      fill: false
    }]
  }
});

// Attendance Record (Pie Chart)
const attendanceCtx = document.getElementById('attendence');
new Chart(attendanceCtx, {
  type: 'pie',
  data: {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [85, 15],
      backgroundColor: ['#00aaedff', '#c40089ff']
    }]
  }
});

// Subject-Wise Marks (Bar Chart)
const subjectCtx = document.getElementById('subject');
new Chart(subjectCtx, {
  type: 'line',
  data: {
    labels: ['CA', 'PST', 'DAA', 'DBMS', 'OOAD','UHV'],
    datasets: [{
      label: 'previous sem',
      data: [78, 88, 92, 70, 85,70],
      backgroundColor: '#f39c12'
    }]
  }
});


const assignCtx = document.getElementById('assign');
new Chart(assignCtx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Pending'],
    datasets: [{
      data: [12, 3],
      backgroundColor: ['#00970dff', '#ff1100ff']
    }]
  }
});

// Top Skills (Radar Chart)
const skillsCtx = document.getElementById('skills');
new Chart(skillsCtx, {
  type: 'radar',
  data: {
    labels: ['Coding', 'Problem Solving', 'Creativity', 'Teamwork', 'Communication'],
    datasets: [{
      label: 'Skill Level',
      data: [4, 5, 3, 4, 5],
      borderColor: '#9b59b6',
      backgroundColor: 'rgba(155,89,182,0.3)'

    }]
  }
});

// Feedback/Satisfaction (Horizontal Bar Chart)
const feedCtx = document.getElementById('feed');
new Chart(feedCtx, {
  type: 'bar',
  data: {
    labels: ['Excellent', 'Good', 'Average', 'Poor'],
    datasets: [{
      label: 'Feedback Count',
      data: [40, 30, 20, 3],
      backgroundColor: ['#27ae60', '#2980b9', '#f1c40f', '#e74c3c']
    }]
  },
  options: {
    indexAxis: 'y'
  }
});

