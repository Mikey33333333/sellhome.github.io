let people = document.getElementById('People');
let People_less = document.getElementById('People_less');
let People_more = document.getElementById('People_more');

let people_index = 4;

People_less.addEventListener('click', () =>{
   people_index -= 1;

   if(people_index <= 0){
      people_index = 1;
      people.value = people_index + ' People';
   }else{
      people.value = people_index + ' People';
   }
   
})


People_more.addEventListener('click', () =>{
   people_index += 1;

   if(people_index >= 4){
      people_index = 4;
      people.value = people_index + ' People';
   }else{
      people.value = people_index + ' People';
   }
   
})

let checkout_data = document.getElementById('checkout_data');
let checkout = document.getElementById('checkout');
let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');

checkin.addEventListener('change', () =>{
   let checkin_value = checkin.value;
   let checkout_value = checkout;
   // console.log(checkin_value);

   let dates = new Date(checkin_value);
   let dates2 = new Date(checkout);

   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   let day = week [dates.getDay()];
   // console.log(day);

   let date = dates.getDate();
   // console.log(date);

   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let month = months[dates.getMonth()];
   // console.log(month);

   if( dates < dates2){
      console.log('No Date');
   }else{
      checkin_data.innerText = day + ' , ' + date + ' ' + month;
   }
})


checkout.addEventListener('change', () =>{
   let checkout_value = checkout.value;
   let checkin_value = checkin.value;
   // console.log(checkin_value);

   let dates = new Date(checkout_value);
   let dates2 = new Date(checkin_value);

   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   let day = week [dates.getDay()];
   // console.log(day);

   let date = dates.getDate();
   // console.log(date);

   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let month = months[dates.getMonth()];
   // console.log(month);

   if( dates < dates2){
      console.log('No Date');
   }else{
      checkout_data.innerText = day + ' , ' + date + ' ' + month;
   }
})


let checkin_more = document.getElementById('checkin_more');
let checkin_less = document.getElementById('checkin_less');
let checkout_more = document.getElementById('checkout_more');
let checkout_less = document.getElementById('checkout_less');

checkin_more.addEventListener('click', () => {
   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let today = new Date();
   let tomorrow = new Date(today);

   tomorrow.setDate(tomorrow.getDate() + 1);

   let day = week[tomorrow.getDay()];
   let date = tomorrow.getDate();
   let month = months[tomorrow.getMonth()];

   checkin_data.innerText = day + ' , ' + date + ' ' + month;
})

// checkout_more================================

checkout_more.addEventListener('click', () => {
   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let today = new Date();
   let tomorrow = new Date(today);

   tomorrow.setDate(tomorrow.getDate() + 2);

   let day = week[tomorrow.getDay()];
   let date = tomorrow.getDate();
   let month = months[tomorrow.getMonth()];

   checkout_data.innerText = day + ' , ' + date + ' ' + month;
})


checkin_less.addEventListener('click', () => {
   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let today = new Date();
   // let tomorrow = new Date(today);

   // tomorrow.setDate(tomorrow.getDate() + 1);

   let day = week[today.getDay()];
   let date = today.getDate();
   let month = months[today.getMonth()];

   checkin_data.innerText = day + ' , ' + date + ' ' + month;
})

checkout_less.addEventListener('click', () => {
   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   let today = new Date();
   let tomorrow = new Date(today);

   tomorrow.setDate(tomorrow.getDate() + 1);

   let day = week[tomorrow.getDay()];
   let date = tomorrow.getDate();
   let month = months[tomorrow.getMonth()];

   checkout_data.innerText = day + ' , ' + date + ' ' + month;
})


const images = [
   "url(https://www.homewayproperties.in/assets/images/gallery/3-2.jpg) no-repeat center/cover",
   "url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)no-repeat center/cover",
   "url(https://www.homewayproperties.in/assets/images/gallery/3-1.jpg) no-repeat center/cover",
   "url(https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.jpg?s=612x612&w=0&k=20&c=8Iu_h5cFOEnlPz4_n2nfSUtOyfM_a-hHx9rmlxMF2rI=) no-repeat center/cover",
   "url(https://t3.ftcdn.net/jpg/08/79/35/42/360_F_879354250_psL6gbJPOwiGQpCEbyMuinfk8sozrpMn.jpg) no-repeat center/cover",
   "url(https://st.hzcdn.com/simgs/c121bbae04d57a82_3-0200/home-design.jpg) no-repeat center/cover",
]

let index = 1;
let h6 = document.getElementById('h6');

h6.innerText = "+" + images.length;

let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
let style = document.getElementsByClassName('content')[0].style;

btn_left.addEventListener("click", () =>{
   index -= 1;
   if(index < 0){
      index = (images.length) -1;
   }

   style.setProperty('--background' , images[index])
})

btn_right.addEventListener("click", () =>{
   index ++
   if(index > (images.length)-1){
      index = 0;
   }

   style.setProperty('--background' , images[index])
})