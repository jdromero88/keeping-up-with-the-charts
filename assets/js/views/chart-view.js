class ChartView {
  constructor() {
    // Root element
    this.app = this.getElement( '#root' )

    // get section so we can append the ul
    this.sectionCharts = this.getElement( '#listingCharts' )

    // title of the app
    this.title = this.createElement( 'h1', 'main__h1' )
    this.title.innerText = 'Keeping up with the Charts!'

    // Create form
    this.form = this.createElement( 'form' )

    // Inputs
    this.chartNameInput = this.createElement( 'input' )
    this.chartNameInput.id = 'chartName'
    this.chartNameInput.type = 'text'
    this.chartNameInput.name = 'name'
    this.chartNameInput.placeholder = 'Chart name...'

    this.chartLinkInput = this.createElement( 'input' )
    this.chartLinkInput.id = 'chartLink'
    this.chartLinkInput.type = 'text'
    this.chartLinkInput.name = 'link'
    this.chartLinkInput.placeholder = 'Chart link...'

    this.chartDOBInput = this.createElement( 'input' )
    this.chartDOBInput.id = 'chartDOB'
    this.chartDOBInput.type = 'date'
    this.chartDOBInput.name = 'DOB'

    this.chartSubmitInput = this.createElement( 'input', 'main__button' )
    this.chartSubmitInput.id = 'createChart'
    this.chartSubmitInput.type = 'submit'
    this.chartSubmitInput.name = 'submit'
    this.chartSubmitInput.value = 'Create Chart'

    // ul tag to add the new charts
    this.chartList = this.createElement( 'ul' )
    this.chartList.id = 'listCharts'


    // append inputs to the form
    this.form.append( this.chartNameInput, this.chartLinkInput, this.chartDOBInput, this.chartSubmitInput )

    this.app.append( this.title, this.form )
  }

  logConnected() {
    console.log("connected")
  }

  get _chartName() {
    return this.chartNameInput.value
  }

  _resetChartInputName() {
    this.chartNameInput.value = ''
  }

  get _chartLink(){
    return this.chartLinkInput.value
  }

  _resetChartInputLink() {
    this.chartLinkInput.value = ''
  }

  get _chartDOB(){
    return this.chartDOBInput.value
  }

  _resetChartInputDOB() {
    this.chartDOBInput.value = ''
  }


  // Create element with class
  createElement( tag, className ) {
    const element = document.createElement( tag )
    if ( className ) element.classList.add( className )

    return element
  }

  getElement( selector ) {
    // const element = document.querySelector(selector)
    // return element
    return document.querySelector( selector )
  }

  renderCharts( charts ) {
    // First remove all the nodes
    while (this.chartList.firstChild) {
      this.chartList.removeChild(this.chartList.firstChild)
    }

    // show somthing on the lista
    if ( charts.length === 0 ) {
      const p = this.createElement( 'p' )
      p.innerText = 'List is empty.'
      this.chartList.append( p )
    } else {
      charts.forEach( chart => this.renderSingleChart( chart ) )
    }
  }

  renderSingleChart( chart ) {
    const li = this.createElement( 'li', 'main__li' )
    li.id = chart.name
    li.innerText = chart.name

    const deleteButton = this.createElement( 'button', 'main__delete' )
    deleteButton.innerText = 'Delete'

    li.append( deleteButton )
    this.chartList.append( li )

    this.sectionCharts.append( this.chartList )
  }

  bindAddChart( handler ) {
    // debugger
    this.chartSubmitInput.addEventListener( 'click', e => {
      e.preventDefault()

      const chart = {
  			name: this._chartName,
  			link: this._chartLink,
  			dob: this._chartDOB
  		}

      if (true) {
        handler( chart )
        this._resetChartInputName()
        this._resetChartInputLink()
        this._resetChartInputDOB()
      }
    })
  }

  bindDeleteChart( handler ) {
    this.chartList.addEventListener( 'click', e => {
      if( e.target.className === 'main__delete' ) {
        const id = e.target.parentElement.id
        handler( id )
      }
    })
  }
}
