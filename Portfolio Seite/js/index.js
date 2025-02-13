document.getElementById('next-btn').addEventListener('click', function() {
    toggleSection();
  });
  document.getElementById('prev-btn').addEventListener('click', function() {
    toggleSection();
  });

  function toggleSection() {
    const container = document.getElementById('project-container');
    const title = document.getElementById('section-title');
    container.innerHTML = '';

    if (title.innerText === 'Featured') {
      title.innerText = 'Seminar';
      for (let i = 1; i <= 9; i++) {
        container.innerHTML += `
          <div class="col-md-4">
            <div class="card project-card bg-dark text-white p-3 text-center">
              <h5 class="card-title">Seminar ${i}</h5>
              <a href="#" class="btn btn-outline-light">Download</a>
            </div>
          </div>`;
      }
    } else {
      title.innerText = 'Featured';
      container.innerHTML = `
        <div class="col-md-6 project">
          <div class="card project-card bg-dark text-white">
            <img src="images/ontoexplorer.png" class="card-img-top project-img" alt="ontoexplorer Project picture" />
            <div class="card-body">
              <h5 class="card-title">DB route band generator</h5>
              <a href="DB-Project.html" class="btn btn-outline-light">See more</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 project">
          <div class="card project-card bg-dark text-white">
            <img src="images/db.png" class="card-img-top project-img" alt="DB Project Picture" />
            <div class="card-body">
              <h5 class="card-title">Ontoexplorer</h5>
              <a href="Ontoexplorer.html" class="btn btn-outline-light">See more</a>
            </div>
          </div>
        </div>`;
    }
  }