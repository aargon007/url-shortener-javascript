document.getElementById("submit-url").addEventListener("click", function(){
    const input = document.getElementById("url");
    const inputValue = input.value;
    input.value = "";

    const loadData = () =>{
        fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data))
    }
    const displayData = data =>{
        console.log(data);
        if(data.ok === false){
            alert(`${data.error}`);
            return false;
        } else {
            const link = document.getElementById("link");
            link.innerHTML = `
            <p class="text-2xl text-red-400 mb-3">Link Generated!</p>
            <a href="${data.result.full_short_link}" class="text-yellow-600 text-xl underline" target="_blank" id="short-url">${data.result.short_link}</a>
            `
        }
    }
    loadData()
})
document.getElementById("copy-link").addEventListener("click", function(){
      // Get the text field
  const copyText = document.getElementById("short-url").innerText;

  // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
//   alert("Copied the text: " + copyText);
})