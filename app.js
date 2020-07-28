let newsFlash = document.getElementById('news');
let main2Img = document.getElementById('main2-image');
let main2Text = document.getElementById('main2-text');
let submain1 = document.getElementById('submain1');
let submain2 = document.getElementById('submain2');
let submain3 = document.getElementById('submain3');
let submain4 = document.getElementById('submain4');
let submain5 = document.getElementById('submain5');
let submain6 = document.getElementById('submain6');
let latImg1 = document.getElementById('latimg1');
let latImg2 = document.getElementById('latimg2');
let latImg3 = document.getElementById('latimg3');
let latImg4 = document.getElementById('latimg4');
let latText1 = document.getElementById('lattext1');
let latText2 = document.getElementById('lattext2');
let latText3 = document.getElementById('lattext3');
let latText4 = document.getElementById('lattext4');
let catImg1 = document.getElementById('cat-Img4');
let catImg2 = document.getElementById('cat-Img1');
let catImg3 = document.getElementById('cat-Img2');
let catImg4 = document.getElementById('cat-Img3');
let catText1 = document.getElementById('cat-text4');
let catText2 = document.getElementById('cat-text1');
let catText3 = document.getElementById('cat-text2');
let catText4 = document.getElementById('cat-text3');
let cat1 = document.getElementById('cat1');
let cat2 = document.getElementById('cat2');
let cat3 = document.getElementById('cat3');
let cat4 = document.getElementById('cat4');
// let articleSec0 = document.getElementById('article-sec1');
// let articleSec1 = document.getElementById('article-sec2');
// let articleSec2 = document.getElementById('article-sec3');
// let articleSec3 = document.getElementById('article-sec4');
function createP() {
    let node1 = document.createElement('h6');
    node1.className = "border-top";
    return node1;
}
let update = function(){
    let api = "https://newsapi.org/v2/top-headlines?country=in";
    const apiKey = "&apiKey=394b4b6abf7147a9a272f2252588557e";
    fetch(api + apiKey)
        .then((response) => { return response.json() })
        .then((data) => {
            let article = data.articles;
            let i = 0;
            setInterval(() => {
                if (i < article.length) {
                    newsFlash.innerHTML = article[i].title;
                    i++;
                }
                else {
                    i = 0;
                }

            }, 3500)
            main2Img.src = article[0].urlToImage;
            main2Text.innerHTML = article[0].title;
            latImg1.src = article[1].urlToImage;
            latText1.innerHTML = article[1].title;
            latImg2.src = article[2].urlToImage;
            latText2.innerHTML = article[2].title;
            latImg3.src = article[3].urlToImage;
            latText3.innerHTML = article[3].title;
            latImg4.src = article[4].urlToImage;
            latText4.innerHTML = article[4].title;
            var input = "&category=business"
            fetch(api + input + apiKey)
                .then((response) => { return response.json() })
                .then(data => {
                    submain1.src = data.articles[0].urlToImage;
                    catImg1.src = data.articles[1].urlToImage;
                    catText1.innerHTML = data.articles[1].title;
                    let node1 = createP();
                    let node2 = createP();
                    let node3 = createP();
                    let node4 = createP();
                    node1.innerHTML = data.articles[1].title;
                    node2.innerHTML = data.articles[2].title;
                    node3.innerHTML = data.articles[3].title;
                    node4.innerHTML = data.articles[4].title;
                    cat1.appendChild(node1);
                    cat1.appendChild(node2);
                    cat1.appendChild(node3);
                    cat1.appendChild(node4);
                })
            input = "&category=science";
            fetch(api + input + apiKey)
                .then((response) => { return response.json() })
                .then(data => {
                    
                    submain2.innerHTML = data.articles[0].title;
                    catImg4.src = data.articles[1].urlToImage;
                    catText4.innerHTML = data.articles[1].title;
                    let node1 = createP();
                    let node2 = createP();
                    let node3 = createP();
                    let node4 = createP();
                    node1.innerHTML = data.articles[1].title;
                    node2.innerHTML = data.articles[2].title;
                    node3.innerHTML = data.articles[3].title;
                    node4.innerHTML = data.articles[4].title;
                    cat4.appendChild(node1);
                    cat4.appendChild(node2);
                    cat4.appendChild(node3);
                    cat4.appendChild(node4);
                })
            input = "&category=health";
            fetch(api + input + apiKey)
                .then((response) => { return response.json() })
                .then(data => {
                    submain3.innerHTML = data.articles[0].title;
                })
            var input = "&category=entertainment"
            fetch(api + input + apiKey)
                .then((response) => { return response.json() })
                .then(data => {
                    submain4.src = data.articles[0].urlToImage;
                    catImg2.src = data.articles[1].urlToImage;
                    catText2.innerHTML = data.articles[1].title;
                    let node1 = createP();
                    let node2 = createP();
                    let node3 = createP();
                    let node4 = createP();

                    node1.innerHTML = data.articles[1].title;
                    node2.innerHTML = data.articles[2].title;
                    node3.innerHTML = data.articles[3].title;
                    node4.innerHTML = data.articles[4].title;
                    cat2.appendChild(node1);
                    cat2.appendChild(node2);
                    cat2.appendChild(node3);
                    cat2.appendChild(node4);
                })
            var input = "&category=sports"
            fetch(api + input + apiKey)
                .then((response) => { return response.json() })
                .then(data => {
                    
                    submain5.src = data.articles[0].urlToImage;
                })
            input = "&category=technology";
            fetch(api + input + apiKey)
                .then((response) => { return response.json() })
                .then(data => {
                    
                    submain6.innerHTML = data.articles[0].title;
                    catImg3.src = data.articles[1].urlToImage;
                    catText3.innerHTML = data.articles[1].title;
                    let node1 = createP();
                    let node2 = createP();
                    let node3 = createP();
                    let node4 = createP();
                    node1.innerHTML = data.articles[1].title;
                    node2.innerHTML = data.articles[2].title;
                    node3.innerHTML = data.articles[3].title;
                    node4.innerHTML = data.articles[4].title;
                    cat3.appendChild(node1);
                    cat3.appendChild(node2);
                    cat3.appendChild(node3);
                    cat3.appendChild(node4);
                })
                let arr = ["politics", "motivation", "fitness", "bollywood"]
                arr.forEach((element,index) =>{
                    let articleSec = document.getElementById('article-sec'+index);
                    input ="q="+element;
                    api = "http://newsapi.org/v2/everything?"
                    fetch(api + input + apiKey)
                        .then((response) => response.json())
                        .then((data) =>{

                            let articleHtml = "<img src=" + data.articles[0].urlToImage +
                            " height='88px' width='88px' alt='' class='mx-2'>"+
                            "<p>" + data.articles[0].title + "</p>"
                            articleSec.innerHTML = articleHtml;
                        })
                })
        })
}
update();
setInterval(() => update, 10000)
