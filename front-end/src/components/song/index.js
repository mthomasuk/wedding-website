import React, { PureComponent } from "react";

import "./Song.css";

const SongChoice = ({ choice, name, selectSong }) => (
    <div className="SongInputWrapper" key={name}>
        <h4>{name}&apos;s song</h4>
        <div>
            <input
                className="SongInput"
                defaultValue={choice && choice.artist}
                type="text"
                placeholder="Artist"
                onChange={e => selectSong({ artist: e.target.value }, { name })}
            />
            <input
                className="SongInput"
                defaultValue={choice && choice.title}
                type="text"
                placeholder="Song"
                onChange={e => selectSong({ title: e.target.value }, { name })}
            />
        </div>
    </div>
);

class Song extends PureComponent {
    render() {
        const { names, selectSong, songChoices } = this.props;
        return (
            <div className="Song">
                {names.map(name => (
                    <SongChoice
                        choice={songChoices[name]}
                        key={name}
                        name={name}
                        selectSong={selectSong}
                    />
                ))}
            </div>
        );
    }
}

export default Song;
