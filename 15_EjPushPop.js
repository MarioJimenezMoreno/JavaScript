const btns = document.querySelectorAll(".btn");
const arrayDiv = document.getElementById("array");
const numTarget = document.getElementById("numTarget");


let array = [];
const itemsList = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍"];
let arrayItems = itemsList.slice();


btns.forEach((btn) => {
    btn.onclick = ((event) => {
        item = Math.floor(Math.random() * arrayItems.length);

        switch (event.target.id) {

            case "Push":
                console.log(item);
                array.push(arrayItems[item]);
                arrayItems.splice(item, 1);
                break;
            case "Unshift":
                array.unshift(arrayItems[item]);
                arrayItems.splice(item, 1);
                break;
            case "Insert":
                array.splice(numTarget.value - 1, 0, arrayItems[item]);
                arrayItems.splice(item, 1);
                break;

            case "Pop":
                if (array.length > 0) {
                    if (!arrayItems.includes(array[array.length - 1])) {
                        arrayItems.push(array[array.length - 1]);
                    }
                    array.pop();
                }
                break;
            case "Shift":
                if (array.length > 0) {
                    if (!arrayItems.includes(array[0])) {
                        arrayItems.push(array[0]);
                    }
                    array.shift();
                }
                break;
            case "Remove":
                if (array.length >= 1) {
                    arrayItems.push(array[numTarget.value - 1]);
                    array.splice(numTarget.value - 1, 1)
                }
                break;

        }


        console.log(numTarget.max);
        console.log(array);
        console.log(arrayItems);
        console.log(arrayItems.length);
        if (array.length > 0) {
            numTarget.max = array.length;
        }
        arrayDiv.innerHTML = "[" + array.join(", ") + "]";
        arrayItems.length == 0 ? arrayItems = itemsList.slice() : false;

        if (numTarget.value > numTarget.max && numTarget.value >= 1) {
            numTarget.value = numTarget.max;
        }


    });
});
