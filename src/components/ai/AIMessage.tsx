
import React, { useState } from "react";
import { MessageSquare, User, Copy, ExternalLink, Edit, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface AIMessageProps {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIMessage = ({ content, isUser, timestamp }: AIMessageProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const formattedTime = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp);
  
  return (
    <div className={cn(
      "flex gap-4 max-w-4xl",
      isUser ? "text-atlas-neutral" : "text-white"
    )}>
      <div className="flex-shrink-0 mt-1">
        <Avatar className={cn(
          "h-8 w-8 border",
          isUser 
            ? "bg-atlas-neutral/20 border-atlas-neutral/50" 
            : "bg-atlas-highlight/20 border-atlas-highlight/50"
        )}>
          {isUser ? (
            <User className="h-4 w-4 text-atlas-neutral" />
          ) : (
            <MessageSquare className="h-4 w-4 text-atlas-highlight" />
          )}
        </Avatar>
      </div>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-medium">
            {isUser ? "Você" : "Atlas AI"}
          </span>
          <span className="text-xs text-atlas-neutral/70">
            {formattedTime}
          </span>
        </div>
        
        <div className={cn(
          "prose prose-sm max-w-none",
          "prose-headings:text-white prose-headings:font-bold prose-headings:my-2",
          "prose-p:text-atlas-neutral prose-p:my-1.5",
          "prose-strong:text-white prose-strong:font-semibold",
          "prose-ul:text-atlas-neutral prose-ul:my-1.5",
          "prose-li:my-0.5",
          "prose-a:text-atlas-highlight prose-a:no-underline hover:prose-a:underline"
        )}>
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
        
        {!isUser && (
          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 text-xs bg-transparent border-white/10 hover:bg-white/5 text-atlas-neutral"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copiar
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 text-xs bg-transparent border-white/10 hover:bg-white/5 text-atlas-neutral"
              onClick={() => console.log("Insert into document")}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Inserir em documento
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 text-xs bg-transparent border-white/10 hover:bg-white/5 text-atlas-neutral"
              onClick={() => console.log("Edit manually")}
            >
              <Edit className="h-3.5 w-3.5" />
              Editar manualmente
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
