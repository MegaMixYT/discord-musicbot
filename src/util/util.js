const secondsToTimestamp = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  let mins = `0${Math.floor((seconds % 3600) / 60)}`;
  let secs = `0${Math.floor((seconds % 60))}`;

  mins = mins.substr(mins.length - 2);
  secs = secs.substr(secs.length - 2);

  // eslint-disable-next-line
  if (!isNaN(secs)) {
    if (hours) {
      return `${hours}:${mins}:${secs}`;
    }
    return `${mins}:${secs}`;
  }
  return '00:00';
};

const getYoutubeVideoId = (url) => {
  const patterns = [
    /youtu\.be\/([^#&?]{11})/, // youtu.be/<id>
    /\?v=([^#&?]{11})/, // ?v=<id>
    /&v=([^#&?]{11})/, // &v=<id>
    /embed\/([^#&?]{11})/, // embed/<id>
    /\/v\/([^#&?]{11})/, // /v/<id>
  ];

  if (/youtu\.?be/.test(url)) {
    // If any pattern matches, return the ID
    for (let i = 0; i < patterns.length; i += 1) {
      if (patterns[i].test(url)) {
        return patterns[i].exec(url)[1];
      }
    }
  }

  return null;
};

const getYoutubePlaylistId = (url) => {
  const patterns = [
    // FIXME unsure if this is all possible playlist urls... but I can't find a good list online.
    /\?list=([^#&?]{34})/, // ?list=<id>
    /&list=([^#&?]{34})/, // &list=<id>
  ];

  if (/youtu\.?be/.test(url)) {
    // If any pattern matches, return the ID
    for (let i = 0; i < patterns.length; i += 1) {
      if (patterns[i].test(url)) {
        return patterns[i].exec(url)[1];
      }
    }
  }

  return null;
};

module.exports = {
  secondsToTimestamp,
  getYoutubeVideoId,
  getYoutubePlaylistId,
};
