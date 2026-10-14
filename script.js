const t=document.getElementById('track');
function slide(d){const w=t.querySelector('.card').offsetWidth+28;
if(d>0&&t.scrollLeft+t.clientWidth>=t.scrollWidth-4)t.scrollTo({left:0});
else if(d<0&&t.scrollLeft<=4)t.scrollTo({left:t.scrollWidth});
else t.scrollBy({left:d*w});}
setInterval(()=>slide(1),4500);