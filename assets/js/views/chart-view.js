class ChartView {
  constructor() {}

  logConnected() {
    console.log("connected")
  }

  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)
  }

}
