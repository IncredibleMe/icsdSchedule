'use strict';

class ExamTime {
    constructor(weekId, dayOfWeek, partOfDay, course){
        this.weekId = weekId ;
        this.dayOfWeek = dayOfWeek;
        this.partOfDay = partOfDay;
        this.course = course;
     }
};

module.exports = ExamTime;