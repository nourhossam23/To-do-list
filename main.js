const form = document.querySelector("form");
const sec = document.querySelector(".sec");
const input = document.querySelector("input");

//add new task 
form.addEventListener("submit", (eo) => {
    eo.preventDefault();
    const newtask = `
    
    <div class="task">
    
           <span class="icon star" id="star">⭐ </span>
        <p lang="ar" class= "task-text">
            ${input.value}
        </p>
        <div>

            <span class="icon trach" id="trach">🗑️</span>
            <span class="icon sad" id="sad">☹️</span>

        </div>
        <!-- <span  class="icon heart" id="heart">💖</span> -->
    </div>
    `
    sec.innerHTML += newtask
    input.value=""
})



sec.addEventListener("click", (eo) => {
    // remove the task 
    if (eo.target.className == "icon trach") {
        eo.target.parentElement.parentElement.remove()
    }
    // replace between sad and heart 
    else if (eo.target.className == "icon sad") {
        eo.target.classList.add("dn")
        const heart = `
        <span class="icon heart" id="heart">💖</span>
        `
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");
        eo.target.parentElement.innerHTML += heart
    }
    //replace between heart and sad
    else if (eo.target.className == "icon heart") {
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");
        eo.target.classList.add("dn")
        const addsad = `
                    <span class="icon sad" id="sad">☹️</span>
        `
        eo.target.parentElement.innerHTML += addsad

    }
    //when i click on star icom
    else if (eo.target.className == "icon star") {
        eo.target.classList.add("star-active");
        sec.prepend(eo.target.parentElement);
    }
     else if (eo.target.className == "icon star star-active") {
        eo.target.classList.remove("star-active");
        sec.prepend(eo.target.parentElement);
    }
})







