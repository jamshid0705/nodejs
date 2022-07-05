const fs = require("fs")
const http=require("http")
const url=require("url")


const jsdom = require("jsdom");
const { JSDOM } = jsdom;




const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent);

const about=fs.readFileSync(`./html/about.html`,"utf-8")
const login=fs.readFileSync(`./html/login.html`,"utf-8")
const contact=fs.readFileSync(`./html/contact.html`,"utf-8")
const home=fs.readFileSync(`./html/home.html`,"utf-8")


const servir= http.createServer((request,response)=>{
  const urlcha=request.url;
  if(urlcha==='/about'){
    response.writeHead(200,
        {
          "content-type":"text/html",
          "mening-headirim":"zor ishladi",
        }
      )
    response.end(about)
  }
  else  if(urlcha==='/login'){
    response.writeHead(200,
        {
          "content-type":"text/html",
          "mening-headirim":"zor ishladi",
        }
      )
    response.end(login)
  }
  else  if(urlcha==='/contact'){
    response.writeHead(200,
        {
          "content-type":"text/html",
          "mening-headirim":"zor ishladi",
        }
      )
    response.end(contact)
  }
  else  if(urlcha==='/home'){
    response.writeHead(200,
        {
          "content-type":"text/html",
          "mening-headirim":"zor ishladi",
        }
      )
    response.end(home)
  }
  else if(urlcha==='/api'){
    response.writeHead(200,
      {
        "content-type":"text/json",
        "mening-headirim":"zor ishladi",
      }
    )
  response.end(data)
  }
  else{
    response.writeHead(404,
      {
        "content-type":"text/plain"
      })
    response.end("sahifa topilmadi")
  }
 
})

servir.listen("8000","127.0.0.1");





/////////////////////////// sync //////////////////////////////////////////////
const inputText= fs.readFileSync('./txt/input.txt',"utf-8")
console.log(inputText)

const outputText=`Salom qalay:${inputText}`

fs.writeFileSync("./txt/output.txt",outputText)
console.log('Yozib boldim')

/////////////////// async //////////////////////////////////////////////////////

fs.readFile("./txt/input.txt","utf-8",function(err,data){
  // console.log(err)
  console.log(data);
})
console.log("Reading.....")

fs.writeFile("./txt/output1.txt","SALOM","utf-8",function(err,data){
  if(err) throw new Error("Xato");
  console.log("Kiritildi")
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let overview=fs.readFileSync("./templates/overview.html","utf-8");

let card=fs.readFileSync("./templates/card.html","utf-8");

let product=fs.readFileSync("./templates/product.html","utf-8")

const data=fs.readFileSync("./dev-data/data.json","utf-8")

const replaceFunc=require("./modules/ReplaceFunc.js")

let dataObj=JSON.parse(data);


let output

const server=http.createServer((req,res)=>{
 const changeCard= dataObj.map(val=>{
    return replaceFunc(card,val) 
  }).join('')
  output=overview.replace("{cardProduct}",changeCard)
  const urlcha=req.url;
  
  let query1=+url.parse(urlcha,true).query.id;
  


  if(urlcha==="/overview" || urlcha=="/"){
    res.writeHead(200,
      {
        "content-type":"text/html"
      }
      )
      res.end(output)
  }

  else if(urlcha===`/product?id=${query1}`){
    let obj=dataObj.find(val=>val.id==query1)
    // res.url=slugify(obj.productName)

   let repHTML= replaceFunc(product,obj);
   res.writeHead(200,{
     "content-type":"text/html"
   })
   res.end(repHTML)
  }

  else{
    res.writeHead(404,{
      "content-type":"text/plain"
    })
    res.end("Bu sayt ishlamadi")
  }
})

 server.listen("8000","127.0.0.1");


 ///////////////////////////////////////////

 const slugify=require("slugify");

 const slu=slugify("salom qalesan");

 console.log(slu)