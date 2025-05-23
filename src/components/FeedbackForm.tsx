import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import FileUpload from './FileUpload';
import { toast } from 'sonner';

interface FeedbackFormProps {
  onAnalyze: (feedback: string) => void;
}

const FeedbackForm = ({ onAnalyze }: FeedbackFormProps) => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsSubmitting(true);
    try {
      onAnalyze(text);
      if (files.length > 0) {
        toast('Files attached', {
          description: `${files.length} file(s) will be processed with your feedback`
        });
      }
    } catch (error) {
      toast('Error', {
        description: 'Failed to analyze feedback. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFilesSelected = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    toast('Files added', {
      description: `${selectedFiles.length} file(s) selected`
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Enter Customer Feedback
        </label>
        <Textarea
          id="feedback"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste customer feedback here..."
          className="min-h-[120px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <FileUpload onFilesSelected={handleFilesSelected} />
      <div className="flex items-center gap-4">
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          disabled={!text.trim() || isSubmitting}
        >
          {isSubmitting ? 'Analyzing...' : 'Analyze Feedback'}
        </Button>
        {files.length > 0 && (
          <span className="text-sm text-muted-foreground">
            {files.length} file(s) attached
          </span>
        )}
      </div>
    </form>
  );
};

export default FeedbackForm;
