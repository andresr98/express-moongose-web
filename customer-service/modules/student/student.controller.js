(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var StudentMiddleware = require('./student.module')().StudentMiddleware;

    router.get('/average', 
        StudentMiddleware.getAverage,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.post('/',
        StudentMiddleware.addStudent,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        StudentMiddleware.getAllStudents,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:studentId',
        StudentMiddleware.getStudentById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:studentId',
        StudentMiddleware.updateStudentById,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/:studentId',
        StudentMiddleware.deleteStudentById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/',
        StudentMiddleware.updateStudents,
        function (req, res) {
            res.status(200).json({"modified": req.response});
        });
    module.exports = router;

})();