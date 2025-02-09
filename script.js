const members = [
    { name: "John Perera", seat: "A12" },
    { name: "Kamal Silva", seat: "B07" },
    { name: "Nimal Fernando", seat: "C22" },
    { name: "Sarath Kumara", seat: "D05" },
    { name: "Vijitha Bandara", seat: "E14" }
];

let selectedIndex = -1;

function showSuggestions() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";
    selectedIndex = -1;
    
    if (input === "") {
        suggestionsBox.style.display = "none";
        return;
    }
    
    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(input)
    );

    if (filteredMembers.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }
    
    suggestionsBox.style.display = "block";
    filteredMembers.forEach((member, index) => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent = member.name;
        div.setAttribute("data-index", index);
        div.onclick = function() {
            selectSuggestion(index, filteredMembers);
        };
        suggestionsBox.appendChild(div);
    });
}

function navigateSuggestions(event) {
    const suggestionsBox = document.getElementById("suggestions");
    const items = document.querySelectorAll(".suggestion-item");
    if (items.length === 0) return;

    if (event.key === "ArrowDown") {
        selectedIndex = (selectedIndex + 1) % items.length;
    } else if (event.key === "ArrowUp") {
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
    } else if (event.key === "Enter") {
        if (selectedIndex >= 0) {
            selectSuggestion(selectedIndex, members.filter(member => member.name.toLowerCase().includes(document.getElementById("searchBox").value.toLowerCase())));  
        }
        return;
    } else {
        return;
    }

    items.forEach(item => item.classList.remove("selected"));
    items[selectedIndex].classList.add("selected");
}

function selectSuggestion(index, filteredMembers) {
    document.getElementById("searchBox").value = filteredMembers[index].name;
    document.getElementById("seatNumber").value = filteredMembers[index].seat;
    document.getElementById("suggestions").style.display = "none";
}

function clearFields() {
    document.getElementById("searchBox").value = "";
    document.getElementById("seatNumber").value = "";
    document.getElementById("suggestions").style.display = "none";
}
