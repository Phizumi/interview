// type Gender = 1 | 0
var Student = /** @class */ (function () {
    function Student(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
    }
    Student.prototype.eat = function () {
        console.log('eat');
    };
    Student.prototype.growUp = function () {
        this.age++;
    };
    return Student;
}());
var s1 = new Student('张三', 18, 1);
console.log('🚀 ~ s1:', s1);
s1.growUp();
