import React from 'react';
import photo from './Photo.png';
import pic from './pic.png';
import './style.css';


function App() {
return(
 <div>
   <h1 className='titleRed'>
My title
   </h1>
   <br/>
  <img src={photo} />
  <br/>
  <img src={pic}/>
</div>)
}


export default App;
