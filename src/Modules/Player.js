function player(playing = false) {
  const state = {
    playing,
  };

  const whoIsPlaying = () => {
    return state.playing;
  };

  return { whoIsPlaying };
}

export { player };
