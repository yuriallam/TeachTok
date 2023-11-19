import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {ForYouResponse} from '../../types/ForYouResponse';

const DescriptionText = ({description}: {description: string}) => {
  const hashtagIndex = description.indexOf('#');
  const beforeHashtag = description.substring(0, hashtagIndex);
  const hashtag = description.substring(hashtagIndex);

  return (
    <Text style={styles.description}>
      {beforeHashtag}
      <Text style={styles.descriptionHashtag}>{hashtag}</Text>
    </Text>
  );
};

type OptionItem = ForYouResponse['options'][number];

const iconTextData = [
  {iconName: 'heart', text: '87'},
  {iconName: 'chat-processing', text: '2'},
  {iconName: 'bookmark', text: '203'},
  {iconName: 'share', text: '17'},
];

const IconTextRow = ({iconName, text}: {iconName: string; text: string}) => (
  <View style={styles.iconTextRow}>
    <Icon name={iconName} color="white" size={35} />
    <Text style={styles.iconText}>{text}</Text>
  </View>
);

export default function AnswerOption({itemData}: {itemData: ForYouResponse}) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [animationWidth] = useState(new Animated.Value(0)); // Initial width of the animated view
  const tabBarHeight = useBottomTabBarHeight();

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);

    // Start the animation
    Animated.timing(animationWidth, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const renderOption = ({item}: {item: OptionItem}) => {
    const isCorrect = itemData.correct_options
      ? itemData.correct_options.answer === item.answer
      : false;
    const backgroundColor =
      selectedOptionId === item.id
        ? isCorrect
          ? 'rgba(40, 177, 143, 0.70)'
          : 'rgba(220, 95, 95, 0.70)'
        : 'rgba(255, 255, 255, .50)';

    return (
      <TouchableOpacity
        style={[styles.option, {backgroundColor}]}
        onPress={() => handleSelectOption(item.id)}>
        <Animated.View />
        <Text style={styles.optionText}>{item.answer}</Text>
        {selectedOptionId === item.id && (
          <Icon
            name={isCorrect ? 'thumb-up' : 'thumb-down'}
            color="white"
            size={22}
            style={styles.thumbButton}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {height: Dimensions.get('window').height - tabBarHeight},
      ]}>
      <ImageBackground
        source={{uri: itemData.image}}
        style={[
          styles.backgroundImage,
          {height: Dimensions.get('window').height - tabBarHeight},
        ]}>
        <View style={styles.side}>
          <View style={styles.avatarContainer}>
            <Image source={{uri: itemData.user.avatar}} style={styles.avatar} />
            <View style={styles.plusContainer}>
              <Text style={styles.plus}>+</Text>
            </View>
          </View>
          {iconTextData.map((item, index) => (
            <IconTextRow
              key={index}
              iconName={item.iconName}
              text={item.text}
            />
          ))}
        </View>
        <View style={styles.body}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{itemData.question}</Text>
          </View>
          <FlatList
            data={itemData.options}
            renderItem={renderOption}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.user}>{itemData.user.name}</Text>
            <DescriptionText description={itemData.description} />
          </View>
          <View style={styles.playlist}>
            <Icon
              name="play-box-multiple"
              color="white"
              size={17}
              style={styles.playlistIcon}
            />
            <Text style={styles.playlistText}>
              Playlist • {itemData.playlist}
            </Text>
            <Icon
              name="chevron-right"
              color="white"
              size={20}
              style={styles.chevronRight}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
