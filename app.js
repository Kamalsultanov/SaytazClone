let page = document.getElementById("pages");
let level = document.getElementById("level");
let logodesign = document.getElementById("logodesign");
let expense = document.getElementById("expense");
let expenseFunction = document.getElementById("expenseFunction");
let expenseSeo = document.getElementById("expenseSeo");
let expenseCom = document.getElementById("expenseCom");
let cost= document.getElementById("cost");
let pageprice= document.getElementById("pageprice");
let funcprice= document.getElementById("funcprice");
let seoprice= document.getElementById("seoprice");
let totalprice= document.getElementById("totalprice");
let extraexpense = 0; 
let extraexpenseSeo = 0; 
let extraexpenseCom = 0; 
let mincost = 450; 

function calc() {
    let pagecost = page.value * (level.value * 100)
    let logocost = logodesign.value * 100
    let totalcost = pagecost + logocost + extraexpense + extraexpenseCom + extraexpenseSeo
    let finalprice 
    totalcost > mincost ? finalprice = totalcost : finalprice = mincost
    
    expense.innerHTML = `<h1 class="text-[#a271f2] text-[1.3em] font-semibold">${page.value} səhifə / ₼ ${ pagecost}</h1>`;
    cost.innerHTML = `<h1 class="text-[#a271f2] text-[1.3em] font-semibold">${logocost} ₼</h1>`;
    expenseFunction.innerHTML = `<h1 class="text-[#a271f2] text-[1.3em] font-semibold">${extraexpense} ₼ </h1>`;
    expenseSeo.innerHTML = `<h1 class="text-[#a271f2] text-[1.3em] font-semibold">${extraexpenseSeo} ₼ </h1>`;
    expenseCom.innerHTML = `<h1 class="text-[#a271f2] text-[1.3em] font-semibold">${extraexpenseCom} ₼ </h1>`;
    pageprice.innerHTML = `<h3 class="text-[#a271f2] font-bold">${pagecost} ₼</h3>`
    funcprice.innerHTML = `<h3 class="text-[#a271f2] font-bold">${extraexpense} ₼</h3>`
    seoprice.innerHTML = `<h3 class="text-[#a271f2] font-bold">${extraexpenseSeo} ₼</h3>`
    comprice.innerHTML = `<h3 class="text-[#a271f2] font-bold">${extraexpenseCom} ₼</h3>`
    logoprice.innerHTML = `<h3 class="text-[#a271f2] font-bold">${logocost} ₼</h3>`
    totalprice.innerHTML = `<h3 class="text-white font-bold text-[1.5em]">${ finalprice } ₼</h3>`
}
calc()


function toggle(checkbox,x) {
    checkbox.checked ? extraexpense += +x : extraexpense -= +x;
    calc();
}
function toggleSeo(checkbox,x) {
    checkbox.checked ? extraexpenseSeo += +x : extraexpenseSeo -= +x;
    calc();
}
function toggleCom(checkbox,x) {
    checkbox.checked ? extraexpenseCom += +x : extraexpenseCom -= +x;
    calc();
}


function selectFlag() {
    const flagpart = document.getElementById('flagpart');
    flagpart.classList.toggle('hidden'); 
}
function selectCur() {
    const curpart = document.getElementById('curpart');
    curpart.classList.toggle('hidden'); 
}
const mobnav = document.getElementById("mobnav")

function sideBar() { mobnav.classList.toggle("hidden") }
  
const popup = document.getElementById("popup")
function popups(){ popup.classList.toggle("hidden")}
  