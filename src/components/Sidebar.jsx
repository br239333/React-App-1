import { useState } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
//export default function Sidebar() {
//im simply commenting this out and rewriting it so i can start learning the syntax a little bit better

//THIS CODE SHOULD ACTUALLY BE THIS:
//we define the sidebar component
//this will pull out the user inputs value
export default function Sidebar({userInput}){


  //we create a state with useState
  //The state is used to hold user input
  let [menuItems,setMenuItems] = useState(userInput)

  //This is the initial code again im just commenting it out but I would like to keep it here to look back at it if i get confused
  //let [newMenuItem, setNewMenuItem] = useState("")



 //instructions down here spacing the code out just because my eyes are horrible
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(userInput)


let [newMenuItem, setNewMenuItem] = useState("")


let [filter, setFilter] = useState("")

//i know i did not use a call back im still have a little difficulty with that but I still wanted to try to make this functional
  //Im creating a function
  //this function will excute once a user click the button
  function addItemToMenu(){


    //code will not execute if nothing is inputed
    if(newMenuItem === ""){
      return
    }

    //copy array
    let newArr = []

    //we loop over every item in the array until we are done
    //once the loop is done we take each item (from position i) and put it in the new array NewArr
    for(let i = 0; i < menuItems.length; i++){
      newArr[i] = menuItems[i]
    }
    //we add the item to the end of the array
    newArr.push(newMenuItem)

    //we then update the menue item state
    setMenuItems(newArr)
    //this updates the input box and it clears automatically hence why we use an empty string
    setNewMenuItem("")
  }



  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  // let addMenuItem = useCallback(() => {
  //   console.log("Added menu item")
  // }, [])


  // TODO: 4. Display ONLY the menu items that contain the filter element value



  let displayMenuItems = []

  //if the filter input box is equal to an empty string (no user input) it wont filter anything and it will display the menu items instead
  //"else" we execute the next block of code if there is input in it
  if(filter === ""){
      displayMenuItems = menuItems

  } else {
    //so if the input box is not empty:
    //first we make sure that input is all the same case this could cause an issue
    //make a variable to hold values we make into lowercase
      let lowerCaseFilter = filter.toLowerCase()

      for (let i = 0; i < menuItems.length; i++) {


        //we get the current item
        //obv make a variable for that
        let currentMenuItem = menuItems[i]
        //makes the current menu item lowercase
        let lowerCaseItem = currentMenuItem.toLowerCase()
        //this will check if the now lowercaseItem contains the lowecase filter
        //if it doesnt "!==" it returns back to that positon
        if (lowerCaseItem.indexOf(lowerCaseFilter) !== -1) {

          //then once its all done we use.push to add the item to the array to display
          displayMenuItems.push(currentMenuItem)
        }
      }
    }


  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.

//Take the array displaymenuitems, and we make it into an array of list items!
let listItems = displayMenuItems.map(function(menuInput, placement) {
  //we store that
  let iteminList = <li key={placement}>{menuInput}</li>
  return iteminList
})


  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button

        onClick={addItemToMenu}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

      {/* then we display the items by refrencing the element above */}
      <ul>
        {listItems}
      </ul>
    </div>
  )
}