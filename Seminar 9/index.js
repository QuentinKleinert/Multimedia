
//txt Datei laden
function loadText() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

// 2. JSON-Datei laden
function loadJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var output = "<h3>JSON Daten:</h3>";
            output += "<p>Name: " + data.name + "</p>";
            output += "<p>Alter: " + data.age + "</p>";
            output += "<p>Beruf: " + data.job + "</p>";
            document.getElementById("output").innerHTML = output;
        }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
}

// 3. XML-Datei laden
function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var items = xmlDoc.getElementsByTagName("person")[0];
            var name = items.getElementsByTagName("name")[0].childNodes[0].nodeValue;
            var age = items.getElementsByTagName("age")[0].childNodes[0].nodeValue;
            var job = items.getElementsByTagName("job")[0].childNodes[0].nodeValue;
            
            var output = "<h3>XML Daten:</h3>";
            output += "<p>Name: " + name + "</p>";
            output += "<p>Alter: " + age + "</p>";
            output += "<p>Beruf: " + job + "</p>";
            document.getElementById("output").innerHTML = output;
        }
    };
    xhttp.open("GET", "data.xml", true);
    xhttp.send();
}

// 4. XML-Datei mit DOM-Manipulation
function manipulateXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var people = xmlDoc.getElementsByTagName("person");
            
            // Alten Inhalt löschen
            document.getElementById("output").innerHTML = "<h3>XML Daten (DOM-Manipulation):</h3>";

            // Für jede Person ein neues DOM-Element erstellen
            for (var i = 0; i < people.length; i++) {
                var name = people[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var age = people[i].getElementsByTagName("age")[0].childNodes[0].nodeValue;
                var job = people[i].getElementsByTagName("job")[0].childNodes[0].nodeValue;

                // Dynamisch neue HTML-Elemente erstellen
                var personDiv = document.createElement("div");
                personDiv.style.border = "1px solid #4CAF50";
                personDiv.style.margin = "10px 0";
                personDiv.style.padding = "10px";
                personDiv.style.backgroundColor = "#f9f9f9";
                
                personDiv.innerHTML = 
                    "<p><strong>Name:</strong> " + name + "</p>" +
                    "<p><strong>Alter:</strong> " + age + "</p>" +
                    "<p><strong>Beruf:</strong> " + job + "</p>";

                // Die neuen Elemente in das Output-Div einfügen
                document.getElementById("output").appendChild(personDiv);
            }
        }
    };
    xhttp.open("GET", "manipulation.xml", true);
    xhttp.send();
}

