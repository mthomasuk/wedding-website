import React, { Component } from "react";
import { withRouter } from "react-router";

import Button from "../../components/button";
import Header from "../../components/header";
import Food from "../../components/food";

import "./Dinner.css";

const API_ROOT = "http://localhost:7778";
const COURSES = ["Starter", "Main", "Dessert"];

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

class Dinner extends Component {
    state = {
        course: COURSES[0],
        dinnerChoices: {},
        names: [],
    };

    componentDidMount() {
        const {
            match: {
                params: { key },
            },
        } = this.props;

        if (key) {
            fetch(`${API_ROOT}/guests/${key}`)
                .then(response => response.json())
                .then((json) => {
                    const names = json.map(u => u.name.split(" ")[0]);
                    // const dinnerChoices = json.map(u => u.food_choices).filter(Boolean);

                    return this.setState({
                        // dinnerChoices,
                        names,
                    });
                });
        }
    }

    selectFood = ({ course, name, value }) => {
        const { dinnerChoices: initialDinnerChoices } = this.state;

        const dinnerChoices = {
            ...initialDinnerChoices,
            [name]: {
                ...initialDinnerChoices[name],
                [course]: value,
            },
        };

        this.setState({
            dinnerChoices,
        });
    }

    onNext = () => {
        const { course, dinnerChoices, names } = this.state;
        const dinnerKeys = Object.keys(dinnerChoices);

        const isCompleted = dinnerKeys.length === names.length && dinnerKeys
            .sort()
            .every((value, index) => value === names.sort()[index])
        && dinnerKeys.every(d => !!dinnerChoices[d][course]);

        const nextCourseIndex = COURSES.indexOf(course) + 1;

        if (isCompleted) {
            if (nextCourseIndex === COURSES.length) {
                console.log({
                    dinnerChoices,
                });
            } else {
                this.setState({
                    course: COURSES[nextCourseIndex],
                });
            }
        }
    }

    onBack = () => {
        const { course } = this.state;
        const courseIndex = COURSES.indexOf(course);

        if (courseIndex >= 1) {
            this.setState({
                course: COURSES[courseIndex - 1],
            });
        }
    }

    render() {
        const { course, dinnerChoices, names } = this.state;

        return (
            <div className="Dinner">
                <Header
                    backgroundColour="rgb(243, 203, 126)"
                    showOurFaces={!isMobile}
                    title="Great! Now, the important bits"
                />
                <Food
                    course={course}
                    dinnerChoices={dinnerChoices}
                    names={names}
                    selectFood={this.selectFood}
                />
                <div className="Button-container">
                    <Button
                        title="← Back"
                        onClick={this.onBack}
                    />
                    <Button
                        title="Next →"
                        onClick={this.onNext}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Dinner);
