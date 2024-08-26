 
//#region  DOM SELECTION SECTION 

    //4 MAIN TYPES OF SELECTION ELEMENTS FROM HTML
        //1. getElementById
                //GRABS A SINGLE NODE BASED ON THE ID NAME
            let listItemThree= document.getElementById("thirdListItem"); 

        //2. getElementsByClassName
                //MAKES AN ARRAY OF ELEMENTS WITH THE SAME CLASSNAME
            let headerColumns = document.getElementsByClassName("col-6");
                //CAN CALL SINGLE INDEXS OF THAT HTML COLLECTION

        //3.  querySelector
                //DOM SELECTIONS USES CSS STYLING SELECTION SYNTAX TO GRAB A SINGLE ITEM
            let listItemOne= document.querySelector(".aboutMe li:first-child");
            console.log(listItemOne)

        //4. querySelectorAll
                //DOM SELECTIONS USES CSS STYLING SELECTION SYNTAX TO GRAB MULTIPLE ELEMENTS
            let allListItems= document.querySelectorAll(".aboutMe li");
            console.log(allListItems);
//#endregion

//#region DOM STYLING AND CHANGING TEXT
    //1. .innerHTML is a DOM  method to change text. 
             //CREATE VARIABLE TO HOLD TARGETED ELEMENT
         let description = document.querySelector(".textSide p:first-child");

             //UPDATE TARGETED ELEMENT WITH NEW TEXT
         description.innerHTML = "A sunset on the beach is a beautiful view"

    //2. .style chages the element's css properties using javascript
             //USE .style AND STYLING TO BE UPDATED
         description.style.fontSize="25px";

             //IF UPDATING MULTIPLE ELEMENTS HELD WITHING AN ARRAY - YOU MUST TARGET THE ELEMENT(S) INDIVIDIUALLY INSIDE OF THE ARRAY - NOT THE ARRAY ITSELF--
         let allPTags = document.querySelectorAll(".textSide p");

            //CREATE FUNCTION TO CHANGE ALL P-TAGS IN THE ARRAY
         function changeParagraphColor(){
             for (let i = 0; i < allPTags.length; i++) {
             const element = allPTags[i];

             element.style.color= "tomato"
              }
            }

       //CALL FUNCTION 
        changeParagraphColor();

//#endregion

//#region DOM EVENT LISTENERS
    //EVENT LISTENERS WAIT FOR AN EVENT TO HAPPEN (CLICK, HOVER, ETC) AND CALL A FUNCTION WHEN THE EVENT HAPPENS

    //TARGET ELEMENT AND ASSIGN VARIABLE 
    let imageElement= document.querySelector(".imageSide img");

    //TARGET ELEMENT AND ASSIGN VARIABLE
    let pFirstColumns = document.querySelectorAll(".firstCol p");
   
    //ADD EVENT LISTENER TO TARGETED ELEMENT
    imageElement.addEventListener("click", reColorParagraphs)
    
    //CREATE FUNCTION TO AFFECT CHANGE
    function reColorParagraphs(){
        for (let i = 0; i < pFirstColumns.length; i++) {
            const element = pFirstColumns[i];

            element.style.color = "yellow"
            
        }
    }
//#endregion

