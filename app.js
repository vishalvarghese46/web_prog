const first = require("ee-first");

const get_full_name = (first_name, last_name) => first_name + " " + last_name;

const get_last_name = (last_name) => `, ${last_name}`;

const get_first_name = (first_name) => `${first_name},`;

module.exports = {get_first_name, get_last_name, get_full_name};
