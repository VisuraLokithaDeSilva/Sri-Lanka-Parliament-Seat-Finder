const members = [
    { name: "Hon. Anura Kumara Dissanayake", seat: "G-08" },
    { name: "Hon. Chathuranga Abeysinghe", seat: "G-33" },
    { name: "Hon. Sunil Watagala", seat: "G-30" },
    { name: "Hon. Aruna Panagoda", seat: "G-104" },
    { name: "Hon. Eranga Gunasekara", seat: "G-34" },
    { name: "Hon. (Dr.) Kaushalya Ariyarathne", seat: "G-69" },
    { name: "Hon. Asitha Niroshana Egoda Vithana", seat: "G-70" },
    { name: "Hon. Susantha Dodawatta", seat: "G-100" },
    { name: "Hon. Chandana Sooriyaarachchi", seat: "OG-102" },
    { name: "Hon. (Ms.) Samanmali Gunasingha", seat: "G-61" },
    { name: "Hon. Dewananda Suraweera", seat: "OG-101" },
    { name: "Hon. Mahinda Jayasinghe", seat: "G-32" },
    { name: "Hon. Muneer Mulaffer", seat: "G-43" },
    { name: "Hon. (Dr.) Asoka Sapumal Ranwala", seat: "G-55" },
    { name: "Hon. Darmapriya Wijesinghe", seat: "OG-94" },
    { name: "Hon. Ruwan Mapalagama", seat: "OG-69" },
    { name: "Hon. Lasith Bhashana Gamage", seat: "G-80" },
    { name: "Hon. Prageeth Madhuranga", seat: "OG-67" },
    { name: "Hon. Champika Hettiarachchi", seat: "OG-108" },
    { name: "Hon. Ruwanthilaka Jayakody", seat: "G-87" },
    { name: "Hon. U.P. Abeywickrama", seat: "G-66" },
    { name: "Hon. Stepni Fernando", seat: "G-107" },
    { name: "Hon. Chaminda Lalith Kumara", seat: "G-76" },
    { name: "Hon. Amila Prasad", seat: "O-52" },
    { name: "Hon. (Mrs.) Nilanthi Kottahachchi", seat: "G-78" },
    { name: "Hon. (Dr.) Nihal Abeysinghe", seat: "G-25" },
    { name: "Hon. Sanjeewa Ranasingha", seat: "OG-81" },
    { name: "Hon. Danushka Ranganath", seat: "OG-72" },
    { name: "Hon. (Ms.) Oshani Umanga", seat: "G-72" },
    { name: "Hon. Chandima Hettiaratchi", seat: "OG-107" },
    { name: "Hon. Nandana Pathmakumara", seat: "G-103" },
    { name: "Hon. Jagath Vithana", seat: "O-62" },
    { name: "Hon. Jagath Manuwarna", seat: "OG-68" },
    { name: "Hon. (Dr.) Prasanna Gunasena", seat: "G-38" },
    { name: "Hon. (Dr.) Hansaka Wijemuni", seat: "G-45" },
    { name: "Hon. Thanura Dissanayake", seat: "G-96" },
    { name: "Hon. E.M. Basnayaka", seat: "G-115" },
    { name: "Hon. Riyas Farook", seat: "OG-71" },
    { name: "Hon. (Mrs.) Thushari Jayasingha", seat: "G-89" },
    { name: "Hon. Fasmin Sharif", seat: "OG-97" },
    { name: "Hon. (Ms.) Chamindranee Kiriella", seat: "O-49" },
    { name: "Hon. Gamagedara Dissanayake", seat: "G-28" },
    { name: "Hon. Sunil Biyanwila", seat: "OG-65" },
    { name: "Hon. (Mrs.) Deepthi Wasalage", seat: "OG-88" },
    { name: "Hon. Dinesh Hemantha", seat: "OG-109" },
    { name: "Hon. Manjula Suraweera Arachchi", seat: "G-58" },
    { name: "Hon. (Dr.) Madhura Senevirathna", seat: "G-49" },
    { name: "Hon. R.G. Wijerathna", seat: "OG-90" },
    { name: "Hon. (Mrs.) Anushka Thilakarathne", seat: "G-94" },
    { name: "Hon. (Ms.) Krishnan Kalaichelvi", seat: "G-73" },
    { name: "Hon. Nalin Hewage", seat: "G-37" },
    { name: "Hon. Rathna Gamage", seat: "G-31" },
    { name: "Hon. (Mrs.) Hasara Liyanage", seat: "OG-87" },
    { name: "Hon. Dr. Nishantha Samaraweera", seat: "OG-91" },
    { name: "Hon. Thilanka U. Gamage", seat: "G-81" },
    { name: "Hon. Nishantha Perera", seat: "G-106" },
    { name: "Hon. T.K. Jayasundara", seat: "G-90" },
    { name: "Hon. Chanaka Madugoda", seat: "O-56" },
    { name: "Hon. (Prof.) L.M. Abeywickrama", seat: "G-67" },
    { name: "Hon. Arkam Ilyas", seat: "G-71" },
    { name: "Hon. Ajantha Gammeddage", seat: "G-83" },
    { name: "Hon. Lal Premanath", seat: "G-109" },
    { name: "Hon. Chathura Galappaththi", seat: "O-50" },
    { name: "Hon. Athula Welandagoda", seat: "OG-96" },
    { name: "Hon. (Dr.) Sandaruwan Madarasinghe", seat: "OG-66" },
    { name: "Hon. Aravinda Senarath", seat: "OG-104" },
    { name: "Hon. P. Ruwan Senarath", seat: "G-48" },
    { name: "Hon. K. Ilankumaran", seat: "G-59" },
    { name: "Hon. (Dr.) Sri Bavanandarajah", seat: "G-114" },
    { name: "Hon. Rajeevan Jeyachandramoorthy", seat: "G-92" },
    { name: "Hon. (Dr.) Ramanathan Archchuna", seat: "O-16" },
    { name: "Hon. Sellaththamby Thilaganathan", seat: "G-93" },
    { name: "Hon. Mayilvaganam Jegathiswaran", seat: "G-91" },
    { name: "Hon. Thurairasa Ravikaran", seat: "O-60" },
    { name: "Hon. (Dr.) Elayathamby Srinath", seat: "O-79" },
    { name: "Hon. Kanthasamy Prabu", seat: "G-108" },
    { name: "Hon. Wasantha Piyathissa", seat: "MP76" },
    { name: "Hon. Manjula Sugath Rathnayaka", seat: "OG-83" },
    { name: "Hon. Priyantha Wijerathna", seat: "OG-92" },
    { name: "Hon. (Ms.) A.M.M.M. Rathwaththe", seat: "OG-84" },
    { name: "Hon. M.S. Uthumalebbe", seat: "O-57" },
    { name: "Hon. M.A.M. Thahir", seat: "O-17" },
    { name: "Hon. Arun Hemachandra", seat: "G-50" },
    { name: "Hon. Roshan Akmeemana", seat: "G-65" },
    { name: "Hon. Sujeewa Dissanayake", seat: "G-99" },
    { name: "Hon. Wijesiri Basnayake", seat: "G-116" },
    { name: "Hon. (Mrs.) Geetha Herath", seat: "OG-110" },
    { name: "Hon. (Dr.) Namal Sudarshana", seat: "G-47" },
    { name: "Hon. Jagath Gunawardana", seat: "G-85" },
    { name: "Hon. Ashoka Gunasena", seat: "G-86" },
    { name: "Hon. Major General Sooriyabandara", seat: "OG-103" },
    { name: "Hon. Chandana Thennakoon", seat: "G-95" },
    { name: "Hon. Darmapriya Dissanayaka", seat: "G-98" },
    { name: "Hon. M.K.M. Aslam", seat: "G-68" },
    { name: "Hon. Ajith Gihan", seat: "G-84" },
    { name: "Hon. Gayan Janaka", seat: "G-62" },
    { name: "Hon. (Mrs.) Hiruni Wijesinghe", seat: "OG-95" },
    { name: "Hon. Anton Jayakody", seat: "G-39" },
    { name: "Hon. Muhammad Faizal", seat: "OG-112" },
    { name: "Hon. Chithral Fernando", seat: "O-51" },
    { name: "Hon. Sena Nanayakkara", seat: "G-102" },
    { name: "Hon. Susil Ranasinghe", seat: "G-44" },
    { name: "Hon. Susantha Kumara Nawarathna", seat: "G-101" },
    { name: "Hon. Bhagya Sri Herath", seat: "OG-111" },
    { name: "Hon. Nimal Palihena", seat: "G-105" },
    { name: "Hon. Thilina Samarakoon", seat: "OG-99" },
    { name: "Hon. Suranga Rathnayaka", seat: "O-61" },
    { name: "Hon. T. B. Sarath", seat: "G-36" },
    { name: "Hon. (Dr.) Jagath Wickramaratne", seat: "MP108" },
    { name: "Hon. Sunil Rathnasiri", seat: "OG-82" },
    { name: "Hon. Padmasiri Bandara", seat: "G-111" },
    { name: "Hon. Kitnan Selvaraj", seat: "OG-105" },
    { name: "Hon. (Ms.) Ambika Samivel", seat: "OG-100" },
    { name: "Hon. Ravindra Bandara", seat: "G-112" },
    { name: "Hon. Sudath Balagalla", seat: "G-113" },
    { name: "Hon. Dinindu Saman", seat: "OG-98" },
    { name: "Hon. R.M. Jayawardhana", seat: "G-29" },
    { name: "Hon. Ajith Agalakada", seat: "G-63" },
    { name: "Hon. (Ms.) M.A.C.S. Chathuri Gangani", seat: "G-79" },
    { name: "Hon. Ruwan Wijeweera", seat: "OG-93" },
    { name: "Hon. Sarath Kumara", seat: "G-77" },
    { name: "Hon. Shantha Pathma Kumara Subasinga", seat: "G-60" },
    { name: "Hon. Sundaralingam Pradeep", seat: "G-40" },
    { name: "Hon. (Dr.) Janaka Senarathna", seat: "OG-106" },
    { name: "Hon. Sunil Rajapaksha", seat: "OG-86" },
    { name: "Hon. Upul Kithsiri", seat: "G-74" },
    { name: "Hon. Wasantha Pushpa Kumara", seat: "G-75" },
    { name: "Hon. (Ms.) Nilusha Lakmali Gamage", seat: "G-82" },
    { name: "Hon. B. Ariyawansha", seat: "O-48" },
    { name: "Hon. Kosala Nuwan Jayaweera", seat: "G-88" },
    { name: "Hon. (Mrs.) Sagarika Athauda", seat: "G-64" },
    { name: "Hon. Manoj Rajapaksha", seat: "OG-85" },
    { name: "Hon. (Dr.) Nandana Millagala", seat: "OG-70" },
    { name: "Hon. Kanchana Welipitiya", seat: "OG-89" },
    { name: "Hon. Nanda Bandara", seat: "G-110" },
    { name: "Hon. Eranga Weerarathna", seat: "G-46" },
    { name: "Hon. Aruna Jayasekera", seat: "G-52" },
    { name: "Hon. Harshana Suriyapperuma", seat: "G-54" },
    { name: "Hon. Janitha Ruwan Kodithuwakku", seat: "G-51" },
    { name: "Hon. Najith Indika", seat: "OG-114" },
    { name: "Hon. Sugath Thilakaratne", seat: "G-53" },
    { name: "Hon. (Ms.) Lakmali Hemachandra", seat: "OG-115" },
    { name: "Hon. (Prof.) Ruwan Ranasinghe", seat: "G-42" },
    { name: "Hon. Sugath Wasantha de Silva", seat: "G-97" },
    { name: "Hon. Aboobucker Athambawa", seat: "OG-113" },
    { name: "Hon. Upali Samarasingha", seat: "G-35" },
    { name: "Hon. Dilith Jayaweera", seat: "O-18" },
    { name: "Hon. Pathmanathan Sathiyalingam", seat: "O-80" },
    { name: "Hon. Mohamed Sali Naleem", seat: "O-58" },
    { name: "Hon. (Dr.) Rizvie Salih", seat: "G-21" },
    { name: "Hon. (Mrs.) Hemali Weerasekara", seat: "G-41" },
    { name: "Hon. (Dr.)(Ms.) Harini Amarasuriya", seat: "G-07" },
    { name: "Hon. Bimal Rathnayake", seat: "G-06" },
    { name: "Hon. (Dr.) Nalinda Jayathissa", seat: "G-05" },
    { name: "Hon. Vijitha Herath", seat: "G-04" },
    { name: "Hon. K.D. Lal Kantha", seat: "G-03" },
    { name: "Hon. Sunil Handunnetti", seat: "G-02" },
    { name: "Hon. Ramalingam Chandrasekar", seat: "G-09" },
    { name: "Hon. K.V. Samantha Vidyarathna", seat: "G-01" },
    { name: "Hon. Wasantha Samarasinghe", seat: "G-10" },
    { name: "Hon. A.H.M.H. Abayarathna", seat: "160" },
    { name: "Hon. Chrishantha Abeysena", seat: "G-12" },
    { name: "Hon. Gayantha Karunathilleka", seat: "O-07" },
    { name: "Hon. Anura Karunathilaka", seat: "G-22" },
    { name: "Hon. Sunil Kumara Gamage", seat: "G-19" },
    { name: "Hon. Kumara Jayakody", seat: "G-20" },
    { name: "Hon. (Prof.) Anil Jayantha", seat: "G-13" },
    { name: "Hon. Harshana Nanayakkara", seat: "G-14" },
    { name: "Hon. R.M. Gamini Rathnayake", seat: "G-57" },
    { name: "Hon. Dammika Patabendi", seat: "G-15" },
    { name: "Hon. Namal Karunaratne", seat: "G-27" },
    { name: "Hon. (Dr.) Upali Pannilage", seat: "G-23" },
    { name: "Hon. (Mrs.) Saroja Savithri Paulraj", seat: "G-16" },
    { name: "Hon. Rauff Hakeem", seat: "O-05" },
    { name: "Hon. Ananda Wijepala", seat: "G-17" },
    { name: "Hon. (Dr.) Hiniduma Sunil Senevi", seat: "G-18" },
    { name: "Hon. Sajith Premadasa", seat: "O-08" },
    { name: "Hon. Rishad Bathiudeen", seat: "O-04" },
    { name: "Hon. Ravi Karunanayake", seat: "O-09" },
    { name: "Hon. Palani Thigambaram", seat: "O-03" },
    { name: "Hon. R. M. Ranjith Madduma Bandara", seat: "O-06" },
    { name: "Hon. Kabir Hashim", seat: "O-02" },
    { name: "Hon. Dayasiri Jayasekara", seat: "O-21" },
    { name: "Hon. Ajith P. Perera", seat: "O-23" },
    { name: "Hon. Rohitha Abeygunawardhana", seat: "O-38" },
    { name: "Hon. Namal Rajapaksa", seat: "O-11" },
    { name: "Hon. Nihal Galappaththi", seat: "G-24" },
    { name: "Hon. Jeevan Thondaman", seat: "O-12" },
    { name: "Hon. (Dr.) Harsha de Silva", seat: "O-22" },
    { name: "Hon. (Dr.) V.S. Radhakrishnan", seat: "O-25" },
    { name: "Hon. Dilip Wedaarachchi", seat: "O-26" },
    { name: "Hon. J.C. Alawathuwala", seat: "O-27" },
    { name: "Hon. Kaveenthiran Kodeeswaran", seat: "O-39" },
    { name: "Hon. D. V. Chanaka", seat: "O-55" },
    { name: "Hon. Gnanamuththu Srineshan", seat: "O-40" },
    { name: "Hon. Anuradha Jayaratne", seat: "O-53" },
    { name: "Hon. (Dr.) M.L.A.M. Hizbullah", seat: "O-10" },
    { name: "Hon. Kader Masthan", seat: "O-13" },
    { name: "Hon. Chamara Sampath Dasanayake", seat: "O-54" },
    { name: "Hon. Nalin Bandara Jayamaha", seat: "O-28" },
    { name: "Hon. Amirthanathan Adaikkalanathan", seat: "O-14" },
    { name: "Hon. G.G. Ponnambalam", seat: "O-15" },
    { name: "Hon. Lakshman Nipuna Arachchi", seat: "G-56" },
    { name: "Hon. Sivagnanam Shritharan", seat: "O-20" },
    { name: "Hon. Hector Appuhamy", seat: "O-29" },
    { name: "Hon. (Dr.) Kavinda Heshan Jayawardhana", seat: "O-30" },
    { name: "Hon. Sujith Sanjaya Perera", seat: "O-31" },
    { name: "Hon. S.M. Marikkar", seat: "O-32" },
    { name: "Hon. Imran Maharoof", seat: "O-33" },
    { name: "Hon. Mujibur Rahman", seat: "O-42" },
    { name: "Hon. Harshana Rajakaruna", seat: "O-34" },
    { name: "Hon. (Mrs.) Rohini Kumari Wijerathna", seat: "O-35" },
    { name: "Hon. Hesha Withanage", seat: "O-36" },
    { name: "Hon. Waruna Liyanage", seat: "O-43" },
    { name: "Hon. Chaminda Wijesiri", seat: "O-41" },
    { name: "Hon. Kins Nelson", seat: "O-44" },
    { name: "Hon. W. H. M. Dharmasena", seat: "O-46" },
    { name: "Hon. Shanakiyan Rajaputhiran Rasamanickam", seat: "O-19" },
    { name: "Hon. Rohana Bandara", seat: "O-45" },
    { name: "Hon. Nayana Wasalathilaka", seat: "O-47" },
    { name: "Hon. K.S. Kugathasan", seat: "O-59" },
    { name: "Hon. Sujeewa Senasinghe", seat: "O-24" },
    { name: "Hon. Faiszer Musthapha", seat: "O-37" },
    { name: "Hon. Ismail Muththu Mohamed", seat: "O-63" },
    { name: "Hon. M. Nizam Kariapper", seat: "O-64" },
    { name: "Hon. Mano Ganesan", seat: "O-01" }
	
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
