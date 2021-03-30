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
  // app.view.logConnected()
  // console.log(app.model.listCharts())
  // console.log(app.model.showChart("test", "name"))
  // app.model.editChart("test", {name: "test1", link: "link-test", dob: "2021/04/28"})
  // console.log(app.model.listCharts())
  // console.log(app.model.showChart("test1", "name"))
  // app.model.deleteChart("china lifestyle")
  // console.log(app.model.listCharts())

  function addCharte(e) {
    e.preventDefault()
		const chart = {
			name: document.querySelector("#chartName").value,
			link: document.querySelector("#chartLink").value,
			dob: document.querySelector("#chartDOB").value
		}

		// console.log(app)
    // console.log(name, " ", link, " ", dob)
		app.handleAddChart(chart)
    // app.model.addChart(name, link, dob)
		// app.model
  }

	function showCharts() {
		console.log(app.model.listCharts())
	}

  // Listeners
  document.querySelector('#showCharts').addEventListener('click', showCharts)
  document.querySelector('#showChartById').addEventListener('click', () => findChart("nuevo"))
  document.querySelector('#showAuthor').addEventListener('click', showAuthor)
  document.querySelector('#showProgram').addEventListener('click', showProgram)
  // document.querySelector('#createChart').addEventListener('click', (e) => addCharte(e))
}


window.addEventListener('DOMContentLoaded', init)
