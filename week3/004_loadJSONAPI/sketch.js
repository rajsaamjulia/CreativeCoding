function setup() {
  createCanvas(windowWidth, windowHeight);
  var searchWord = "clinton";
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?';
  url += "api-key=7325774b17fa420eace0388afb00b628";
  url += "&q=" + searchWord;
  url += "&page=1";
  print(url);
  loadJSON(url,drawData);
}

function draw(){

}

function drawData(data){
  print(data.response.docs);
  var articles = data.response.docs;
  for (var i=0; i<articles.length; i++){
    var snippet = articles[i].snippet;
    print(articles[i].multimedia[0]);
    text(snippet, 100, 100+40*i);
  }
  //print(articles[0].snippet);
}
