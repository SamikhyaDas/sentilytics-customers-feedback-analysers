
import { useState } from 'react';
import FeedbackForm from '@/components/FeedbackForm';
import SentimentDisplay from '@/components/SentimentDisplay';
import KeywordCloud from '@/components/KeywordCloud';
import { Card } from '@/components/ui/card';
import DashboardLayout from '@/components/DashboardLayout';
import { analyzeFeedback } from '@/utils/api';

const Index = () => {
  const [feedback, setFeedback] = useState('');
  const [sentiment, setSentiment] = useState<'positive' | 'neutral' | 'negative' | null>(null);
  const [keywords, setKeywords] = useState<Array<{ text: string; count: number }>>([]);

  const handleAnalyzeFeedback = async (text: string) => {
    const response = await analyzeFeedback({
      text,
      files: [],
      timestamp: new Date().toISOString()
    });
    
    setFeedback(text);
    // Ensure the response.sentiment is a valid sentiment type
    if (response.sentiment === 'positive' || response.sentiment === 'neutral' || response.sentiment === 'negative') {
      setSentiment(response.sentiment);
    } else {
      // Default to neutral if the sentiment is not valid
      setSentiment('neutral');
    }
    setKeywords(response.keywords);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card className="p-6">
          <FeedbackForm onAnalyze={handleAnalyzeFeedback} />
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
    </DashboardLayout>
  );
};

export default Index;
