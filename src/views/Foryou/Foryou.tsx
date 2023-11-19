import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  View,
  Alert,
} from 'react-native';
import {fetchMCQs, revealAnswer} from '../../services/Mcq';
import styles from './styles';
import AnswerOption from '../../components/AnswerOption';
import NavBar from '../../components/NavBar/NavBar';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const Foryou = () => {
  const [mcqs, setMcqs] = useState([]); // State to store the MCQs
  const [mcqIds, setMcqIds] = useState(new Set()); // State to store the unique IDs of MCQs
  const [isLoading, setIsLoading] = useState(false); // State to handle loading status
  const [isFetchingMore, setIsFetchingMore] = useState(false); // State to handle pagination loading status

  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    loadMCQs();
  }, []);

  const loadMCQs = async () => {
    if (isFetchingMore) return; // Prevent multiple simultaneous fetches

    setIsLoading(true);
    try {
      let mcqsArray = [];
      for (let i = 0; i < 3; i++) {
        let mcq = await fetchMCQs(); // Fetch each MCQ
        if (mcqIds.has(mcq.id)) continue; // Skip if already fetched

        const correctAnswers = await revealAnswer(mcq.id);
        mcq = {...mcq, correct_options: correctAnswers.correct_options[0]};

        setMcqIds(prevIds => new Set(prevIds.add(mcq.id))); // Add the new ID
        mcqsArray.push(mcq);
      }
      setMcqs(prevMcqs => [...prevMcqs, ...mcqsArray]);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to load new questions.');
    } finally {
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  };

  const handleEndReached = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      loadMCQs();
    }
  };

  if (isLoading && mcqs.length === 0) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mcqs}
        keyExtractor={item => item.id.toString()} // Use the unique ID as the key
        renderItem={({item}) => <AnswerOption itemData={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height - tabBarHeight}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingMore && <ActivityIndicator size="small" />
        }
      />
      <NavBar />
    </View>
  );
};

export default Foryou;
