//Aufgabe 2
const images = document.querySelectorAll("img");
const dropzones = document.querySelectorAll(".dropzone");

images.forEach((img) => {
    img.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    });
});

dropzones.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("over");
    });

    zone.addEventListener("dragleave", () => {
        zone.classList.remove("over");
    });

    zone.addEventListener("drop", (e) => {
        e.preventDefault();
        const imgId = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(imgId);
        
        if (zone !== img.parentElement) {
            zone.appendChild(img);
        }
        
        zone.classList.remove("over");
    });
});

//Aufgabe 4
let taskId = 0;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const task = document.getElementById(taskId);
    const dropZone = event.currentTarget;

    dropZone.appendChild(task);

    if (dropZone.id === "done") {
        task.classList.add("done");
    } else {
        task.classList.remove("done");
    }

    if (dropZone.id === "trash") {
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Löschen";
        removeBtn.onclick = () => task.remove();
        
        if (!task.querySelector('button')) {
            task.appendChild(removeBtn);
        }
    } else {
        const removeBtn = task.querySelector('button');
        if (removeBtn) removeBtn.remove();
    }
}

function addTask() {
    const taskText = document.getElementById("taskText").value;
    const taskColor = document.getElementById("taskColor").value;

    if (!taskText) return;

    const task = document.createElement("div");
    task.className = "task";
    task.id = "task-" + taskId++;
    task.draggable = true;
    task.ondragstart = drag;
    task.style.backgroundColor = taskColor;

    task.innerHTML = `<span>${taskText}</span>`;

    document.getElementById("todo").appendChild(task);

    document.getElementById("taskText").value = "";
}
