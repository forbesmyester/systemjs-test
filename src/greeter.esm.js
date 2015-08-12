"use strict";

export function leave({id, first_name: firstName, last_name: lastName}) {
    return `Bye ${firstName}` + lastName + " you have id " + id;
}
export function enter({id, first_name: firstName, last_name: lastName}) {
    return "Hi " + firstName + " " + lastName + " you have id " + id;
}

