import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{


     const [categories, setCategories] = useState(['One Punch']);

      return (
          <>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories={setCategories}/>
          <hr/>
         
         <ul>
              {
               categories.map((category, id) => (
                 <GifGrid 
                 key = { category }
                 category ={ category } />
               ))

              }
         </ul>
          </>
      )
}

export default GifExpertApp;