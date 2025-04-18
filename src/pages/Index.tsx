
import { useState } from 'react';
import FeedbackForm from '@/components/FeedbackForm';
import SentimentDisplay from '@/components/SentimentDisplay';
import KeywordCloud from '@/components/KeywordCloud';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [feedback, setFeedback] = useState('');
  const [sentiment, setSentiment] = useState<'positive' | 'neutral' | 'negative' | null>(null);
  const [keywords, setKeywords] = useState<Array<{ text: string; count: number }>>([]);

  const analyzeFeedback = (text: string) => {
    setFeedback(text);
    
    // Simple sentiment analysis based on keyword matching
    const positiveWords = ['great', 'awesome', 'excellent', 'good', 'love', 'perfect', 'thanks'];
    const negativeWords = ['bad', 'poor', 'terrible', 'awful', 'hate', 'worst', 'disappointed'];
    
    const words = text.toLowerCase().split(/\s+/);
    const positiveCount = words.filter(word => positiveWords.includes(word)).length;
    const negativeCount = words.filter(word => negativeWords.includes(word)).length;
    
    if (positiveCount > negativeCount) {
      setSentiment('positive');
    } else if (negativeCount > positiveCount) {
      setSentiment('negative');
    } else {
      setSentiment('neutral');
    }

    // Extract keywords and their frequencies
    const wordFrequency: Record<string, number> = {};
    words.forEach(word => {
      if (word.length > 3) { // Only count words longer than 3 characters
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      }
    });

    const keywordArray = Object.entries(wordFrequency)
      .map(([text, count]) => ({ text, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // Get top 10 keywords

    setKeywords(keywordArray);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Customer Feedback Analyzer
        </h1>
        
        <div className="space-y-6">
          <Card className="p-6">
            <FeedbackForm onAnalyze={analyzeFeedback} />
          </Card>

          {sentiment && (
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <SentimentDisplay sentiment={sentiment} />
              </Card>
              <Card className="p-6">
                <KeywordCloud keywords={keywords} />
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
