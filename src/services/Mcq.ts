import {API_URL} from '../constants/constants';

export const fetchMCQs = async () => {
  try {
    const response = await fetch(`${API_URL}/for_you`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching MCQs:', error);
    throw error;
  }
};

export const revealAnswer = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/reveal?id=${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error revealing answer:', error);
    throw error;
  }
};
