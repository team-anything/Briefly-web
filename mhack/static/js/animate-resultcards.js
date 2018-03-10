var btns=[].slice.call(document.getElementsByClassName("btn"));
var cols=[].slice.call(document.getElementsByClassName("col"));
var alerts=document.getElementsByClassName("alert");

console.log(btns);
console.log(alerts);

cols.forEach(function(elem,index){
  colorder=index;
  alertorder=(parseInt(index/3)+1)*3;
  cols[index].style.order=colorder;
  alerts[index].style.order=alertorder;
});

cols.forEach(function(elem, index){
  elem.addEventListener("click", function(){
    if(alerts[index].classList.contains('is-open')){
      $('.is-open').toggleClass('is-open');
      $('.active').toggleClass('active');
    }
    else {
      $('.is-open').toggleClass('is-open');
      alerts[index].classList.add('is-open');
      $('.active').toggleClass('active');
      cols[index].classList.add('active');
    }
    // console.log(cols[index]);
  });
});

