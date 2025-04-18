
interface FeedbackData {
  text: string;
  files: File[];
  timestamp: string;
}

type SentimentType = 'positive' | 'neutral' | 'negative';

interface AnalysisResult {
  sentiment: SentimentType;
  keywords: Array<{ text: string; count: number }>;
}

export const analyzeFeedback = async (data: FeedbackData): Promise<AnalysisResult> => {
  // This is a mock API call - replace with real API endpoint when connected to backend
  console.log('Analyzing feedback:', data);
  
  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate a typed sentiment value
  const randomValue = Math.random();
  let sentiment: SentimentType = 'neutral';
  
  if (randomValue > 0.66) {
    sentiment = 'positive';
  } else if (randomValue > 0.33) {
    sentiment = 'neutral';
  } else {
    sentiment = 'negative';
  }
  
  // Mock response with proper typing
  return {
    sentiment,
    keywords: data.text.split(' ')
      .filter(word => word.length > 3)
      .map(word => ({ text: word.toLowerCase(), count: Math.floor(Math.random() * 5) + 1 }))
  };
};
