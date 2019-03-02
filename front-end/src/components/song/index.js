import React, { PureComponent } from "react";

import "./Song.css";

const SongChoice = name => (<div key={name}>{name}<div><input /><input /></div></div>);

class Song extends PureComponent {
    render() {
        const { names, selectSong, songChoices } = this.props;
        return (
            <div className="Song">{names.map(SongChoice)}</div>
        );
    }
}

export default Song;
