function SetBackgroundColor(color){
  // document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor',color);
}
function SetTextColor(color){
  // document.querySelector('body').style.color = color;
  $('body').css('color' ,color);
}
function NightDayHandler(self){
  var target = document.querySelector('body');
  if (self.value === '밤') {
    SetBackgroundColor("black");
    SetTextColor("white");
    self.value = '낮';
  } else {
    SetBackgroundColor("white");
    SetTextColor("black");
    self.value = '밤';
  }
}
