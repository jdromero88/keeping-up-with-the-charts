let year = new Date()
function formatFooter() {
	let footerEl = document.getElementById('footer')
  let pEl = document.createElement('p')
	// TODO: agregar texto en el footer
	pEl.innerHTML = year.getFullYear() + `&copy; List of Charts`
  footerEl.appendChild(pEl)
}

function init() {
	formatFooter()
  const app = new ChartController(new Chart(), new ChartView())
  console.log(app)
  // app.model
  app.view.logConnected()
  console.log(app.model.listCharts())
  console.log(app.model.showChart("test", "name"))
  app.model.editChart("test", {name: "test1", link: "link-test", dob: "2021/04/28"})
  console.log(app.model.listCharts())
  console.log(app.model.showChart("test1", "name"))
  app.model.deleteChart("china lifestyle")
  console.log(app.model.listCharts())

  function addCharte(e) {
    e.preventDefault()
    let name = document.querySelector("#chartName").value
    let link = document.querySelector("#chartLink").value
    let dob = document.querySelector("#chartDOB").value

    console.log(name, " ", link, " ", dob);
    app.model.addChart(name, link, dob)
    console.log(app.model.listCharts())
  }


  // Listeners
  document.querySelector('#showChart').addEventListener('click', showChart)
  document.querySelector('#showChartById').addEventListener('click', () => findChart("nuevo"))
  document.querySelector('#showAuthor').addEventListener('click', showAuthor)
  document.querySelector('#showProgram').addEventListener('click', showProgram)
  document.querySelector('#createChart').addEventListener('click', (e) => addCharte(e))
}


window.addEventListener('DOMContentLoaded', init)
