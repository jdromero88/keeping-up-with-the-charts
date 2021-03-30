class ChartController {
  constructor( model, view ) {
    this.model = model
    this.view = view

    // Show charts
    this.onChartListChanged( this.model.charts )

    this.view.bindAddChart( this.handleAddChart )

    this.view.bindDeleteChart( this.handleDeleteChart )

    this.model.bindChartListChanged( this.onChartListChanged )
  }

  onChartListChanged = ( charts ) => {
    this.view.renderCharts( charts )
  }

  handleAddChart = ( chart ) => {
    if ( chart ) {
      // destructure object here
      const { name, link, dob, programId, authorId } = chart
      this.model.addChart( name, link, dob, programId, authorId )
    }
  }

  handleEditChart = ( chart ) => {
    if ( chart ) {
      this.model.editChart( name, info )
    }
  }

  handleDeleteChart = ( id ) => {
    if ( id ) {
      this.model.deleteChart( id )
    }
  }
}
