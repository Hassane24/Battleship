function player(playing = false) {
  const state = {
    playing,
  };

  const whoIsPlaying = () => {
    return state.playing;
  };

  const switchRoles = () => {
    return (state.playing = !state.playing);
  };

  return { whoIsPlaying, switchRoles };
}

export { player };
