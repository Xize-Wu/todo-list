"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';

export default function TodoItem() {
  return(


<form>
<label for="description">Name:</label>
<input type="text" id="description" name="description" required />

<br/>

<label for="deadline">Email:</label>
<input type="date" id="date" name="deadline" required />

<br/>

<label for= "urgency">Is this urgent?</label>
<input type='checkbox' id='urgency' name='urgency'/>

<input type="submit" value="Submit"/>
</form>
  )
}