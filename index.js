const fs = require("fs")
const http=require("http")
const url=require("url")

const about=fs.readFileSync(`./html/about.html`,"utf-8")
const login=fs.readFileSync(`./html/login.html`,"utf-8")
const contact=fs.readFileSync(`./html/contact.html`,"utf-8")
const home=fs.readFileSync(`./html/home.html`,"utf-8")
 
const data=fs.readFileSync("./dev-data/data.json","utf-8")

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
    response.end("salom ishlamadi")
  }
 
})

servir.listen("8000","127.0.0.1");





///////////////////////////// sync //////////////////////////////////////////////
// const inputText= fs.readFileSync('./txt/input.txt',"utf-8")
// console.log(inputText)

// const outputText=`Salom qalay:${inputText}`

// fs.writeFileSync("./txt/output.txt",outputText)
// console.log('Yozib boldim')

///////////////////// async //////////////////////////////////////////////////////

// fs.readFile("./txt/input.txt","utf-8",function(err,data){
//   // console.log(err)
//   console.log(data);
// })
// console.log("Reading.....")

// fs.writeFile("./txt/output1.txt","SALOM","utf-8",function(err,data){
//   if(err) throw new Error("Xato");
//   console.log("Kiritildi")
// })



