const members = [
    { name: "Hon. Chathuranga Abeysinghe", seat: "MP1" },
    { name: "Hon. Sunil Watagala", seat: "MP2" },
    { name: "Hon. Aruna Panagoda", seat: "MP3" },
    { name: "Hon. Eranga Gunasekara", seat: "MP4" },
    { name: "Hon. (Dr.) Kaushalya Ariyarathne", seat: "MP5" },
    { name: "Hon. Asitha Niroshana Egoda Vithana", seat: "MP6" },
    { name: "Hon. Susantha Dodawatta", seat: "MP7" },
    { name: "Hon. Chandana Sooriyaarachchi", seat: "MP8" },
    { name: "Hon. (Ms.) Samanmali Gunasingha", seat: "MP9" },
    { name: "Hon. Dewananda Suraweera", seat: "MP10" },
    { name: "Hon. Mahinda Jayasinghe", seat: "MP11" },
    { name: "Hon. Muneer Mulaffer", seat: "MP12" },
    { name: "Hon. (Dr.) Asoka Sapumal Ranwala", seat: "MP13" },
    { name: "Hon. Darmapriya Wijesinghe", seat: "MP14" },
    { name: "Hon. Ruwan Mapalagama", seat: "MP15" },
    { name: "Hon. Lasith Bhashana Gamage", seat: "MP16" },
    { name: "Hon. Prageeth Madhuranga", seat: "MP17" },
    { name: "Hon. Champika Hettiarachchi", seat: "MP18" },
    { name: "Hon. Ruwanthilaka Jayakody", seat: "MP19" },
    { name: "Hon. U.P. Abeywickrama", seat: "MP20" },
    { name: "Hon. Stepni Fernando", seat: "MP21" },
    { name: "Hon. Chaminda Lalith Kumara", seat: "MP22" },
    { name: "Hon. Amila Prasad", seat: "MP23" },
    { name: "Hon. (Mrs.) Nilanthi Kottahachchi", seat: "MP24" },
    { name: "Hon. (Dr.) Nihal Abeysinghe", seat: "MP25" },
    { name: "Hon. Sanjeewa Ranasingha", seat: "MP26" },
    { name: "Hon. Danushka Ranganath", seat: "MP27" },
    { name: "Hon. (Ms.) Oshani Umanga", seat: "MP28" },
    { name: "Hon. Chandima Hettiaratchi", seat: "MP29" },
    { name: "Hon. Nandana Pathmakumara", seat: "MP30" },
    { name: "Hon. Jagath Vithana", seat: "MP31" },
    { name: "Hon. Jagath Manuwarna", seat: "MP32" },
    { name: "Hon. (Dr.) Prasanna Gunasena", seat: "MP33" },
    { name: "Hon. (Dr.) Hansaka Wijemuni", seat: "MP34" },
    { name: "Hon. Thanura Dissanayake", seat: "MP35" },
    { name: "Hon. E.M. Basnayaka", seat: "MP36" },
    { name: "Hon. Riyas Farook", seat: "MP37" },
    { name: "Hon. (Mrs.) Thushari Jayasingha", seat: "MP38" },
    { name: "Hon. Fasmin Sharif", seat: "MP39" },
    { name: "Hon. (Ms.) Chamindranee Kiriella", seat: "MP40" },
    { name: "Hon. Gamagedara Dissanayake", seat: "MP41" },
    { name: "Hon. Sunil Biyanwila", seat: "MP42" },
    { name: "Hon. (Mrs.) Deepthi Wasalage", seat: "MP43" },
    { name: "Hon. Dinesh Hemantha", seat: "MP44" },
    { name: "Hon. Manjula Suraweera Arachchi", seat: "MP45" },
    { name: "Hon. (Dr.) Madhura Senevirathna", seat: "MP46" },
    { name: "Hon. R.G. Wijerathna", seat: "MP47" },
    { name: "Hon. (Mrs.) Anushka Thilakarathne", seat: "MP48" },
    { name: "Hon. (Ms.) Krishnan Kalaichelvi", seat: "MP49" },
    { name: "Hon. Nalin Hewage", seat: "MP50" },
    { name: "Hon. Rathna Gamage", seat: "MP51" },
    { name: "Hon. (Mrs.) Hasara Liyanage", seat: "MP52" },
    { name: "Hon. Dr. Nishantha Samaraweera", seat: "MP53" },
    { name: "Hon. Thilanka U. Gamage", seat: "MP54" },
    { name: "Hon. Nishantha Perera", seat: "MP55" },
    { name: "Hon. T.K. Jayasundara", seat: "MP56" },
    { name: "Hon. Chanaka Madugoda", seat: "MP57" },
    { name: "Hon. (Prof.) L.M. Abeywickrama", seat: "MP58" },
    { name: "Hon. Arkam Ilyas", seat: "MP59" },
    { name: "Hon. Ajantha Gammeddage", seat: "MP60" },
    { name: "Hon. Lal Premanath", seat: "MP61" },
    { name: "Hon. Chathura Galappaththi", seat: "MP62" },
    { name: "Hon. Athula Welandagoda", seat: "MP63" },
    { name: "Hon. Sandaruwan Madarasinghe", seat: "MP64" },
    { name: "Hon. Aravinda Senarath", seat: "MP65" },
    { name: "Hon. P. Ruwan Senarath", seat: "MP66" },
    { name: "Hon. K. Ilankumaran", seat: "MP67" },
    { name: "Hon. (Dr.) Sri Bavanandarajah", seat: "MP68" },
    { name: "Hon. Rajeevan Jeyachandramoorthy", seat: "MP69" },
    { name: "Hon. (Dr.) Ramanathan Archchuna", seat: "MP70" },
    { name: "Hon. Sellaththamby Thilaganathan", seat: "MP71" },
    { name: "Hon. Mayilvaganam Jegathiswaran", seat: "MP72" },
    { name: "Hon. Thurairasa Ravikaran", seat: "MP73" },
    { name: "Hon. (Dr.) Elayathamby Srinath", seat: "MP74" },
    { name: "Hon. Kanthasamy Prabu", seat: "MP75" },
    { name: "Hon. Wasantha Piyathissa", seat: "MP76" },
    { name: "Hon. Manjula Sugath Rathnayaka", seat: "MP77" },
    { name: "Hon. Priyantha Wijerathna", seat: "MP78" },
    { name: "Hon. (Ms.) A.M.M.M. Rathwaththe", seat: "MP79" },
    { name: "Hon. M.S. Uthumalebbe", seat: "MP80" },
    { name: "Hon. M.A.M. Thahir", seat: "MP81" },
    { name: "Hon. Arun Hemachandra", seat: "MP82" },
    { name: "Hon. Roshan Akmeemana", seat: "MP83" },
    { name: "Hon. Sujeewa Dissanayake", seat: "MP84" },
    { name: "Hon. Wijesiri Basnayake", seat: "MP85" },
    { name: "Hon. (Mrs.) Geetha Herath", seat: "MP86" },
    { name: "Hon. (Dr.) Namal Sudarshana", seat: "MP87" },
    { name: "Hon. Jagath Gunawardana", seat: "MP88" },
    { name: "Hon. Ashoka Gunasena", seat: "MP89" },
    { name: "Hon. Major General Sooriyabandara", seat: "MP90" },
    { name: "Hon. Chandana Thennakoon", seat: "MP91" },
    { name: "Hon. Darmapriya Dissanayaka", seat: "MP92" },
    { name: "Hon. M.K.M. Aslam", seat: "MP93" },
    { name: "Hon. Ajith Gihan", seat: "MP94" },
    { name: "Hon. Gayan Janaka", seat: "MP95" },
    { name: "Hon. (Mrs.) Hiruni Wijesinghe", seat: "MP96" },
    { name: "Hon. Anton Jayakody", seat: "MP97" },
    { name: "Hon. Muhammad Faizal", seat: "MP98" },
    { name: "Hon. Chithral Fernando", seat: "MP99" },
    { name: "Hon. Sena Nanayakkara", seat: "MP100" },
    { name: "Hon. Susil Ranasinghe", seat: "MP101" },
    { name: "Hon. Susantha Kumara Nawarathna", seat: "MP102" },
    { name: "Hon. Bhagya Sri Herath", seat: "MP103" },
    { name: "Hon. Nimal Palihena", seat: "MP104" },
    { name: "Hon. Thilina Samarakoon", seat: "MP105" },
    { name: "Hon. Suranga Rathnayaka", seat: "MP106" },
    { name: "Hon. T. B. Sarath", seat: "MP107" },
    { name: "Hon. (Dr.) Jagath Wickramaratne", seat: "MP108" },
    { name: "Hon. Sunil Rathnasiri", seat: "MP109" },
    { name: "Hon. Padmasiri Bandara", seat: "MP110" },
    { name: "Hon. Kitnan Selvaraj", seat: "MP111" },
    { name: "Hon. (Ms.) Ambika Samivel", seat: "MP112" },
    { name: "Hon. Ravindra Bandara", seat: "MP113" },
    { name: "Hon. Sudath Balagalla", seat: "MP114" },
    { name: "Hon. Dinindu Saman", seat: "MP115" },
    { name: "Hon. R.M. Jayawardhana", seat: "MP116" },
    { name: "Hon. Ajith Agalakada", seat: "MP117" },
    { name: "Hon. (Ms.) M.A.C.S. Chathuri Gangani", seat: "MP118" },
    { name: "Hon. Ruwan Wijeweera", seat: "MP119" },
    { name: "Hon. Sarath Kumara", seat: "MP120" },
    { name: "Hon. Shantha Pathma Kumara Subasinga", seat: "MP121" },
    { name: "Hon. Sundaralingam Pradeep", seat: "MP122" },
    { name: "Hon. (Dr.) Janaka Senarathna", seat: "MP123" },
    { name: "Hon. Sunil Rajapaksha", seat: "MP124" },
    { name: "Hon. Upul Kithsiri", seat: "MP125" },
    { name: "Hon. Wasantha Pushpa Kumara", seat: "MP126" },
    { name: "Hon. (Ms.) Nilusha Lakmali Gamage", seat: "MP127" },
    { name: "Hon. B. Ariyawansha", seat: "MP128" },
    { name: "Hon. Kosala Nuwan Jayaweera", seat: "MP129" },
    { name: "Hon. (Mrs.) Sagarika Athauda", seat: "MP130" },
    { name: "Hon. Manoj Rajapaksha", seat: "MP131" },
    { name: "Hon. (Dr.) Nandana Millagala", seat: "MP132" },
    { name: "Hon. Kanchana Welipitiya", seat: "MP133" },
    { name: "Hon. Nanda Bandara", seat: "MP134" },
    { name: "Hon. Eranga Weerarathna", seat: "MP135" },
    { name: "Hon. Aruna Jayasekera", seat: "MP136" },
    { name: "Hon. Harshana Suriyapperuma", seat: "MP137" },
    { name: "Hon. Janitha Ruwan Kodithuwakku", seat: "MP138" },
    { name: "Hon. Najith Indika", seat: "MP139" },
    { name: "Hon. Sugath Thilakaratne", seat: "MP140" },
    { name: "Hon. (Ms.) Lakmali Hemachandra", seat: "MP141" },
    { name: "Hon. (Prof.) Ruwan Ranasinghe", seat: "MP142" },
    { name: "Hon. Sugath Wasantha de Silva", seat: "MP143" },
    { name: "Hon. Aboobucker Athambawa", seat: "MP144" },
    { name: "Hon. Upali Samarasingha", seat: "MP145" },
    { name: "Hon. Dilith Jayaweera", seat: "MP146" },
    { name: "Hon. Pathmanathan Sathiyalingam", seat: "MP147" },
    { name: "Hon. Mohamed Sali Naleem", seat: "MP148" },
    { name: "Hon. (Dr.) Rizvie Salih", seat: "MP149" },
    { name: "Hon. (Mrs.) Hemali Weerasekara", seat: "MP150" },
    { name: "Hon. (Dr.)(Ms.) Harini Amarasuriya", seat: "MP151" },
    { name: "Hon. Bimal Rathnayake", seat: "MP152" },
    { name: "Hon. (Dr.) Nalinda Jayathissa", seat: "MP153" },
    { name: "Hon. Vijitha Herath", seat: "MP154" },
    { name: "Hon. K.D. Lal Kantha", seat: "MP155" },
    { name: "Hon. Sunil Handunnetti", seat: "MP156" },
    { name: "Hon. Ramalingam Chandrasekar", seat: "MP157" },
    { name: "Hon. K.V. Samantha Vidyarathna", seat: "MP158" },
    { name: "Hon. Wasantha Samarasinghe", seat: "MP159" },
	{ name: "Hon. A.H.M.H. Abayarathna", seat: "160" },
	{ name: "Hon. Chrishantha Abeysena", seat: "161" },
	{ name: "Hon. Gayantha Karunathilleka", seat: "162" },
	{ name: "Hon. Anura Karunathilaka", seat: "163" },
	{ name: "Hon. Sunil Kumara Gamage", seat: "164" },
	{ name: "Hon. Kumara Jayakody", seat: "165" },
	{ name: "Hon. (Prof.) Anil Jayantha", seat: "166" },
	{ name: "Hon. Harshana Nanayakkara", seat: "167" },
	{ name: "Hon. R.M. Gamini Rathnayake", seat: "168" },
	{ name: "Hon. Dammika Patabendi", seat: "169" },
	{ name: "Hon. Namal Karunaratne", seat: "170" },
	{ name: "Hon. (Dr.) Upali Pannilage", seat: "171" },
	{ name: "Hon. (Mrs.) Saroja Savithri Paulraj", seat: "172" },
	{ name: "Hon. Rauff Hakeem", seat: "173" },
	{ name: "Hon. Ananda Wijepala", seat: "174" },
	{ name: "Hon. (Dr.) Hiniduma Sunil Senevi", seat: "175" },
	{ name: "Hon. Sajith Premadasa", seat: "176" },
	{ name: "Hon. Rishad Bathiudeen", seat: "177" },
	{ name: "Hon. Ravi Karunanayake", seat: "178" },
	{ name: "Hon. Palani Thigambaram", seat: "179" },
	{ name: "Hon. R. M. Ranjith Madduma Bandara", seat: "180" },
	{ name: "Hon. Kabir Hashim", seat: "181" },
	{ name: "Hon. Dayasiri Jayasekara", seat: "182" },
	{ name: "Hon. Ajith P. Perera", seat: "183" },
	{ name: "Hon. Rohitha Abeygunawardhana", seat: "184" },
	{ name: "Hon. Namal Rajapaksa", seat: "185" },
	{ name: "Hon. Nihal Galappaththi", seat: "186" },
	{ name: "Hon. Jeevan Thondaman", seat: "187" },
	{ name: "Hon. (Dr.) Harsha de Silva", seat: "188" },
	{ name: "Hon. (Dr.) V.S. Radhakrishnan", seat: "189" },
	{ name: "Hon. Dilip Wedaarachchi", seat: "190" },
	{ name: "Hon. J.C. Alawathuwala", seat: "191" },
	{ name: "Hon. Kaveenthiran Kodeeswaran", seat: "192" },
	{ name: "Hon. D. V. Chanaka", seat: "193" },
	{ name: "Hon. Gnanamuththu Srineshan", seat: "194" },
	{ name: "Hon. Anuradha Jayaratne", seat: "195" },
	{ name: "Hon. (Dr.) M.L.A.M. Hizbullah", seat: "196" },
	{ name: "Hon. Kader Masthan", seat: "197" },
	{ name: "Hon. Chamara Sampath Dasanayake", seat: "198" },
	{ name: "Hon. Nalin Bandara Jayamaha", seat: "199" },
	{ name: "Hon. Amirthanathan Adaikkalanathan", seat: "200" },
	{ name: "Hon. G.G. Ponnambalam", seat: "201" },
	{ name: "Hon. Lakshman Nipuna Arachchi", seat: "202" },
	{ name: "Hon. Sivagnanam Shritharan", seat: "203" },
	{ name: "Hon. Hector Appuhamy", seat: "204" },
	{ name: "Hon. (Dr.) Kavinda Heshan Jayawardhana", seat: "205" },
	{ name: "Hon. Sujith Sanjaya Perera", seat: "206" },
	{ name: "Hon. S.M. Marikkar", seat: "207" },
	{ name: "Hon. Imran Maharoof", seat: "208" },
	{ name: "Hon. Mujibur Rahman", seat: "209" },
	{ name: "Hon. Harshana Rajakaruna", seat: "210" },
	{ name: "Hon. (Mrs.) Rohini Kumari Wijerathna", seat: "211" },
	{ name: "Hon. Hesha Withanage", seat: "212" },
	{ name: "Hon. Waruna Liyanage", seat: "213" },
	{ name: "Hon. Chaminda Wijesiri", seat: "214" },
	{ name: "Hon. Kins Nelson", seat: "215" },
	{ name: "Hon. W. H. M. Dharmasena", seat: "216" },
	{ name: "Hon. Shanakiyan Rajaputhiran Rasamanickam", seat: "217" },
	{ name: "Hon. Rohana Bandara", seat: "218" },
	{ name: "Hon. Nayana Wasalathilaka", seat: "219" },
	{ name: "Hon. K.S. Kugathasan", seat: "220" },
	{ name: "Hon. Sujeewa Senasinghe", seat: "221" },
	{ name: "Hon. Faiszer Musthapha", seat: "222" },
	{ name: "Hon. Ismail Muththu Mohamed", seat: "223" },
	{ name: "Hon. M. Nizam Kariapper", seat: "224" },
	{ name: "Hon. Mano Ganesan", seat: "225" }
	
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
