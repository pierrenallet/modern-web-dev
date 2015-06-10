'use strict';

var _ = require('underscore');

var countries = [{
    "id": 1,
    "name": "France"
}, {
    "id": 2,
    "name": "United States"
}, {
    "id": 3,
    "name": "Canada"
}, {
    "id": 4,
    "name": "West Germany"
}, {
    "id": 5,
    "name": "Soviet Union"
}, {
    "id": 6,
    "name": "Spain"
}, {
    "id": 7,
    "name": "Italy"
}, {
    "id": 8,
    "name": "Germany"
}, {
    "id": 9,
    "name": "Mexico"
}, {
    "id": 10,
    "name": "United Kingdom"
}, {
    "id": 11,
    "name": "Switzerland"
}, {
    "id": 12,
    "name": "Poland"
}, {
    "id": 13,
    "name": "Denmark"
}, {
    "id": 14,
    "name": "Algeria"
}, {
    "id": 15,
    "name": "Macedonia"
}, {
    "id": 16,
    "name": "Montenegro"
}, {
    "id": 17,
    "name": "USA"
}, {
    "id": 18,
    "name": "Brazil"
}, {
    "id": 19,
    "name": "Australia"
}, {
    "id": 20,
    "name": "Ireland"
}, {
    "id": 21,
    "name": "Norway"
}, {
    "id": 22,
    "name": "Iran"
}, {
    "id": 23,
    "name": "Sweden"
}, {
    "id": 24,
    "name": "UK"
}, {
    "id": 25,
    "name": "India"
}, {
    "id": 26,
    "name": "Netherlands"
}, {
    "id": 27,
    "name": "Taiwan"
}, {
    "id": 28,
    "name": "Japan"
}, {
    "id": 29,
    "name": "China"
}, {
    "id": 30,
    "name": "Hungary"
}, {
    "id": 31,
    "name": "Morocco"
}, {
    "id": 32,
    "name": "Russia"
}, {
    "id": 33,
    "name": "Belgium"
}];

module.exports = {
    getAll: function () {
        return _.sortBy(countries, function (c) {
            return c.name;
        });
    },
    get: function (id) {
        id = +id;
        return _.find(countries, function (p) {
            return p.id === id;
        });
    }
};
