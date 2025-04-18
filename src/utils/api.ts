
interface FeedbackData {
  text: string;
  files: File[];
  timestamp: string;
}

export const analyzeFeedback = async (data: FeedbackData) => {
  // This is a mock API call - replace with real API endpoint when connected to backend
  console.log('Analyzing feedback:', data);
  
  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock response
  return {
    sentiment: Math.random() > 0.5 ? 'positive' : Math.random() > 0.5 ? 'neutral' : 'negative',
    keywords: data.text.split(' ')
      .filter(word => word.length > 3)
      .map(word => ({ text: word.toLowerCase(), count: Math.floor(Math.random() * 5) + 1 }))
  };
};
