class ChartController {
  constructor(model, view) {
    this.model = model
    this.view = view

    // Show charts
    this.onChartListChanged(this.model.charts)
  }

  onChartListChanged = (charts) => {
    console.log(charts)
    this.view.renderCharts(charts)
  }
}
