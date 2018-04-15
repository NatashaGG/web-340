// required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// model
var employee = new Employee({
    firstName: "John",
    lastName: "Doe"
});

// define the employeeSchema
var employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

// define the employee model
var Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;