

let btn = document.querySelectorAll(".nav .btn");
let phote = document.querySelectorAll(".container .phote");


btn.forEach(function (el)
{
    el.addEventListener("click", function ()
    {
        let temp = el.dataset.target;
        console.log(temp)
        document.querySelector(".nav .active").classList.remove("active");
        el.classList.add("active");
        
        phote.forEach(function (ele)
        {
            let i = ele.dataset.item;
            ele.classList.remove("show");
            ele.classList.add("hidden");
            if (i == temp || temp == "all")
            {
                ele.classList.remove("hidden");
                ele.classList.add("show");
            } 
        })
    })
    
})

