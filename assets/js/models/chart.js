class Chart {
  constructor() {
    this.charts = [
      {
        "name":"test",
        "link":"http://someURl.com",
        "dob":"2020/03/20"
      },
      {
        "name":"china lifestyle",
        "link":"http://someURlasdfasdf.com",
        "dob":"2020/03/21"
      },
      {
        "name":"china currencyh",
        "link":"http://someURlasdfasdf.com",
        "dob":"2020/03/22"
      },
      {
        "name":"china industry",
        "link":"http://someURlasdfasdfasdfasdf.com",
        "dob":"2020/04/22"
      }
    ]
  }

  addChart(name, link, dob) {
    const chart = {
      name: name,
      link: link,
      dob: dob
    }
    this.charts.push(chart)
  }


  showChart(filter, filterBy) {
    return this.charts.filter( chart => chart[filterBy] === filter )[0]
  }


  // Map through charts & replace info with new info
  editChart(name, info) {
    this.charts = this.charts.map( chart =>
      chart.name === name ? {name: info.name, link: info.link, dob: info.dob} : chart
    )
  }

  deleteChart(name) {
    this.charts = this.charts.filter( chart => chart.name !== name)
  }

  listCharts() {
    return this.charts
  }
}
