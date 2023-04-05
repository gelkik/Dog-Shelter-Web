import React from 'react';
import BreadCumb from '../components/doglists/BreadCumb';
import AdoptionShop from '../components/AdoptionShop'


function DogList() {


  return(

	  <main>
	   <BreadCumb
	   	page_name = 'Dog List'
	   />
	   <AdoptionShop/>
	  </main>
  )
}

export default DogList;
