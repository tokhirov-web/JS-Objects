// let school = {
//     Number: 29,
//     Name: "Samarkand High School",
//     studentsQuantity: 125,
//     quantityOfProfessors: 34,
//     additionalFacilities: true,
//     internationalPartner: "Harvard Univeristy",
//     Reliable: false
// };

// let subjects = {
//     firstSubject: {
//         Name: "Math",
//         Duration: "7 weeks"
//     },

//     secondSubject: {
//         Name: "Informtaics",
//         Duration: "5 weeks"
//     },

//     thirdSubject: {
//         Name: "English",
//         Duration: "7 weeks"
//     },
//     certificateForEachSubject: true
// };

let theOffice = {
    companyName: "Global Masters",
    officeLocation: "Gagarin St",
    companyEmail: "globalMasters05@gmail.com",
    govermentalSupport: false,
    companyPhoneNumber: Math.round(Math.random() * 82948584),
    staff: {
        employeesNumber: Math.round(Math.random() * 65),
        employeeAnnualAverageSalary: Math.round(Math.random() * 8233432848)
    }
};

let ceo = {
    ceoName: "Alex",
    ceoSurname: "Jefferson",
    ceoAge: 32,
    Married: true,
    ceoMainSkills: {
        skillName: "Backend",
        experience: "8 Years"
    },
    ceoPhoneNumber: Math.round(Math.random() * 9989919),
    ceoEmail: "jefferson07@gmail.com"
};

let newObject = {};


let newKeys = [];

let newValues = [];

Object.assign(newObject, theOffice, ceo);

let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
};

newKeys.push(Object.keys(newObject));

newValues.push(Object.values(newObject));


let newArr = newKeys.concat(newValues).flat();




let filtered = newArr.filter(element => {
    if (typeof (element) === 'string') {
        types.string.push(element)
    } else if (typeof (element) === 'boolean') {
        types.boolean.push(element)
    } else if (typeof (element) === 'object') {
        types.object.push(element)
    } else if (typeof (element) === 'number') {
        types.number.push(element)
    }
});

console.log(newObject);

console.log(newKeys);

console.log(newValues);

console.log(newArr);

console.log(types);