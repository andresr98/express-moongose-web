(function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var StudentSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }, 
        cel: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        course: {
            type: Number,
            required: true
        },
        grade: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        }
    });

    module.exports = mongoose.model('students', StudentSchema);
})();