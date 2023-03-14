let task = document.getElementById('task');

console.log(task.value)

function addButton() {
    // alert(`Adicionou: ${task.value}`)

    let ul = document.getElementById("lista")

    let li = `<li class="list-group-item">${task.value}</li>`
    ul.innerHTML = li

}