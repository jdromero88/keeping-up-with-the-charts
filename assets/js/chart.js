class Chart {
  constructor(name, link, date) {
    this.name = name
    this.link = link
    this.date = date
  }

  showChart(){
    return this.name + ' ' + this.link + ' ' + this.date
  }
}
