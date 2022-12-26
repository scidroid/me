import Image from "next/image";

import fetcher from "lib/fetcher";
import { NowPlayingSong } from "lib/types";
import React from "react";
import useSWR from "swr";

import Simple from "./elements/Simple";

const NowPlaying: React.FC = () => {
  const { data } = useSWR<NowPlayingSong>("/api/music", fetcher, {
    refreshInterval: 120000
  });

  return (
    <Simple>
      <div className="large:flex large:flex-col large:items-center large:justify-center h-full">
        <h2 className="text-center w-full mb-4 font-bold text-2xl">
          Now playing
        </h2>
        <div className="flex flex-col items-center justify-center h-full pb-6 large:pb-0">
          {!data ? (
            <>
              <div className="w-32 h-32 rounded-xl bg-slate-200 animate-pulse" />
              <div className="mt-2 w-44 h-8 m-2 rounded-xl bg-slate-200 animate-pulse" />
            </>
          ) : data?.isPlaying ? (
            <>
              <a target="_blank" href={data.songUrl} rel="noreferrer">
                <Image
                  src={data.albumImageUrl}
                  alt={data.album}
                  width={176}
                  height={176}
                  className="rounded-xl w-32"
                />
              </a>
              <p className="font-bold mt-2 text-center line-clamp-1">
                {data.title}
              </p>
              <p className="text-center line-clamp-1">{data.artist}</p>
            </>
          ) : (
            <p>Not playing anything right now.</p>
          )}
        </div>
      </div>
    </Simple>
  );
};

export default NowPlaying;
