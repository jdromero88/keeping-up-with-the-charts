let charts = null

async function getCharts(){
	await fetch( './assets/data/charts.json' )
	.then( response => response.json() )
	.then( data => charts = data.charts)
}

let year = new Date()
let authors = []
let programs = []

function init() {
	getCharts()
	console.log('connected')
	console.log(charts)
	formatFooter()
}

function formatFooter() {
	let footerEl = document.getElementById('footer')
  let pEl = document.createElement('p')
	// TODO: agregar texto en el footer
	pEl.innerHTML = year.getFullYear() + `&copy; List of Charts`
  footerEl.appendChild(pEl)
}
function createChart(name, link, date) {

	for (let i = 0; i < 100; i++) {
		// eval("chart_" + i + " = " + new Chart(name, link, date))
		eval("uno"+ i + "=" + "new Chart(name, link, date)")
		charts.push(eval("uno"+ i))
	}
	charts.forEach((chart, i) => chart.name = chart.name + i);

	// let p = new Producto(productoParaAgregar.value, cantidad.value)
}

let showChart = () => {
	console.log('I need to show the charts')
	console.log(charts)
}

function findChart(name) {
		let found = charts.filter( chart => chart.name == name)[0].name
		console.log(found)
}

let showAuthor = () => {
	console.log('I need to show the author')

}
let showProgram = () => {
	console.log('I need to show the program')
}

function addChart(e) {
	e.preventDefault()
	let name = document.querySelector("#chartName").value
	let link = document.querySelector("#chartLink").value
	let dob = document.querySelector("#chartDate").value
	console.log(name, " ", link, " ", dob);
	test.charts.push({
		name: name,
		link: link,
		dob: dob
	})
	test
}

// Listeners
document.querySelector('#createChart').addEventListener('click', () => createChart('test', 'https://test.com', new Date))
document.querySelector('#showChart').addEventListener('click', showChart)
document.querySelector('#showChartById').addEventListener('click', () => findChart("china lifestyle"))
document.querySelector('#showAuthor').addEventListener('click', showAuthor)
document.querySelector('#showProgram').addEventListener('click', showProgram)
document.querySelector('#addChart').addEventListener('click', (e) => addChart(e))
window.addEventListener('DOMContentLoaded', init)
