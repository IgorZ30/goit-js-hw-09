const formData = {
    email: "",
    message: "" 
}


const form = document.querySelector(".feedback-form")
const localStorKey = "feedback-form-state"

if (localStorage.getItem(localStorKey) !== null) {
   const parsData = JSON.parse(localStorage.getItem(localStorKey))
    formData.email = parsData.email
    formData.message = parsData.message
    Object.keys(formData).forEach(name => {
        form.elements[name].value = formData[name]
    })
}
function handleInput(e) {
    
    formData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state",JSON.stringify(formData))
   
}

form.addEventListener("input", handleInput)

form.addEventListener("submit", e => {
    e.preventDefault()
     
    if (!formData.email || !formData.message) {
            alert("Fill please all fields")
            
        }
    else {
            console.log(formData)
            localStorage.clear()
       localStorage.removeItem(localStorKey)
     formData.email = "";
formData.message = "";
        }
    
})
