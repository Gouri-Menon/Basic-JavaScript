function whoAmI() {
    console.log(this);
}
whoAmI();                                
const user = { name: "Priya", whoAmI };
user.whoAmI();                           
const other = { name: "Aarav", whoAmI };
other.whoAmI();  



function greet(city, lang) {
    console.log(`${this.name} from ${city} speaks ${lang}`);
}

const u = { name: "Priya" };

greet.call(u, "Jaipur", "Hindi");
greet.apply(u, ["Jaipur", "Hindi"]);
const greetPriya = greet.bind(u, "Chennai", "Hindi");
greetPriya();


const user1 = {
    name1: "Priya",
    regular : function() {
        console.log("Hello, " + this.name1);
    },
    arrow: () => {
        console.log(`Hi, ${user1.name1}`);
    }
}
user1.regular();
user1.arrow();

const team = {
    members: ["Priya", "Aarav", "Riya"],
    greetAll(){
        this.members.forEach((m) => console.log(`Hello, ${m}`));
    }

}
team.greetAll();