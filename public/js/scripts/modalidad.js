var modalidad = document.getElementById("modalidad");
var nivel = document.getElementById("nivel")
var horario = document.getElementById("horario")
var nivelLabel = document.getElementById("nivel__label");
//Creamos nuestras opciones para las modalidades 
var horarioPresencialPlus_op1 = document.createElement("option");
var horarioPresencialPlus_op2 = document.createElement("option");
var horarioPresencial_op1 = document.createElement("option");
var horarioPresencial_op2 = document.createElement("option");
var horarioSemiPresencial = document.createElement("option");
var horarioVirtual = document.createElement("option");
var horarioVirtualPlus = document.createElement("option");
//Añadimos a todos las clases necesaria

horarioPresencialPlus_op2.classList.add("form__opcion");
horarioPresencialPlus_op1.classList.add("form__opcion");
horarioPresencial_op1.classList.add("form__opcion");
horarioPresencial_op2.classList.add("form__opcion");
horarioSemiPresencial.classList.add("form__opcion");
horarioVirtual.classList.add("form__opcion");
horarioVirtualPlus.classList.add("form__opcion");
//----------HORARIOS--------------
//Presencial  plus
horarioPresencialPlus_op1.textContent = "2:00 - 4:00pm L a S";
horarioPresencialPlus_op2.textContent = "4:00 - 6:00pm L a V y de 2:00 a 4:00pm el S";
//Presencial
horarioPresencial_op1.textContent = "2:00 - 4:00 pm L a V ";
horarioPresencial_op2.textContent = "4:00 - 6:00 pm L a V ";
//SemiPresencial
horarioSemiPresencial.textContent = "8:00 - 1:00 pm - S virtual/D presencial";
//Virtual
horarioVirtual.textContent = " 8:30 a 10:30pm L a V ";
//VirtualPlus
horarioVirtualPlus.textContent = " 8:30 a 10:30pm L a V y de 2:00 a 4:00pm S"
modalidad.addEventListener("change", function(){
    if(modalidad.value == "Presencial plus"){
        nivel.value = "Nivel no disponible";    
        nivel.disabled = true;  
        nivelLabel.classList.add("text__disabled");
        console.log("Es presencial plus")
        //Removemos todas las otras opciones
        while (horario.lastElementChild) {
            horario.removeChild(horario.lastElementChild);
        }
        //Añadimos nuestra opción
        horario.appendChild(horarioPresencialPlus_op1);
        horario.appendChild(horarioPresencialPlus_op2);
    }
    else if(modalidad.value == "Presencial"){
        nivel.value = "Nivel no disponible";
        nivel.disabled = true;
        console.log("Es presencial");
        nivelLabel.classList.add("text__disabled");
          //Removemos todas las otras opciones
          while (horario.lastElementChild) {
            horario.removeChild(horario.lastElementChild);
         }
         //Añadimos nuestra opción
        horario.appendChild(horarioPresencial_op1);
        horario.appendChild(horarioPresencial_op2);

    }
    else if(modalidad.value == "Semipresencial"){
        nivel.value = "Nivel no disponible";
        nivel.disabled = true;
        console.log("es semipresencial")
        nivelLabel.classList.add("text__disabled");
        //Removemos todas las otras opciones
        while (horario.lastElementChild) {
        horario.removeChild(horario.lastElementChild);
        }
        //Añadimos nuestra opción
        horario.appendChild(horarioSemiPresencial);
    }
    else if(modalidad.value == "Virtual"){
        nivel.disabled = false;
        nivelLabel.classList.remove("text__disabled");
        //Removemos todas las otras opciones
        while (horario.lastElementChild) {
            horario.removeChild(horario.lastElementChild);
        }
        //Añadimos nuestra opción
        console.log("es virtual ")
        horario.appendChild(horarioVirtual);
    }
    else if(modalidad.value == "Virtual plus"){
        nivel.disabled = false;
        nivelLabel.classList.remove("text__disabled");
        //Removemos todas las otras opciones
        while (horario.lastElementChild) {
            horario.removeChild(horario.lastElementChild);
            }
        //Añadimos nuestra opción
        console.log("Es virtual plus")
        horario.appendChild(horarioVirtualPlus);
    }

})
