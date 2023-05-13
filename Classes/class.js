// // 1) Create a Car class or function constructor that has the following properties:
// // a. make (string): The make of the car, e.g., "Toyota".
// // b. model (string): The model of the car, e.g., "Camry".
// // c. year (number): The year the car was manufactured, e.g., 2020.
// // d. isAvailable (boolean): Indicates if the car is currently available for rent.

class Car{
    constructor(make,model,year,isAvailable){
        this.make = make
        this.model =  model
        this.year = year
        this.isAvailable = isAvailable
    }

    toggleAvailability(){
        this.isAvailable = !this.isAvailable
        console.log(this.isAvailable);
    }
}
const car1 = new Car("Truck","Rivian",2021, true)
const car2 = new Car("Toyota","Airwave",2015, false)
console.log(car1);
console.log(car2);
car1.toggleAvailability()
car2.toggleAvailability()



// // Create a Rental class or function constructor that has the following properties:
// // ● car (Car object): The car that has been rented.
// // ● renterName (string): The name of the person who rented the car.
// // ● rentalStartDate (Date object): The start date of the rental period.
// // ● rentalEndDate (Date object): The end date of the rental period.
// // The Rental class or function constructor should also have a method called
// // calculateRentalDuration that returns the rental duration in days.

// class Rental {
//     constructor(car,renterName,rentalStartDate,rentalEndDate){
//         this.car = car;
//         this.renterName = renterName;
//         this.rentalStartDate = rentalStartDate;
//         this.rentalEndDate = rentalEndDate;
//     }
//     calculateRentalDuration(){
//         let now = new Date()
//         let x = now.getTime()
//         console.log(x);
//         // let  start = this.rentalStartDate;
//         // let  end  = this.rentalEndDate;
//         let  days =  this.rentalEndDate- this.rentalStartDate; ///// in sconds
//         //one hour isequal to 3600s
//         //one day is equal to 3600* 24
//         let  sectodays =  Math.ceil(days * 3600 *24)
//         console.log( sectodays); 
//     }
    
// } // let  start = this.rentalStartDate.getTime();
// // let  end  = this.rentalEndDate;
// // let  days =  end - start; ///// in sconds
// // //one hour isequal to 3600s
// // //one day is equal to 3600* 24
// // sectodays =  Math.ceil(days * 3600 *24)
// // console.log( sectodays); 

// const rental =  new Rental("toyota","Hire",2020)
// rental.calculateRentalDuration()


// // Create an instance of the Car class or function constructor for a car in the
// // inventory. Then, create an instance of the Rental class or function constructor for
// // a rental involving the car you created. Finally, calculate the rental duration using
// // the calculateRentalDuration method.







// // 1. Create a Question class with the following properties:
// // ● text(string): The text of the question.
// // ● options(array): An array containing the multiple-choice options.
// // ● correctAnswer(string): The correct answer to the question.

// class Question {
//     constructor(text,options,correctAnswer){
//         this.text = text;
//         this.options = options
//         this.correctAnswer = correctAnswer
//     }
//     checkAnswer(userAnswer){
//         if(userAnswer ==this.correctAnswer){
//             return true
//         }
//     }
// }
// let question = new Question('Maria',['single','Married','taken'],true)
// console.log({question});
// console.log(question.checkAnswer());

// // Create a Quiz class with the following properties:
// // ● questions(array):An array of Question objects.
// // ● currentQuestionIndex(number): The index of the current question in the
// // questions array.
// // ● score(number): The user’s current score.


// class Quiz{
//     constructor(questions,currentQuestionIndex,score){
//         this.questions = questions;
//         this.currentQuestionIndex = currentQuestionIndex;
//         this.score =score;

//     }
//     addQuestion(qstn){
//         this.questions.push(qstn)
//     }
//     nextQuestion(){
//         this.currentQuestionIndex ++;
//     }
//     submitAnswer(userAnswer){
//         if(currentQuestionIndex.checkAnswer(userAnswer) === true){
//             return score ++
//         }
//     }
// }
// let quiz = new Quiz(["hi","how are you","how have you been"],34,32)
// console.log({quiz});

// console.log(quiz.addQuestion());
// console.log(quiz.nextQuestion());
// console.log(quiz.ad());




