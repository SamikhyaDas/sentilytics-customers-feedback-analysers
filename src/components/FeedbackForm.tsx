
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface FeedbackFormProps {
  onAnalyze: (feedback: string) => void;
}

const FeedbackForm = ({ onAnalyze }: FeedbackFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAnalyze(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Customer Feedback
        </label>
        <Textarea
          id="feedback"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste customer feedback here..."
          className="min-h-[120px]"
        />
      </div>
      <Button type="submit" className="w-full md:w-auto" disabled={!text.trim()}>
        Analyze Feedback
      </Button>
    </form>
  );
};

export default FeedbackForm;
