let customerDatabase = document.querySelector("#customerDatabase");
//document.getElementById("customerDatabase").style.display = "flex";
//document.getElementById("customerDatabase").style.flexWrap = "wrap";


console.log(customerDatabase);
//console.log(moment());

for(let customer of customers) {

    let formattedState = nameToAbbr (customer.location.state); 
    // called function nameToAbbr to get state abbrev

    let formattedDate = moment(customer.dob.date).format('MMM D, YYYY');
    let formattedRegisteredDate = moment(customer.registered.date).format('MMM D, YYYY');
    // used moment.js libary to format dates



    let customerCard = document.createElement('div');
    customerCard.classList.add("eachProfile");
    // created the card for this customer

    
    let customerpic = document.createElement('img')
    customerpic.src = customer.picture.large

    customerCard.appendChild(customerpic)
    customerpic.classList.add("pictures");
    // added the pic to the card

    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);
    customerName.classList.add('names')
    //added the name of the cutomer to the card

    let customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);
    customerEmail.classList.add('email')
    // added the email of the customer to the card

    let customerAddress = document.createElement('p')
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city}, ${formattedState} ${customer.location.postcode}  `
    customerCard.appendChild(customerAddress)
    customerAddress.classList.add("address")
    // added the address to the card

    let customerDobReg = document.createElement('p');
    customerDobReg.innerText = `DOB: ${formattedDate} \n Customer since: ${formattedRegisteredDate}`;
    customerCard.appendChild(customerDobReg);
    customerDobReg.classList.add("dob")
    // added date of birth and registration date to the card

        

        


    customerDatabase.appendChild(customerCard);
    // added the customer card to the customer profiles container
}       

