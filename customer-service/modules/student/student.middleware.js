(function () {
    'use strict';

    module.exports = {
        addStudent: addStudent,
        getAllStudents: getAllStudents,
        getStudentById: getStudentById,
        updateStudentById: updateStudentById,
        deleteStudentById: deleteStudentById,
        updateStudents: updateStudents,
        getAverage: getAverage
    };

    var StudentService = require('./student.module')().StudentService;

    function addStudent(req, res, next) {

        StudentService.createStudent(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }
    }

    function getAllStudents(req, res, next) {

        StudentService.getAllStudents()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }
    }

    function getStudentById(req, res, next) {

        StudentService.getStudentById(req.params.studentId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function updateStudentById(req, res, next) {
        StudentService.updateStudentById(req.params.studentId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function deleteStudentById(req, res, next) {

        StudentService.deleteStudentById(req.params.studentId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function updateStudents(req, res, next) {
        StudentService.updateStudents(req.body.filters, req.body.student)
            .then(success)
            .catch(failure);
        
        function success(data) {
            req.response = data.nModified;
            next();
        }

        function failure (error) {
            next(err);
        }
    }

    function getAverage(req, res, next) {
        StudentService.getAverage(req.query)
            .then(success)
            .catch(failure);

        function success(data) {
            const size = data.length;
            let sum = 0;
            for (let student of data ) {
                sum += student.grade
            }

            const average = sum / size;
            req.response = {"num_student": size,
                            average};
            next();
        }

        function failure(error) {
            next(err);
        }
    }
})();