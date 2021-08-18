console.log("Welcome to Indian  news");
// e7a2334355b34a2b9cfcc02b3b70bed9
// Grab the news container
// source='bbc-news';
let api_key = "e7a2334355b34a2b9cfcc02b3b70bed9";
let newsaccordian = document.getElementById("newsaccordian");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    
    let newsHTML="";
    articles.forEach(function(element,index) {
        console.log(articles);
        let news = `
        <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News ${index+1} </b>:
                        ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#newsaccordian">
                    <div class="accordion-body">
                        ${element["content"]}.<a href="${element['url']}" target="_blank"> Read more here </a> 
                    </div>
                </div>
            </div>`;
      newsHTML+=news;
        
    });
    
    //   console.log(articles[item]);
     
    
    newsaccordian.innerHTML=newsHTML;
  } else {
    console.log("some error occured");
  }
};
xhr.send();
