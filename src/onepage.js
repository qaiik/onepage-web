o = {
  router: class {
    constructor() {
      this.routemklinks = {}
    }
    AddRoute(name, html) {
      this.routemklinks["#" + name] = html;
    }
    On404(html) {
      this.routemklinks["404"] = html;
    }
    start() {
      window.addEventListener('locationchange', function(){
        if (typeof this.routemklinks[location.hash] === "string") {
          document.querySelector("#op-view").innerHTML = this.routemklinks[location.hash];
        } else {
          if (typeof this.routemklinks["404"] === "string") {
            document.querySelector("#op-view").innerHTML = this.routemklinks["404"]
          } else {
            document.querySelector("#op-view").innerHTML = "404; That page was not found."
          }
        }
      })
    }
  }
}
    
      
