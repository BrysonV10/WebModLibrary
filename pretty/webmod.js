class Mod {
  constructor(obj){
    //obj setup: {full or host or host&path}
    if(obj.host){
      this.site = obj.host;
      this.siteType = "host"
    } else if(obj.full) {
      this.site = obj.full;
      this.siteType = "full"
    } else if(obj.host && obj.path){
      this.site = {host: obj.host, path: obj.path}
      this.siteType = "hybrid"
    }
  }
  
  element(q, type=null){
    if(!type){
      return document.querySelector(q)
    } else {
      if(type === "class"){return document.getElementsByClassName(q)}
      else if(type === "id"){return document.getElementById(q)}
      else {console.error("TypeError: Invalid type passed");}
    }
  }
  
  addElement(tag, prop = []){
   let e = document.createElement(tag)
   if(prop.length > 0){
     for(var i = 0; i < prop.length; i++){
       try {
         e.setAttribute(prop[i].name, prop[i].value)
       } catch {
         console.error("AttributeError: Failed to add attribute " + prop[i])
       }
     }
   }
   document.body.appendChild(e)
  }
