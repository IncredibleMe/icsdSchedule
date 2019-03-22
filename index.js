 'use strict';

var Constrained = require('constrained');
var ExamTime = require('./Model/ExamTime.js')
var Course = require('./Model/Course.js')

var mathima1 = new ExamTime(1, 0, 0, new Course("Mathima 1", 1)); 
var mathima2 = new ExamTime(1, 0, 0, new Course("Mathima 2", 1));
var mathima3 = new ExamTime(1, 0, 0, new Course("Mathima 3", 1)); 
var mathima4 = new ExamTime(1, 0, 0, new Course("Mathima 4", 2));
var mathima5 = new ExamTime(1, 0, 0, new Course("Mathima 5", 2)); 
var mathima6 = new ExamTime(1, 0, 0, new Course("Mathima 6", 2));
var mathima7 = new ExamTime(1, 0, 0, new Course("Mathima 7", 3)); 
var mathima8 = new ExamTime(1, 0, 0, new Course("Mathima 8", 3)); 
var mathima9 = new ExamTime(1, 0, 0, new Course("Mathima 9", 3)); 
var mathima10 = new ExamTime(1, 0, 0, new Course("Mathima 10", 4)); 
var mathima11 = new ExamTime(1, 0, 0, new Course("Mathima 11", 4)); 
var mathima12 = new ExamTime(1, 0, 0, new Course("Mathima 12", 4));

var courses = [mathima1, mathima2, mathima3, mathima4, mathima5, mathima6, mathima7, mathima8, mathima9, mathima10, mathima11, mathima12];


// Instantiation of the system
var mySystem = new Constrained.System();

var days = ['d1', 'd2', 'd3', 'd4', 'd5'];


// Instantiation of the variables and the constant
mySystem.addVariable('d1', mathima1, 'dayOfWeek');
mySystem.addVariable('d2', mathima2, 'dayOfWeek');
mySystem.addVariable('d3', mathima3, 'dayOfWeek');
mySystem.addVariable('d4', mathima4, 'dayOfWeek');
mySystem.addVariable('d5', mathima5, 'dayOfWeek');
mySystem.addVariable('d6', mathima6, 'dayOfWeek');
mySystem.addVariable('d7', mathima7, 'dayOfWeek');
mySystem.addVariable('d8', mathima8, 'dayOfWeek');
mySystem.addVariable('d9', mathima9, 'dayOfWeek');
mySystem.addVariable('d10', mathima10, 'dayOfWeek');
mySystem.addVariable('d11', mathima11, 'dayOfWeek');
mySystem.addVariable('d12', mathima12, 'dayOfWeek');
//mySystem.addConstant('w', weekObject, 'w'); // constant named c

var i,j;
for (i=1; i<=12; i++){
    mySystem.addConstraint( 'd' + i + '>=' + '1');
    for (j=i+1; j<=12; j++){
        if (courses[i-1].course.semester == courses[j-1].course.semester){
            console.log('d' + i + ' >= d' + j +'+1' );
            mySystem.addConstraint( 'd' + i + ' >= (d' + j + ' + 1)');
        }
    }
}
//mySystem.addConstraint('d1 = 1');

// Definition of the system

//mySystem.addConstraint('x + y = c');
 
// Solving the system to obtain a feasible solution
mySystem.resolve();
 
// Displaying the result
mySystem.log(); // x + y = 100
 
// Making sure that objects have been updated
//console.log('(x, y) = (', texnitiNoimosini.weekId, ',', java.weekId, ')');
