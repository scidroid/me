import { getNowPlaying } from "lib/spotify";

export const config = {
  runtime: "edge"
};

const handler = async () => {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });
    }

    const song = await response.json();

    if (song.item === null) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          "content-type": "application/json"
        }
      });
    }

    let musicResponse = {};

    if (song.item.type === "episode") {
      musicResponse = {
        isPlaying: true,
        title: song.item.name,
        artist: song.item.show.name,
        album: song.item.show.publisher,
        albumImageUrl: song.item.images[0].url,
        songUrl: song.item.external_urls.spotify
      };
    } else {
      musicResponse = {
        isPlaying: true,
        title: song.item.name,
        artist: song.item.artists
          .map((_artist: { name: string }) => _artist.name)
          .join(", "),
        album: song.item.album.name,
        albumImageUrl: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify
      };
    }

    return new Response(JSON.stringify(musicResponse), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=60, stale-while-revalidate=30"
      }
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({
        message: e.message
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }
};

export default handler;
