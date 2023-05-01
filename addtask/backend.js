function loadCategory() {
    const coll = document.getElementById("apicategory");
    const divs = coll.getElementsByTagName("div");


}

function newCategory() {
    const coll = document.getElementById("apicategory");
    const divs = coll.getElementsByTagName("div");
    const currentItem = document.getElementById("currentItem")
}




/* lul */

//impro api

let improapi = [
    {
        title: "",
        description: "",
        Categorys: [
            {
                category: "",
                colorCategory: ""
            }
        ],
        AssignTo: [
            {
                Contact: "",
                contact: ""
            }
        ],
        Prio: "",
        DueDate: "",
        Subtasks: [
            {
                subtask: "",
                checkbox: false
            }
        ],
        columnCategory: "default"
    }
];

console.log(); // Outputs the array of objects


