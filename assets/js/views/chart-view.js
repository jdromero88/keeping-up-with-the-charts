class ChartView {
  constructor() {
    // Root element
    this.app = this.getElement('#root')

    // title of the app
    this.title = this.createElement('h1', 'main__h1')
    this.title.innerText = 'Keeping up with the Charts!'

    // Create form
    this.form = this.createElement('form')

    // Inputs
    this.chartNameInput = this.createElement('input')
    this.chartNameInput.id = 'chartName'
    this.chartNameInput.type = 'text'
    this.chartNameInput.name = 'name'
    this.chartNameInput.placeholder = 'Chart name...'

    this.chartLinkInput = this.createElement('input')
    this.chartLinkInput.id = 'chartLink'
    this.chartLinkInput.type = 'text'
    this.chartLinkInput.name = 'link'
    this.chartLinkInput.placeholder = 'Chart link...'

    this.chartDOBInput = this.createElement('input')
    this.chartDOBInput.id = 'chartDOB'
    this.chartDOBInput.type = 'date'
    this.chartDOBInput.name = 'DOB'

    this.chartSubmitInput = this.createElement('input', 'main__button')
    this.chartSubmitInput.id = 'createChart'
    this.chartSubmitInput.type = 'submit'
    this.chartSubmitInput.name = 'submit'
    this.chartSubmitInput.value = 'Create Chart'


    // append inputs to the form
    this.form.append(this.chartNameInput, this.chartLinkInput, this.chartDOBInput, this.chartSubmitInput)

    this.app.append(this.title, this.form)
  }

  logConnected() {
    console.log("connected")
  }

  // Create element with class
  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }
}
