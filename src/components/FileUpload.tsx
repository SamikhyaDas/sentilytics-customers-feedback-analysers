
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
}

const FileUpload = ({ onFilesSelected }: FileUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onFilesSelected(files);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() => document.getElementById('file-upload')?.click()}
          className="w-full"
        >
          <Upload className="mr-2 h-4 w-4" />
          Attach Files
        </Button>
      </div>
      <input
        type="file"
        id="file-upload"
        multiple
        className="hidden"
        onChange={handleFileChange}
        accept=".txt,.doc,.docx,.pdf"
      />
      
    </div>
  );
};

export default FileUpload;
