"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';

export default function TodoItem() {
  return(
    <span>
      <p className='todo-name'>Apply for 6 jobs</p>
      <p className='deadline'>June 7th, 2023</p>
      <p className='urgency'>Urgent</p>
      <p className='importance'>Important</p>
      <p className='status'>Unfinished</p>
    </span>
  )
}