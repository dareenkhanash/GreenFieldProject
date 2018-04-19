import React from 'react';

const SignUp =() => (
	<center>
	<form>

  <div >
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
   
<div>
    <label ><b>Email: </b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>
</div>

<p></p>
<div>
    <label ><b>Telephone Number: </b></label>
    <input type="text" placeholder="Enter Telephone Number" name="telephone" required/>
</div>

<p></p>

<div>
    <label ><b>Gender: </b></label>
    <input type="text" placeholder="Enter Gender" name="gender" required/>
</div>
<p></p>
<div>
    <label ><b>Address: </b></label>
    <input type="text" placeholder="Enter Address" name="address" required/>
</div>
<p></p>
<div>
    <label ><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
</div>

<p></p>

<div>
    <label ><b>Repeat Password: </b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
</div>
    
<p></p>
 

    <div>
            <button type="submit" >Sign Up</button>
    </div>
  </div>
</form>
	</center>
)


export default SignUp;



