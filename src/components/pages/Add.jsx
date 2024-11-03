import React, { useEffect, useState } from "react";

const AddNew = () => {
    const [userFormData, setUserFormData] = useState({
        brand: "",
        title: "",
        notes: "",
        felt: "",
        rating: "",
        horn: "",
        munchie: "",
        munchNote: "",
        morningAfter: "",
        weeknight: "",
        cbd: "",
        thc: "",
      });

      const handleAdd = async (event) => {
        event.preventDefault();
        const user = userFormData;
        console.log(user);
        if (userFormData.brand && userFormData.title && userFormData.notes && userFormData.felt && userFormData.rating && userFormData.horn && userFormData.munchie && userFormData.munchNote && userFormData.morningAfter && userFormData.weeknight && userFormData.cbd && userFormData.thc) {
          event.preventDefault();
    
          try {
            console.log("hi");
            
            
        } catch (error) {
            console.log(error);
          }
        }
    }
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });

        
      };
      useEffect(() => {
        const addButton = document.getElementById("addBtn");    
    
        if (addButton) {
          addButton.addEventListener("click", () => {
            ;
          });
    

        }
      }, []);

return(
    <div>
    <div className="" id="addForm">
      <div className="form-container addForm-container">
        <form className="formBox">
          <h1 className="CQfont">Log New Gummy</h1>

          <input
            type="text"
            placeholder="brand"
            className="inputField"
            name="brand"
            value={userFormData.brand}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="title"
            name="title"
            value={userFormData.title}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <textarea
            type="text"
            placeholder="general notes"
            name="notes"
            value={userFormData.notes}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="text"
            placeholder="ex. felt after 30m"
            name="felt"
            value={userFormData.felt}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="number"
            placeholder="Overall Rating /10"
            name="rating"
            value={userFormData.rating}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="text"
            placeholder="horndog level"
            name="horn"
            value={userFormData.horn}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="number"
            placeholder="munchie level /10"
            name="munchie"
            value={userFormData.munchie}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <textarea
            type="text"
            placeholder="munchie specific notes"
            name="munchNotes"
            value={userFormData.munchNotes}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="text"
            placeholder="morning after vibe"
            name="morningAfter"
            value={userFormData.morningAfter}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="text"
            placeholder="ok for a weeknight?"
            name="weeknight"
            value={userFormData.weeknight}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="number"
            placeholder="cbd amount (number only)"
            name="cbd"
            value={userFormData.cbd}
            onChange={handleInputChange}
            className="inputField"
            required
          />
          <input
            type="number"
            placeholder="thc amount (number only)"
            name="thc"
            value={userFormData.thc}
            onChange={handleInputChange}
            className="inputField"
            required
          />

          <button
            onClick={handleAdd}
            className="CQfont mt-3 formButton"
            id="addBtn"
          >
            Add to Collection
          </button>
        </form>
      </div>
      </div>
      </div>
)

}

export default AddNew;