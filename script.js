function Run()
{
    var myObject =
    {
        myValue: 'some text'
    };
    console.log(myObject);
}

function Run2()
{
    var person1 = BuildObject ('dan', 39, 4.0);
    var person2 = BuildObject ('edgar', 25, 2.0);
    var person3 = BuildObject ('paul', 55, 3.9);

    console.log(person1);
    console.log(person2);
    console.log(person3);
}

function BuildObject(value1, value2, value3)
{
    
        var returnObject =
    {
        name: value1,
        age: value2,
        gpa: value3
    }
    return returnObject;
}
function Run3()
{
    var person1 = BuildObject('dan', 39, 4.0);
    var person2 = BuildObject('edgar', 25, 2.0);
    var person3 = BuildObject('paul', 55, 3.9);

    var students = [person1, person2, person3];

    var worstStudent = FindWorstStudent(students);

    console.log("The worst student has been found. It is: ");
    console.log(worstStudent);
}

function FindWorstStudent(listofStudents)
{
    var worstStudent;
    
    listofStudents.forEach(
        
        element =>
        {
            if (worstStudent == null)
            {
                worstStudent = element;
            }
            else
            {
                if(element.gpa < worstStudent.gpa)
                {
                    worstStudent = element;
                }
            }

        }
    );
}

function Run4()
{
    console.log(theJSON);
    var students = theJSON.data;
    var worstStudent = FindWorstStudent(students);

    console.log("The worst student has been found. It is: ");
    console.log(worstStudent);
}

console.log(theJSON.data);
let topLeft = theJSON.data[2];
let topRight = theJSON.data[0];
let bottomLeft = theJSON.data[3];
let bottomRight = theJSON.data[1];

function Run5(){
    console.log(theJSON);

    let boundingBox = {
        topLeft: topLeft,
        topRight: topRight,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight,
    }

    console.log ("Bounding box computed for adamcantuu@tamu.edu: ")
    console.log(boundingBox);
}

