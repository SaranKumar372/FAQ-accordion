var contents=document.querySelectorAll(".content");
var paragraphs=document.querySelectorAll("p");
var plusicon=document.querySelectorAll(".plus");
var minusicon=document.querySelectorAll(".minus");

contents.forEach((content,index) => {
    content.addEventListener("click",function() {
        paragraphs.forEach((paragraph,i) => {
            paragraph.style.display = i === index && paragraph.style.display === "none" ? "block" : "none";
        });
        plusicon.forEach((plus,a) => {
            plus.style.display = a === index && plus.style.display === "block" ? "none" : "block";
        });
        minusicon.forEach((minus,b) => {
            minus.style.display = b === index && minus.style.display === "none" ? "block" : "none";
        })
    })
})