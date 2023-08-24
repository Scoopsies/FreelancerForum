const names = ["Sarah", "Kelly", "Louis", "Hunter", "Gabby", "Svea", "Tracy", "Glenda", "Ronnie", "August", "Bryce"]
const jobs = ["Artist", "Landscaper", "Plumber", "Web Developer", "Influencer", "Babysitter", "Mehcanic", "Carpenter", "Driver", "Caterer"]
const nameHtml = document.querySelector(".name")
const occupationHtml = document.querySelector(".occupation")
const priceHtml = document.querySelector(".price")
const averagePriceHtml = document.querySelector(".averagePrice")

// Generates an object of name, job, and price(up to 150)
function randListing(){
    const nameListing = names[Math.floor(Math.random() * names.length)]
    const jobListing = jobs[Math.floor(Math.random() * jobs.length)]
    const priceListing = Math.ceil(Math.random() * 150)
    const result = {
        Name: nameListing,
        Job: jobListing,
        Price: priceListing
    }
    return result;
}

const listing = [
    randListing(),
    randListing(),
]
console.log(listing[0])

//Calculates average price of listing.
function avgPrice(){
    let totalPrice = 0;
    let totalListings = 0;
    listing.forEach(randlisting =>{
        totalPrice += randlisting.Price;
        totalListings++
    })
    return (totalPrice / totalListings).toFixed(2)
}
// Keeps average price updated on HTML document.
averagePriceHtml.innerHTML = `The average starting price is only $${avgPrice()}!!!`

function render(){
    const nameHeader = listing.map(obj =>{
        return `<h4>${obj.Name}</h4>`
    })
    nameHtml.innerHTML = nameHeader.join('');

    const jobHeader = listing.map(obj =>{
        return `<h4>${obj.Job}</h4>`
    })
    occupationHtml.innerHTML = jobHeader.join('');

    const priceHeader = listing.map(obj =>{
        return `<h4>${(obj.Price).toFixed(2)}</h4>`
    })
    priceHtml.innerHTML = priceHeader.join('');

    averagePriceHtml.innerHTML = `The average starting price is only $${avgPrice()}!!!`
    
}
render();

setInterval(()=>{
    const newListing = randListing();
    listing.push(newListing);
    render();
}, 3000)

