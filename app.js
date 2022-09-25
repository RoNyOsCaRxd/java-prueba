function agregarTarea() {
  const fila = document.createElement("tr");
  fila.innerHTML = `
                    <td> <input type="checkbox" onClick="completar()" /> </td>
                    <td style="flex-grow: 2"> ${input.value} </td>
                    <td> <span onClick="borrar()"> X </span> </td>
                    `;

  tabla.appendChild(fila);
}
boton.addEventListener("click", function (e) {
  if (input.value === "") {  
  } else {
    agregarTarea();
  }
});
function borrar(event) {
  this.event.target.parentElement.parentElement.remove();
}

