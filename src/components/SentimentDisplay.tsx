
import { ThumbsUp, Minus, ThumbsDown } from 'lucide-react';

interface SentimentDisplayProps {
  sentiment: 'positive' | 'neutral' | 'negative';
}

const SentimentDisplay = ({ sentiment }: SentimentDisplayProps) => {
  const sentimentConfig = {
    positive: {
      icon: ThumbsUp,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      label: 'Positive',
    },
    neutral: {
      icon: Minus,
      color: 'text-slate-500',
      bgColor: 'bg-slate-50',
      label: 'Neutral',
    },
    negative: {
      icon: ThumbsDown,
      color: 'text-rose-500',
      bgColor: 'bg-rose-50',
      label: 'Negative',
    },
  };

  const config = sentimentConfig[sentiment];
  const Icon = config.icon;

  return (
    <div className="text-center">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Sentiment Analysis</h3>
      <div className={`inline-flex items-center justify-center p-4 rounded-full ${config.bgColor}`}>
        <Icon className={`w-8 h-8 ${config.color}`} />
      </div>
      <p className={`mt-2 font-medium ${config.color}`}>{config.label}</p>
    </div>
  );
};

export default SentimentDisplay;
