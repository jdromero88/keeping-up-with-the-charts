let charts = []

async function getCharts(){
	await fetch( './assets/data/charts.json' )
	.then( response => response.json() )
	.then( data => rowToObject(data.charts) )
}

function rowToObject(data){
	console.log(data)
	data.forEach( (item, i) => {
		let chart = new Chart(item.name, item.link, item.dob)
		console.log(chart);
		charts.push(chart)
	})
	console.log(charts)
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


let showChart = () => {
	console.log('I need to show the charts')
	console.log(charts)
}

function findChart(name) {
		let found = charts.filter( chart => chart.name == name)
		console.log(found)
		console.log(found[0].name)
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
	let chart = new Chart(name, link, dob);
	charts.push(chart)
	console.log(name, " ", link, " ", dob);
}

// Listeners
document.querySelector('#showChart').addEventListener('click', showChart)
document.querySelector('#showChartById').addEventListener('click', () => findChart("nuevo"))
document.querySelector('#showAuthor').addEventListener('click', showAuthor)
document.querySelector('#showProgram').addEventListener('click', showProgram)
document.querySelector('#addChart').addEventListener('click', (e) => addChart(e))
window.addEventListener('DOMContentLoaded', init)
