
interface KeywordCloudProps {
  keywords: Array<{ text: string; count: number }>;
}

const KeywordCloud = ({ keywords }: KeywordCloudProps) => {
  const maxCount = Math.max(...keywords.map(k => k.count));
  
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Keywords</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {keywords.map(({ text, count }) => {
          const size = Math.max(1, Math.min(2, count / maxCount + 0.8));
          const intensity = Math.round((count / maxCount) * 600);
          
          return (
            <span
              key={text}
              className={`inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full transition-all hover:scale-105`}
              style={{
                fontSize: `${size}rem`,
                opacity: 0.6 + (count / maxCount) * 0.4,
              }}
            >
              {text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default KeywordCloud;
