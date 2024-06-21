//static properties:-> static <property name>
//nonstatic property:-> simply pass <property name>
//static Methods:-> static display(){ }

//certain property data common for each and every instance then we can use static property

class User{
    username;
    static city;

    constructor(name,city){
        this.username = name;
        User.city = city;
    }

    changeName(name){
        this.username=name;
    }
    static changeCity(city){
        this.city=city;
    }
    display(){
        console.log(this.username, User.city);

    }
}
var user1 = new User("ram", "pune");
user1.display();
console.log(user1);

var user2 = new User("reva", "pune");
user2.display();

User.changeCity("Thane");
user1.display();
user2.display();