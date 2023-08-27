console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function(){
    console.logs.push("<br>"+Array.from(arguments));
    console.stdlog.apply(console, arguments);
}
const toAppend = [
    "Elem1",
    "Elem2",
    "Elem3"
]

// elements = {
//     "Element 1": {
//         "content": "",
//         "type": "p",
//         "parent element": "none"
//     }
// }

function appendChildren(children, id) {
    console.log("function appendChildren() called")
        for (let child in children ) {
            const node = document.createElement("div");
            const textnode = document.createTextNode(children[child]);
            node.appendChild(textnode);
            document.getElementById(id).appendChild(node);
            console.log("Created div element in '"+id+"' with the content '"+children[child]+"'")
    }
}

function ahh () {
    console.log("Goofy <b>aughhh</b>")
}

appendChildren(toAppend, "item2")

setInterval(document.getElementById("item3").innerHTML = console.logs, 100)
