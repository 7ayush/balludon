const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway=document.querySelector('.giveaway');

const deadline=document.querySelector('.deadline');

const items= document.querySelectorAll('.deadline-format h4');

// console.log(items);

let futureDate=new Date(2020,10,7,0,0,0) ;
//months are zero index based
// console.log(futureDate);

const day=weekdays[futureDate.getDay()];

const date=futureDate.getDate();
const month=months[futureDate.getMonth()];
const year=futureDate.getFullYear();
var hours=futureDate.getHours();
const mins=futureDate.getMinutes();
const secs=futureDate.getSeconds();
var updatedHours=hours;
var meridian;
if(hours>=12)
{
  meridian='pm';
  if(hours>12)
  {
    updatedHours-=12;
  } 
}
else
{
  meridian='am';
}




const futureTime=futureDate.getTime();
console.log(futureTime);


function getRemainingTime()
{
  const today=new Date().getTime();
  const t=futureTime-today;
  let t1=t;
  // console.log(t);
  //1s=1000ms
  //60s=1min
  //60min=1hr
  const oneDay=24*60*60*1000;
  const oneHour=60*60*1000;
  const oneMin=60*1000;
  const oneSec=1000;
  let days=Math.floor(t1/oneDay);
  // console.log(days);
  t1-=days*oneDay;
  let hours=Math.floor(t1/oneHour);
  // console.log(hours);
  t1-=hours*oneHour;
  let min=Math.floor(t1/oneMin);
  // console.log(min);
  t1-=min*oneMin;
  let sec=Math.floor(t1/oneSec);
  // console.log(sec);
  t1-=sec*oneSec;
  const values=[days,hours,min,sec];

  function format(item)
  {
    if(item<10)
    {
      return `0${item}`;
    }
    else
    {
      return item;
    }
    
  }

  items.forEach(function(item,index)
  {
    item.innerHTML=format(values[index]);
  });

  if(t<0)
  {
    clearInterval(countdown);
    deadline.innerHTML=`<h4 class="expired">Sorry Birthday has gone</h4>`;
  }
  giveaway.textContent=`Celebration begins on ${day}, ${date} ${month} ${year} ${format(updatedHours)}:${format(mins)}${meridian} `;


}
let countdown=setInterval(getRemainingTime,1000);
getRemainingTime();