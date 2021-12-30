import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ImageBackground
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import setUpIfNecessary from '../Components/Audio';





const togglePlayback = async (playbackState=State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      // TODO: Perhaps present an error or restart the playlist?
    } else {
      if (playbackState !== State.Playing) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

const Audioscreen = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [trackArtwork, setTrackArtwork] = useState();
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [isSeeking, setIsSeeking] = useState(false);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });
  const slidingStarted = () => {
    setIsSeeking(true);
  };

  useEffect(() => {
    setUpIfNecessary();
  }, []);

  return (
    <View style={styles.screenContainer}>
    <ImageBackground style={styles.backgroundimage}
    source={require('../examples/music3.jpeg')}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.contentContainer}>
        <View style={styles.topBarContainer}>
        </View>
        <Image style={styles.artwork} source={{uri: `${trackArtwork}`}} />
        <Text style={styles.titleText}>{trackTitle}</Text>
        <Text style={styles.artistText}>{trackArtist}</Text>
        <Slider
          style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#FFD479"
          minimumTrackTintColor="#FFD479"
          maximumTrackTintColor="#FFFFFF"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value*progress.duration);

          }}
        />
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
        </View>
      </View>
      <View style={styles.actionRowContainer}>
      {/* <TouchableOpacity onPress={() => TrackPlayer.seekTo()}>
          <Image source={require('../examples/slow.png')}
          style={styles.secondaryActionButton}/>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          <Image source={require('../examples/back.png')}
          style={styles.secondaryActionButton}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
          <Text style={styles.primaryActionButton}>
            {playbackState === State.Playing ? 
            <Image source={require('../examples/pause.png')}
          style={styles.primaryActionButton}
        /> : <Image source={require('../examples/play.png')}
          style={styles.primaryActionButton}
        />}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
        <Image source={require('../examples/next.png')}
          style={styles.secondaryActionButton}
        />
        {/* </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.seekTo(20)}>
        <Image source={require('../examples/fast.png')}
          style={styles.secondaryActionButton}
        /> */}
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // backgroundColor: '#212121',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  artwork: {
    width: 220,
    height: 220,
    marginTop: 80,
    backgroundColor: 'grey',
    borderRadius:10
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 30,
  },
  artistText: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
  },
  progressContainer: {
    height: 40,
    width: 380,
    marginTop: 50,
    // flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: 'white',
    fontVariant: ['tabular-nums'],
  },
  actionRowContainer: {
    width: '60%',
    flexDirection: 'row',
    marginBottom: 100,
    justifyContent: 'space-between',
    marginLeft:90
  },
  primaryActionButton: {
    color: '#FFD479',
  },
  secondaryActionButton: {
    color: '#FFD479',
  },
  backgroundimage:
  {
    flex:1,
    width:450
  }
});

export default Audioscreen;