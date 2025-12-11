const apiUrl = ""; 


function searchStudent() {
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultBox = document.getElementById("result");


    if (!keyword) {
        resultBox.innerHTML = "Please enter ID or Name.";
        return;
    }


    try {
        const res =  fetch(apiUrl);
        const data =  res.json();


        const found = data.find(s =>
            s.id.toString() === keyword ||
            s.name.toLowerCase().includes(keyword)
        );


        if (!found) {
            resultBox.innerHTML = "No matching student found.";
        } else {
            resultBox.innerHTML = `
<p><strong>Name:</strong> ${found.name}</p>
<p><strong>Class:</strong> ${found.class}</p>
<p><strong>Age:</strong> ${found.age}</p>
<p><strong>Math:</strong> ${found.math}</p>
<p><strong>Literature:</strong> ${found.literature}</p>
<p><strong>English:</strong> ${found.english}</p>
<p><strong>Performance:</strong> ${found.performance}</p>
`;
        }


    } catch (e) {
        resultBox.innerHTML = "";
    }
}