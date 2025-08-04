let result = document.getElementById("result");

let lotteryButton = document.getElementById("lotteryButton");

let LotterySheetContainer = document.getElementById("LotterySheetContainer");
let tap = new Audio("tap.wav")
let success = new Audio("success.wav")

const prizes = [
  "₹100 Cash", "Toy Car", "Chocolate Box", "₹500 Cash", "Smartphone Cover",
  "Book", "Headphones", "₹50 Cash", "Gift Voucher", "Watch",
  "Teddy Bear", "Bluetooth Speaker", "Movie Ticket", "₹200 Cash", "Puzzle Game",
  "Perfume", "Sunglasses", "₹1000 Cash", "Board Game", "Fitness Band",
  "Digital Clock", "Lamp", "Shopping Voucher", "Laptop Bag", "Wireless Mouse",
  "Travel Mug", "Notebook Set", "Gaming Mousepad", "₹250 Cash", "Keychain",
  "Water Bottle", "Portable Charger", "Desk Organizer", "Cooking Set", "Action Figure",
  "₹300 Cash", "Travel Pillow", "Mini Backpack", "Personalized Mug", "Gaming Controller",
  "Camera Strap", "Toy Robot", "₹750 Cash", "Sports Equipment", "Pen Set",
  "Bluetooth Earbuds", "Digital Photo Frame", "Wallet", "Backpack", "Gift Hamper"
];

lotteryButton.addEventListener("click",function(){
    for(let i=1; i<=50 ; i++){
        document.getElementById(i).classList.remove("winningContainer")

    }
    result.textContent = "Please wait...... "
    setTimeout(()=>{
       
    
    },1000)

    let counter = 0
    let clear = setInterval(() => {
      tap.pause();
      tap.currentTime = 0;
        tap.play();

        counter += 1
        
    let randomBox = Math.floor((Math.random()*50)+1)
    console.log(randomBox);
    for(let i=1; i<=50 ; i++){
       if(i===randomBox){
         document.getElementById(i).classList.add("excitmentbox")
       }else{
         document.getElementById(i).classList.remove("excitmentbox")

       }

    }
    document.getElementById(randomBox).classList.add("excitmentbox")
    if(counter ===5){
             let randomNo = Math.floor((Math.random() *50)+1);
        document.getElementById(randomNo).classList.remove("winningContainer")
        result.textContent = `You have got ${randomNo}, and you win ${prizes[randomNo - 1]} `;
    // console.log(document.getElementById(randomNo).classList);
         document.getElementById(randomBox).classList.remove("excitmentbox")

    document.getElementById(randomNo).classList.add("winningContainer")
    
    success.pause();
    success.currentTime = 0;
    success.play();
    
    clearInterval(clear)
        }
}, 1000);
})






prizes.forEach((val,i)=>{
    // divContainer.textContent = val
    let divContainer = `<div class="box" id=${i+1}> ${i+1}. ${val} </div>`
    // console.log(divContainer);
LotterySheetContainer.insertAdjacentHTML("beforeend",divContainer)
    
})