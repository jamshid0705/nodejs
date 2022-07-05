const replaceFunc=function(html,obj){
  let out=html.replace(/{ImageProduct}/g,obj.image);
  out=out.replace("{NameProduct}",obj.productName)
  out=out.replace("{DetailProduct}",obj.quantity)
  out=out.replace("{PriceProduct}",obj.price)
  out=out.replace("{Idproduct}",obj.id)
  
  out=out.replace(/{imageProduct}/g,obj.image)
  out=out.replace("{countryPro}",obj.from)
  out=out.replace("{vitaminPro}",obj.nutrients)
  out=out.replace("{desPro}",obj.description)
  

  out=out.replace(/{OrganicProduct}/g,obj.organic? "Organic":"")

  return out;
}

module.exports=replaceFunc
