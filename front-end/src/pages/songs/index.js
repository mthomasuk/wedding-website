import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "../../components/header";
import Button from "../../components/button";
import AllergyInfo from "../../components/allergy";

import "./Songs.css";

const API_ROOT = "http://localhost:7778";

class Songs extends Component {
    state = {
        ids: [],
        songChoices: {},
        names: [],
    };

    componentDidMount() {
        const {
            history: {
                push,
            },
            match: {
                params: { key },
            },
        } = this.props;

        if (key) {
            fetch(`${API_ROOT}/guests/${key}`)
                .then(response => response.json())
                .then((json) => {
                    const ids = json.map(({ id, name }) => ({ name: name.split(" ")[0], id }));
                    const names = json.map(u => u.name.split(" ")[0]);

                    const songChoices = json.map(u => u.song_choices).filter(Boolean);
                    const songKeys = Object.keys(songChoices);

                    const isCompleted = songKeys.length === names.length && songKeys
                        .sort()
                        .every((value, index) => value === names.sort()[index]);

                    if (isCompleted) {
                        return push(`/${key}`);
                    }

                    return this.setState({
                        ids,
                        names,
                    });
                });
        }
    }

    selectSongs = ({ course, name, value }) => {
        const { songChoices: initialSongChoices } = this.state;

        const songChoices = {
            ...initialSongChoices,
            [name]: {
                ...initialSongChoices[name],
                [course]: value,
            },
        };

        this.setState({
            songChoices,
        });
    }

    onNext = async () => {
        const {
            history: {
                push,
            },
            match: {
                params: {
                    key,
                },
            },
        } = this.props;

        const {
            songChoices,
            ids,
        } = this.state;

        await Promise.all(ids.map(({ id, name }) => fetch(`${API_ROOT}/guests/${id}/songs`, {
            body: JSON.stringify(songChoices[name]),
            method: "POST",
        }).then((response) => {
            if (response.ok) {
                return push(`/${key}`);
            }
        }))).catch(err => console.warn({ err }));
    }

    onBack = () => {
        const {
            history: {
                push,
            },
            match: {
                params: {
                    key,
                },
            },
        } = this.props;

        return push(`/allergies/${key}`);
    }

    render() {
        return (
            <div className="Songs">
                <Header
                    backgroundColour="rgb(78, 78, 78)"
                    showOurFaces
                    title="Time to Choose<br/>Your Tune"
                />
                <AllergyInfo onChange={this.onChange} />
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

export default withRouter(Songs);
