let customerDatabase = document.querySelector("#customerDatabase");

console.log(customerDatabase);
console.log(moment());

for(let customer of customers) {

    customer.location.state = nameToAbbr (customer.location.state);
    customer.dob.date = moment().format((customer.dob.date).slice(0,10));



    let customerCard = document.createElement('div');
    // created the card for this customer

    let customerpic = document.createElement('img')
    customerpic.src = customer.picture.large
    customerCard.appendChild(customerpic)
    let customerName = document.createElement('h2');
        customerName.innerText = `${customer.name.first} ${customer.name.last}`;
        customerCard.appendChild(customerName);
        //added the name of the cutomer to the card
        let customerEmail = document.createElement('p')
        customerEmail.innerText = customer.email;
        customerCard.appendChild(customerEmail);
        // added the email of the customer to the card

        let customerAddress = document.createElement('p')
            customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}  `
            customerCard.appendChild(customerAddress)

        let customerDOB = document.createElement('p');
            customerDOB.innerText = customer.dob.date;
            customerCard.appendChild(customerDOB);

        


        customerDatabase.appendChild(customerCard);
        // added the customer card to the customer profiles container
}       

