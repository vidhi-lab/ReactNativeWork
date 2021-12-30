import React, { Component } from 'react'
import { Text, View } from 'react-native';
import TrackPlayer,{Capability,RepeatMode} from 'react-native-track-player';
import songs from '../examples/Resources/song.m4a';
import Playlist from '../examples/Data/Playlist.json'


const setUpIfNecessary=async()=>{
    const currentTrack=await TrackPlayer.getCurrentTrack();
    if(currentTrack!==null){
        return;
    }
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
        stopWithApp:false,
        capabilities:[
            Capability.Play,
            Capability.Pause,
            Capability.Stop,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.SeekTo
        ],
        compactCapabilities:[
            Capability.Play,Capability.Pause
        ]
    });
    await TrackPlayer.add(Playlist),
    await TrackPlayer.add({
        url: songs,
        title: 'Pure (Demo)',
        artist: 'David Chavez',
        artwork: 'https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6',
        duration: 28,
        
});
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
};
export default setUpIfNecessary;

