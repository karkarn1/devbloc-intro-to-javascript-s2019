const jsonData = {
    "name":"Karim",
    "age":22,
    "sports_team": [
        "Raptors", "Habs"
    ],
    "siblings": [
        {
            "name": "Zein",
            "age": 20,
        },
        {
            "name":"Rima",
            "age":19,
        }
    ]
};
console.log(jsonData);
console.log(jsonData.name);
console.log(jsonData["age"]);
console.log(jsonData.sports_team);
console.log(jsonData["siblings"]);
console.log(jsonData["siblings"][0]);
console.log(jsonData["siblings"][0].name);
