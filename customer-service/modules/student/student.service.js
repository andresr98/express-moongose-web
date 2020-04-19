(function () {
    'use strict';

    module.exports = {
        createStudent: createStudent,
        getAllStudents: getAllStudents,
        getStudentById: getStudentById,
        updateStudentById: updateStudentById,
        deleteStudentById: deleteStudentById,
        updateStudents: updateStudents,
        getAverage: getAverage
    };

    var StudentModel = require('./student.module')().StudentModel;

    function createStudent(student) {
        return StudentModel.create(student);
    }

    function getAllStudents() {
        return StudentModel.find({})
            .exec();
    }

    function getStudentById(studentId) {
        return StudentModel.findById(studentId)
            .exec();
    }

    function updateStudentById(studentId, student) {
        return StudentModel
            .findByIdAndUpdate(studentId, student, {new: true})
            .exec();
    }

    function deleteStudentById(customerId) {
        return StudentModel
            .findByIdAndRemove(customerId)
            .exec();
    }

    function updateStudents(filters, student) {
        return StudentModel.updateMany(filters, student).exec()
    }

    function getAverage(course) {
        return StudentModel.find(course).exec();
    }

})();