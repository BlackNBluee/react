import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //   //HANDLING EACH STATE USING DIFFERENT FUNCTIONS
  // const[firstName, setFirstName]=useState("")
  // const[lastName, setLastName]=useState("")
  // function changeFirstNameHandler(event){
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   setLastName(event.target.value);
  // }

  //HANDLING ALL STATES USING SINGLE FUNCTION
  const [ formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:true,
                                              mode:"", favCar:""});

  function changeHandler(event){
    setFormData(prevFormData => {
      //EXTRACTING VALUES FROM EVENT USING DESTRUCTION
      const {name, value,checked, type} = event.target;

      return {
        ...prevFormData,                        //get previous data
        [name]: (type === 'checkbox') ? checked : value //concat previous data with changed value 
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finally submitted");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <input
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name='firstName'            //used in changeHandler to specify which elemnt of object to update
          value={formData.firstName}  //after rerendering the value gets updated 
        />
        <br>
        </br>
        <input  
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />
        <br></br>
        <input 
          type='email'
          placeholder='enter email'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />
        <br></br>
        <textarea 
          placeholder='comments'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />
        <br></br>

        <input 
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked = {formData.isVisible}
        />
        <label 
          htmlFor='isVisible'     
        >Am I visible?
        </label>

        <br></br>

        <input 
          type="radio"
          onChange={changeHandler}
          name='mode'
          value="Online-Mode"
          id='Online-Mode'
          checked={formData.mode === "Online-Mode" }
        />
        <label  htmlFor='Online-Mode'>Online Mode</label>

        <input 
          type='radio'
          onChange={changeHandler}
          name='mode'
          value="Offline-Mode"
          id='Offline-Mode'
          checked={formData.mode === "Offline-Mode" }
        />
        <label  htmlFor='Offline-Mode'>Offline Mode</label>

        <br></br>

        <select
          onChange={changeHandler}
          id="favCar"
          name="favCar"
          value={formData.favCar}
        >
            <option value="scorpio">Scorpio</option>
            <option value="fortuner">fortuner</option>
            <option value="Thar">Thar</option>
            <option value="Nano">Nano</option>
        </select>
        <label htmlFor='favCar'>Tell me favourite Car</label>


        <br></br>
        {/* <input type='radio' name='hi'/>
        <label htmlFor='hi'>Hi</label> */}
        <button type='submit' name='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
