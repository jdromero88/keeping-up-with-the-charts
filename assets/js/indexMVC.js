const app = new ChartController(new Chart(), new ChartView())
console.log(app)
// app.model
app.view.logConnected()
console.log(app.model.listCharts())
console.log(app.model.showChart("2020/03/20", "dob"))
