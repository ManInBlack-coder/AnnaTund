const person = {
    firstname: 'Sass',
    lastname: 'Kompass',
    age: 16,
    email: 'sass.kompas@gmail.com',
    hobbies:['tennis',"Arvuti"],
    address: {
        city: 'Tallinn',
        county: 'Harjumaa'
    }, 
    GetBirthYear: function(){
        return 2023 - this.age
    },
    showHobbies: function(){
        this.hobbies.forEach(function(hobbie){
            console.log(this.hobbie)
        })
    },
    ShowAddressData: function(){
        for(adressKey in this.address){
            console.log(this.address[adressKey])
        } 
    } 

} 


let val = person.firstname
val = person.lastname 

