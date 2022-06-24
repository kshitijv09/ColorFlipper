// innerText, TextContent and innerHTML
const colors=["YELLOW","GOLDENROD","GREEN","STEELBLUE","ORANGE","PINK","RED"];
const abc=document.querySelector(".butt");
const test=document.getElementById("tester");

abc.addEventListener("click",function(){
	let col=Math.floor(Math.random() * colors.length);
	test.textContent=colors[col];
	document.body.style.backgroundColor = colors[col];
})
/*function print()
{
	let col=Math.floor(Math.random() * 5)
	test.textContent=colors[col];
	document.body.style.backgroundColor = colors[col];
}*/

