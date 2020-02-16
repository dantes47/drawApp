document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelectorAll(".color_change").forEach((button) => {
        button.onclick = () => {
            document.querySelector("#hello").style.color = button.dataset.color;
        };
    });

     // Page refreshing:

     document.querySelector("#reload").onclick = () => {
         window.location.reload(false);
         // return false;
     };
});

