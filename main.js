var boxcount=$(".box").length;
generate();
function generate(){
for(var i=0;i<boxcount;i++){
  var randomColor = Math.floor(Math.random()*16777215).toString(16); 
  $(`.box${i}`).css({"background-color": `#${randomColor}`});
  $(`.title${i}`).text(`#${randomColor}`);
  $(`.title${i}`).css("color",`#${randomColor}`);
}
}
