const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

let op_array = ["+", "-", "/", "*"];
let op;
let nb1, nb2; // déclaration 
let nextNb = false // pas encore sur le nombre suivant au début 

buttons.forEach((button) => { // quand je clic sur le bouton je recupère un nombre 
    button.addEventListener("click", (e) => {
        /*alert (e.target.id);
        alert (op_array.includes(e.target.id)); //  verification - si l'opperation existe = true */
        if (op_array.includes(e.target.id)) {
            op = e.target.id; // type d'operation a effectuer daans la variable op - on enregistre le signe dans le op
            result.textContent += e.target.id; // op c'est le symbole 
            nextNb = true;

        } else { // quand ce n'est pas un symbole c'est un nombre = Nb1
            if (nextNb == false) {
                nb1 += Number(e.target.id); // su c'est false on est encore au nombre1 
            } else { // sinon on passe au nombre2 
                nb2 += Number(e.target.id);
            }
            result.textContent += e.target.id;
        };

    });
});

clear.addEventListener("click", () => {
    result.textContent = "";
    nb1 = ""; // on vide tout
    nb1 = nb1 * 1;
    nb2 = "";
    nb2 = nb2 * 1;
    nextNb = false;
    op = "";
});

function calculer() {
    /*let res = 0;*/

    if (op == "+") {
        res = Number(nb1) + Number(nb2);
    } else if (op == "-") {
        res = nb1 - nb2;
    } else if (op == "*") {
        res = nb1 * nb2;
    } else if (op == "/") {
        res = nb1 / nb2;
    }
    result.textContent = res;
}
