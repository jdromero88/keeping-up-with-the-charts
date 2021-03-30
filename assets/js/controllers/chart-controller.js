class ChartController {
  constructor( model, view ) {
    this.model = model
    this.view = view

    // Show charts
    this.onChartListChanged( this.model.charts )

    this.view.bindAddChart( this.handleAddChart )

    this.model.bindChartListChanged(this.onChartListChanged)
  }

  onChartListChanged = ( charts ) => {
    // console.log(charts)
    this.view.renderCharts( charts )
  }

  handleAddChart = ( chart ) => {
    // console.log( chart )
    if ( chart ) {
      // destructure object here
      const { name, link, dob, programId, authorId } = chart
      console.log( name )
      this.model.addChart( name, link, dob, programId, authorId )
    }
  }

  handleEditChart = ( chart ) => {
    if ( chart ) {
      this.model.editChart( name, info )
    }
  }

  handleDeleteChart = ( chart ) => {
    if ( chart ) {
      this.deleteChart( name )
    }
  }
}
