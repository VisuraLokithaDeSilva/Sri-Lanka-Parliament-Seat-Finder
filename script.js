const members = [
    { name: "Hon. K.V. Samantha Vidyarathna", seat: "G-01 (Badulla)" },
    { name: "Hon. Sunil Handunnetti", seat: "G-02 (Matara)" },
    { name: "Hon. K.D. Lal Kantha", seat: "G-03 (Kandy)" },
    { name: "Hon. Vijitha Herath", seat: "G-04 (Gampaha)" },
    { name: "Hon. (Dr.) Nalinda Jayathissa", seat: "G-05 (Kaluthara)" },
    { name: "Hon. Bimal Rathnayake", seat: "G-06 (National List)" },
    { name: "Hon. (Dr.)(Ms.) Harini Amarasuriya", seat: "G-07 (Colombo)" },
    { name: "Hon. Anura Kumara Dissanayake", seat: "G-08(Hon. President)" },
    { name: "Hon. Ramalingam Chandrasekar", seat: "G-09 (National List)" },
    { name: "Hon. Wasantha Samarasinghe", seat: "G-10 (Anuradhapura)" },
    { name: "Hon. A.H.M.H. Abayarathna", seat: "G-11 (Puttalam)" },
    { name: "Hon. Chrishantha Abeysena", seat: "G-12 (Gampaha)" },
    { name: "Hon. (Prof.) Anil Jayantha", seat: "G-13 (Gampaha)" },
    { name: "Hon. Harshana Nanayakkara", seat: "G-14 (Colombo)" },
    { name: "Hon. Dammika Patabendi", seat: "G-15 (Kegalla)" },
    { name: "Hon. (Mrs.) Saroja Savithri Paulraj", seat: "G-16 (Matara)" },
    { name: "Hon. Ananda Wijepala", seat: "G-17 (Kurunegala)" },
    { name: "Hon. (Dr.) Hiniduma Sunil Senevi", seat: "G-18 (Ratnapura)" },
    { name: "Hon. Sunil Kumara Gamage", seat: "G-19 (National List)" },
    { name: "Hon. Kumara Jayakody", seat: "G-20 (National List)" },
    { name: "Hon. (Dr.) Rizvie Salih", seat: "G-21 (Colombo)" },
    { name: "Hon. Anura Karunathilaka", seat: "G-22 (National List)" },
    { name: "Hon. (Dr.) Upali Pannilage", seat: "G-23 (National List)" },
    { name: "Hon. Nihal Galappaththi", seat: "G-24 (Hambantota)" },
    { name: "Hon. (Dr.) Nihal Abeysinghe", seat: "G-25 (Kalutara)" },
    { name: "Hon. Namal Karunaratne", seat: "G-26 (Kurunegala)" },
    { name: "Hon. Wasantha Piyathissa", seat: "G-27 (Digamadulla)" },
    { name: "Hon. Gamagedara Dissanayake", seat: "G-28 (Matale)" },
    { name: "Hon. R.M. Jayawardhana", seat: "G-29 (Moneragala)" },
    { name: "Hon. Sunil Watagala", seat: "G-30 (Colombo)" },
    { name: "Hon. Rathna Gamage", seat: "G-31 (Galle)" },
    { name: "Hon. Mahinda Jayasinghe", seat: "G-32 (Gampaha)" },
    { name: "Hon. Chathuranga Abeysinghe", seat: "G-33 (Colombo)" },
    { name: "Hon. Eranga Gunasekara", seat: "G-34 (Colombo)" },
    { name: "Hon. Upali Samarasingha", seat: "G-35 (National List)" },
    { name: "Hon. T. B. Sarath", seat: "G-36 (Polonnaruwa)" },
    { name: "Hon. Nalin Hewage", seat: "G-37 (Galle)" },
    { name: "Hon. (Dr.) Prasanna Gunasena", seat: "G-38 (Kandy)" },
    { name: "Hon. Anton Jayakody", seat: "G-39 (Puttalam)" },
    { name: "Hon. Sundaralingam Pradeep", seat: "G-40 (Ratnapura)" },
    { name: "Hon. (Mrs.) Hemali Weerasekara", seat: "G-41 (Gampaha)" },
    { name: "Hon. (Prof.) Ruwan Ranasinghe", seat: "G-42 (National List)" },
    { name: "Hon. Muneer Mulaffer", seat: "G-43 (Gampaha)" },
    { name: "Hon. Susil Ranasinghe", seat: "G-44 (Anuradhapura)" },
    { name: "Hon. (Dr.) Hansaka Wijemuni", seat: "G-45 (Kandy)" },
    { name: "Hon. Eranga Weerarathna", seat: "G-46 (National List)" },
    { name: "Hon. (Dr.) Namal Sudarshana", seat: "G-47 (Kurunegala)" },
    { name: "Hon. P. Ruwan Senarath", seat: "G-48 (Hambantota)" },
    { name: "Hon. (Dr.) Madhura Senevirathna", seat: "G-49 (Nuwara Eliya)" },
    { name: "Hon. Arun Hemachandra", seat: "G-50 (Trincomalee)" },
    { name: "Hon. Janitha Ruwan Kodithuwakku", seat: "G-51 (National List)" },
    { name: "Hon. Aruna Jayasekera", seat: "G-52 (National List)" },
    { name: "Hon. Sugath Thilakaratne", seat: "G-53 (National List)" },
    { name: "Hon. Harshana Suriyapperuma", seat: "G-54 (National List)" },
    { name: "Hon. (Dr.) Asoka Sapumal Ranwala", seat: "G-55 (Gampaha)" },
    { name: "Hon. Lakshman Nipuna Arachchi", seat: "G-56 (Colombo)" },
    { name: "Hon. R.M. Gamini Rathnayake", seat: "G-57 (National List)" },
    { name: "Hon. Manjula Suraweera Arachchi", seat: "G-58 (Nuwara Eliya)" },
    { name: "Hon. K. Ilankumaran", seat: "G-59 (Jaffna)" },
    { name: "Hon. Shantha Pathma Kumara Subasinga", seat: "G-60 (Ratnapura)" },
    { name: "Hon. (Ms.) Samanmali Gunasingha", seat: "G-61 (Colombo)" },
    { name: "Hon. Gayan Janaka", seat: "G-62 (Puttalam)" },
    { name: "Hon. Ajith Agalakada", seat: "G-63 Moneragala)" },
    { name: "Hon. (Mrs.) Sagarika Athauda", seat: "G-64 (Kegalla)" },
    { name: "Hon. Roshan Akmeemana", seat: "G-65 (Trincomalee)" },
    { name: "Hon. U.P. Abeywickrama", seat: "G-66 (Gampaha)" },
    { name: "Hon. (Prof.) L.M. Abeywickrama", seat: "G-67 (Matara)" },
    { name: "Hon. M.K.M. Aslam", seat: "G-68 (Kurunegala)" },
    { name: "Hon. (Dr.) Kaushalya Ariyarathne", seat: "G-69 (Colombo)" },
    { name: "Hon. Asitha Niroshana Egoda Vithana", seat: "G-70 (Colombo)" },
    { name: "Hon. Arkam Ilyas", seat: "G-71 (Matara)" },
    { name: "Hon. (Ms.) Oshani Umanga", seat: "G-72 (Kalutara)" },
    { name: "Hon. (Ms.) Krishnan Kalaichelvi", seat: "G-73 (Nuwara Eliya)" },
    { name: "Hon. Upul Kithsiri", seat: "G-74 (Ratnapura)" },
    { name: "Hon. Wasantha Pushpa Kumara", seat: "G-75 (Ratnapura)" },
    { name: "Hon. Chaminda Lalith Kumara", seat: "G-76 (Gampaha)" },
    { name: "Hon. Sarath Kumara", seat: "G-77 (Moneragala)" },
    { name: "Hon. (Mrs.) Nilanthi Kottahachchi", seat: "G-78 (Kalutara)" },
    { name: "Hon. (Ms.) M.A.C.S. Chathuri Gangani", seat: "G-79 (Moneragala)" },
    { name: "Hon. Lasith Bhashana Gamage", seat: "G-80 (Gampaha)" },
    { name: "Hon. Thilanka U. Gamage", seat: "G-81 (Galle)" },
    { name: "Hon. (Ms.) Nilusha Lakmali Gamage", seat: "G-82 (Ratnapura)" },
    { name: "Hon. Ajantha Gammeddage", seat: "G-83 (Matara)" },
    { name: "Hon. Ajith Gihan", seat: "G-84 (Puttalam)" },
    { name: "Hon. Jagath Gunawardana", seat: "G-85 (Kurunegala)" },
    { name: "Hon. Ashoka Gunasena", seat: "G-86 (Kurunegala)" },
    { name: "Hon. Ruwanthilaka Jayakody", seat: "G-87 (Gampaha)" },
    { name: "Hon. Kosala Nuwan Jayaweera", seat: "G-88 (Kegalla)" },
    { name: "Hon. (Mrs.) Thushari Jayasingha", seat: "G-89 (Kandy)" },
    { name: "Hon. T.K. Jayasundara", seat: "G-90 (Galle)" },
    { name: "Hon. Mayilvaganam Jegathiswaran", seat: "G-91 (Vanni)" },
    { name: "Hon. Rajeevan Jeyachandramoorthy", seat: "G-92 (Jaffna)" },
    { name: "Hon. Sellaththamby Thilaganathan", seat: "G-93 (Vanni)" },
    { name: "Hon. (Mrs.) Anushka Thilakarathne", seat: "G-94 (Nuwara Eliya)" },
    { name: "Hon. Chandana Thennakoon", seat: "G-95 (Kurunegala)" },
    { name: "Hon. Thanura Dissanayake", seat: "G-96 (Kandy)" },
    { name: "Hon. Sugath Wasantha de Silva", seat: "G-97 (National List)" },
    { name: "Hon. Darmapriya Dissanayaka", seat: "G-98 (Kurunegala)" },
    { name: "Hon. Sujeewa Dissanayake", seat: "G-99 (Kurunegala)" },
    { name: "Hon. Susantha Dodawatta", seat: "G-100 Colombo)" },
    { name: "Hon. Susantha Kumara Nawarathna", seat: "G-101 (Anuradhapura)" },
    { name: "Hon. Sena Nanayakkara", seat: "G-102 (Anuradhapura)" },
    { name: "Hon. Nandana Pathmakumara", seat: "G-103 (Kalutara)" },
    { name: "Hon. Aruna Panagoda", seat: "G-104 (Colombo)" },
    { name: "Hon. Nimal Palihena", seat: "G-105 (Anuradhapura)" },
    { name: "Hon. Nishantha Perera", seat: "G-106 (Galle)" },
    { name: "Hon. Stepni Fernando", seat: "G-107 (Gampaha)" },
    { name: "Hon. Kanthasamy Prabu", seat: "G-108 (Batticaloa)" },
    { name: "Hon. Lal Premanath", seat: "G-109 (Matara)" },
    { name: "Hon. Nanda Bandara", seat: "G-110 (Kurunegala)" },
    { name: "Hon. Padmasiri Bandara", seat: "G-111 (Polonnaruwa)" },
    { name: "Hon. Ravindra Bandara", seat: "G-112 (Badulla)" },
    { name: "Hon. Sudath Balagalla", seat: "G-113 (Badulla)" },
    { name: "Hon. (Dr.) Sri Bavanandarajah", seat: "G-114 (Jaffna)" },
    { name: "Hon. E.M. Basnayaka", seat: "G-115 (Kandy)" },
    { name: "Hon. Wijesiri Basnayake", seat: "G-116 (Kurunegala)" },
    { name: "Hon. Sunil Biyanwila", seat: "OG-65 (Matale)" },
    { name: "Hon. (Dr.) Sandaruwan Madarasinghe", seat: "OG-66 (Hambantota)" },
    { name: "Hon. Prageeth Madhuranga", seat: "OG-67 (Gampaha)" },
    { name: "Hon. Jagath Manuwarna", seat: "OG-68 (Kandy)" },
    { name: "Hon. Ruwan Mapalagama", seat: "OG-69 (Gampaha)" },
    { name: "Hon. (Dr.) Nandana Millagala", seat: "OG-70 (Kegalla)" },
    { name: "Hon. Riyas Farook", seat: "OG-71 (Kandy)" },
    { name: "Hon. Danushka Ranganath", seat: "OG-72 (Kalutara)" },
	{ name: "Hon. Sanjeewa Ranasingha", seat: "OG-81 (Kalutara)" },
    { name: "Hon. Sunil Rathnasiri", seat: "OG-82 (Polonnaruwa)" },
    { name: "Hon. Manjula Sugath Rathnayaka", seat: "OG-83 (Digamadulla)" },
    { name: "Hon. (Ms.) A.M.M.M. Rathwaththe", seat: "OG-84 (Digamadulla)" },
    { name: "Hon. Manoj Rajapaksha", seat: "OG-85 (Kegalla)" },
    { name: "Hon. Sunil Rajapaksha", seat: "OG-86 (Ratnapura)" },
    { name: "Hon. (Mrs.) Hasara Liyanage", seat: "OG-87 (Galle)" },
    { name: "Hon. (Mrs.) Deepthi Wasalage", seat: "OG-88 (Matale)" },
    { name: "Hon. Kanchana Welipitiya", seat: "OG-89 (Kegalla)" },
    { name: "Hon. R.G. Wijerathna", seat: "OG-90 (Nuwara Eliya)" },
    { name: "Hon. Dr. Nishantha Samaraweera", seat: "OG-91 (Galle)" },
    { name: "Hon. Priyantha Wijerathna", seat: "OG-92 (Digamadulla)" },
    { name: "Hon. Ruwan Wijeweera", seat: "OG-93 (Moneragala)" },
    { name: "Hon. Darmapriya Wijesinghe", seat: "OG-94 (Gampaha)" },
    { name: "Hon. (Mrs.) Hiruni Wijesinghe", seat: "OG-95 (Puttalam)" },
    { name: "Hon. Athula Welandagoda", seat: "OG-96 (Hambantota)" },
    { name: "Hon. Fasmin Sharif", seat: "OG-97 (Kandy)" },
    { name: "Hon. Dinindu Saman", seat: "OG-98 (Badulla)" },
    { name: "Hon. Thilina Samarakoon", seat: "OG-99 (Anuradhapura)" },
    { name: "Hon. (Ms.) Ambika Samivel", seat: "OG-100 (Badulla)" },
    { name: "Hon. Dewananda Suraweera", seat: "OG-101 (Colombo)" },
    { name: "Hon. Chandana Sooriyaarachchi", seat: "OG-102 (Colombo)" },
    { name: "Hon. Major General Sooriyabandara", seat: "OG-103 (Kurunegala)" },
    { name: "Hon. Aravinda Senarath", seat: "OG-104 (Hambantota)" },
    { name: "Hon. Kitnan Selvaraj", seat: "OG-105 (Nuwara Eliya)" },
    { name: "Hon. (Dr.) Janaka Senarathna", seat: "OG-106 (Ratnapura)" },
    { name: "Hon. Chandima Hettiaratchi", seat: "OG-107 (Kalutara)" },
    { name: "Hon. Champika Hettiarachchi", seat: "OG-108 (Gampaha)" },
    { name: "Hon. Dinesh Hemantha", seat: "OG-109 (Matale)" },
    { name: "Hon. (Mrs.) Geetha Herath", seat: "OG-110 (Kurunegala)" },
    { name: "Hon. Bhagya Sri Herath", seat: "OG-111 (Anuradhapura)" },
    { name: "Hon. Muhammad Faizal", seat: "OG-112 (Puttalam)" },
    { name: "Hon. Aboobucker Athambawa", seat: "OG-113 (National List)" },
    { name: "Hon. Najith Indika", seat: "OG-114 (National List)" },
    { name: "Hon. (Ms.) Lakmali Hemachandra", seat: "OG-115 ( National List)" },
    { name: "Hon. Mano Ganesan", seat: "O-01 (National List)" },
    { name: "Hon. Kabir Hashim", seat: "O-02 (Kegalla)" },
    { name: "Hon. Palani Thigambaram", seat: "O-03 (Nuwara Eliya)" },
    { name: "Hon. Rishad Bathiudeen", seat: "O-04 (Vanni)" },
    { name: "Hon. Rauff Hakeem", seat: "O-05 (Kandy)" },
    { name: "Hon. R. M. Ranjith Madduma Bandara", seat: "O-06 (National List)" },
    { name: "Hon. Gayantha Karunathilleka", seat: "O-07 (Galle)" },
    { name: "Hon. Sajith Premadasa", seat: "O-08 (Colombo)" },
    { name: "Hon. Ravi Karunanayake", seat: "O-09 (National List)" },
    { name: "Hon. (Dr.) M.L.A.M. Hizbullah", seat: "O-10 (Battcola)" },
    { name: "Hon. Namal Rajapaksa", seat: "O-11 (National List)" },
    { name: "Hon. Jeevan Thondaman", seat: "O-12 (Nuwara Eliya)" },
    { name: "Hon. Kader Masthan", seat: "O-13 (Vanni)" },
    { name: "Hon. Amirthanathan Adaikkalanathan", seat: "O-14 (Vanni)" },
    { name: "Hon. G.G. Ponnambalam", seat: "O-15 (Jaffna)" },
    { name: "Hon. (Dr.) Ramanathan Archchuna", seat: "O-16 (Jaffna)" },
    { name: "Hon. M.A.M. Thahir", seat: "O-17 (Digamadulla)" },
    { name: "Hon. Dilith Jayaweera", seat: "O-18 (National List)" },
    { name: "Hon. Shanakiyan Rajaputhiran Rasamanickam", seat: "O-19 (Batticola)" },
    { name: "Hon. Sivagnanam Shritharan", seat: "O-20 (Jaffna)" },
    { name: "Hon. Dayasiri Jayasekara", seat: "O-21 (Kurunegala)" },
    { name: "Hon. (Dr.) Harsha de Silva", seat: "O-22 (Colombo)" },
    { name: "Hon. Ajith P. Perera", seat: "O-23 (Kalutara)" },
    { name: "Hon. Sujeewa Senasinghe", seat: "O-24 (National List)" },
    { name: "Hon. (Dr.) V.S. Radhakrishnan", seat: "O-25 (Nuwara Eliya)" },
    { name: "Hon. Dilip Wedaarachchi", seat: "O-26 (Hambantota)" },
    { name: "Hon. J.C. Alawathuwala", seat: "O-27 (Kurunegala)" },
    { name: "Hon. Nalin Bandara Jayamaha", seat: "O-28 (Kurunegala)" },
    { name: "Hon. Hector Appuhamy", seat: "O-29 (Puttalam)" },
    { name: "Hon. (Dr.) Kavinda Heshan Jayawardhana", seat: "O-30 (Gampaha)" },
    { name: "Hon. Sujith Sanjaya Perera", seat: "O-31 (Kegalla)" },
    { name: "Hon. S.M. Marikkar", seat: "O-32 (Colombo)" },
    { name: "Hon. Imran Maharoof", seat: "O-33 (Trincomalee)" },
    { name: "Hon. Harshana Rajakaruna", seat: "O-34 (Gampaha)" },
    { name: "Hon. (Mrs.) Rohini Kumari Wijerathna", seat: "O-35 (Matale)" },
    { name: "Hon. Hesha Withanage", seat: "O-36 (Ratnapura)" },
    { name: "Hon. Faiszer Musthapha", seat: "O-37 (National List)" },
    { name: "Hon. Rohitha Abeygunawardhana", seat: "O-38 (Kalutara)" },
    { name: "Hon. Kaveenthiran Kodeeswaran", seat: "O-39 (Digamadulla)" },
    { name: "Hon. Gnanamuththu Srineshan", seat: "O-40 (Batticola)" },
    { name: "Hon. Chaminda Wijesiri", seat: "O-41 (Badulla)" },
    { name: "Hon. Mujibur Rahman", seat: "O-42 (Colombo)" },
    { name: "Hon. Waruna Liyanage", seat: "O-43 (Ratnapura)" },
    { name: "Hon. Kins Nelson", seat: "O-44 (Polonnaruwa)" },
    { name: "Hon. Rohana Bandara", seat: "O-45 (Anuradhapura)" },
    { name: "Hon. W. H. M. Dharmasena", seat: "O-46 (Moneragala)" },
    { name: "Hon. Nayana Wasalathilaka", seat: "O-47 (Badulla)" },
    { name: "Hon. B. Ariyawansha", seat: "O-48 (Ratnapura)" },
    { name: "Hon. (Ms.) Chamindranee Kiriella", seat: "O-49 (Kandy)" },
    { name: "Hon. Chathura Galappaththi", seat: "O-50 (Matara)" },
    { name: "Hon. Chithral Fernando", seat: "O-51 (Puttalam)" },
    { name: "Hon. Amila Prasad", seat: "O-52 (Gampaha)" },
    { name: "Hon. Anuradha Jayaratne", seat: "O-53 (Kandy)" },
    { name: "Hon. Chamara Sampath Dasanayake", seat: "O-54 Badulla)" },
    { name: "Hon. D. V. Chanaka", seat: "O-55 (Hambantota)" },
    { name: "Hon. Chanaka Madugoda", seat: "O-56 (Galle)" },
    { name: "Hon. M.S. Uthumalebbe", seat: "O-57 (Digamadulla)" },
    { name: "Hon. Mohamed Sali Naleem", seat: "O-58 (National List)" },
    { name: "Hon. K.S. Kugathasan", seat: "O-59 (Trincomalee)" },
    { name: "Hon. Thurairasa Ravikaran", seat: "O-60 (Vanni)" },
    { name: "Hon. Suranga Rathnayaka", seat: "O-61 (Anuradhapura)" },
    { name: "Hon. Jagath Vithana", seat: "O-62 (Kalutara)" },
    { name: "Hon. Ismail Muththu Mohamed", seat: "O-63 (National List)" },
    { name: "Hon. M. Nizam Kariapper", seat: "O-64 (National List)" },
    { name: "Hon. (Dr.) Elayathamby Srinath", seat: "O-79 (Batticola)" },
    { name: "Hon. Pathmanathan Sathiyalingam", seat: "O-80 (National List)" },
    { name: "Hon. (Dr.) Jagath Wickramaratne", seat: "Speaker" }
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
