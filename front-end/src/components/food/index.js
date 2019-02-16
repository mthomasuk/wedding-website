import React from "react";
import uuid from "uuid";

import "./Food.css";

const OPTIONS = {
    Starter: [{
        name: "starter-meat",
        value: "Dressed Dorset crab meat on toast, spring onions & watercress",
    }, {
        name: "starter-veggie",
        value: "Portwood Farm asparagus, mushroom & bernaise sauce (V)",
    }],
    Main: [{
        name: "main-meat",
        value: "Roasted lamb loin, jersey royals, wild mushrooms, broad beans & rosmary jus",
    }, {
        name: "main-veggie",
        value: "Shitaake mushroom, goat's cheese & truffle oil fritter, roasted veg ratatouille (V)",
    }],
    Dessert: [{
        name: "dessert-tart",
        value: "Double chocolate tart, orange caramel sauce (V)",
    }, {
        name: "dessert-pudding",
        value: "Summer pudding of forest fruits, mascarpone sorbet, blueberry coulis and white chocolate ganache (V)",
    }],
};

const FoodOption = ({
    course,
    dinnerChoices,
    name,
    option,
    selectFood,
}) => (
    <label
        className="Food-label"
        key={uuid()}
        htmlFor={`${name}-${option.name}`}
    >
        <input
            checked={dinnerChoices[name] && dinnerChoices[name][course] === option.name}
            className="Food-radio"
            id={`${name}-${option.name}`}
            onChange={() => selectFood({
                course,
                name,
                value: option.name,
            })}
            name={`${name}-${course}`}
            type="radio"
        />
        {option.value}
    </label>
);

const FoodChoice = ({
    course,
    dinnerChoices,
    name,
    options,
    selectFood,
}) => (
    <div className="Food-choice" key={uuid()}>
        <h5>{`${course} for ${name}`}</h5>
        {options.map(option => (
            <FoodOption
                course={course}
                dinnerChoices={dinnerChoices}
                key={uuid()}
                name={name}
                option={option}
                selectFood={selectFood}
            />
        ))}
    </div>
);

const Food = ({
    course,
    dinnerChoices,
    names,
    selectFood,
}) => (
    <div className="Food-content">
        {names.map(name => (
            <FoodChoice
                course={course}
                dinnerChoices={dinnerChoices}
                key={uuid()}
                name={name}
                options={OPTIONS[course]}
                selectFood={selectFood}
            />
        ))}
    </div>
);

export default Food;
