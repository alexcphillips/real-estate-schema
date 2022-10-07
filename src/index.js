// Our clients are each associated with a Company.

// Every Deal represents the lifespan of a negotiation between two real estate brokers over a property. Each Deal is associated with exactly one Company, but a Company can have many Deals.

// Each Deal can be represented through 3 Stages, which are ordered chronologically from 1-3. Each Deal has exactly 3 stage objects, one corresponding to each stage of a Deal, and they have timestamps indicating when each Stage was completed (if it has been).

// For this exercise, we're working with this schema. You should familiarize yourself with it and the fields for each type in data.js.

// Your primary task is to find the percentage of each stage_number that has been completed, given a number of optional parameters. The inputs are types of filters explained below. The output expected is an array of 3 integers, where each integer corresponds to the stage_number of the Stages (1, 2, and 3, in that order). When there are no valid stages, you should return [0, 0, 0]. You can round each number as an integer with Math.round().

// To accomplish this, you'll be working in the main.js file filling out the stage_completions() function, as well as writing unit tests for it in main.spec.js.

// To do this, please fulfill the following requirements:

// Complete the functionality of the stage_completions() function, along with handling of the possible inputs of the function.
// company_name - limit the stage completion results to the stages belonging to the company with this name. If unpassed, the results should not be limited by company.
// start_date - limit the results to stages that were completed exclusively after this value. If not passed, there is no earliest date scope. This is always a Date object or undefined.
// include_archived - By default set to true. This is always a boolean. If false, the function should not include results of the stages with archived Deals in the results. If true, there is no such requirement.
// Feel free to modularize however you'd like, keeping in mind coding hygiene and best practices.
// Create tests to cover your new function and all of its functionality.
// Do not modify existing data.
// [execution time limit] 20 seconds

const { STAGES, DEALS, COMPANIES } = require("./data");

function stage_completions(company_name, start_date, include_archived = false) {
    return [0, 0, 0];
}
