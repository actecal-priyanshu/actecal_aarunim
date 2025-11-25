import { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage, ChatOption } from '../pages/types/launchPlan.types';

const useChat = (initialOptions: ChatOption[]) => {
  const [isChatMenuOpen, setChatMenuOpen] = useState(false);
  const [selectedChatOption, setSelectedChatOption] = useState<ChatOption | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [messageDraft, setMessageDraft] = useState('');
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const chatMenuRef = useRef<HTMLDivElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);

  const handleChatOptionSelect = useCallback((optionId: string) => {
    const option = initialOptions.find((item) => item.id === optionId) ?? null;
    setSelectedChatOption(option);
    setChatMenuOpen(false);
    
    if (option) {
      setMessages([
        {
          id: `${option.id}-intro`,
          author: 'lovable',
          text: `Hi there! I'm ready to help with "${option.label}". ${option.description}`,
          timestamp: Date.now(),
        },
      ]);
      setMessageDraft('');
      requestAnimationFrame(() => messageInputRef.current?.focus());
    } else {
      setMessages([]);
      setMessageDraft('');
    }
  }, [initialOptions]);

  const handleMessageSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!selectedChatOption) {
      setChatMenuOpen(true);
      return;
    }

    const trimmedDraft = messageDraft.trim();
    if (!trimmedDraft) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      author: 'user',
      text: trimmedDraft,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessageDraft('');

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `lovable-${Date.now()}`,
          author: 'lovable',
          text: `Thanks for sharing! I'll keep "${selectedChatOption.label}" in mind as we continue. Here's a quick next step: ${selectedChatOption.description}`,
          timestamp: Date.now(),
        },
      ]);
    }, 500);
  }, [messageDraft, selectedChatOption]);

  // Handle click outside to close chat menu
  useEffect(() => {
    if (!isChatMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !chatMenuRef.current?.contains(target) &&
        !chatButtonRef.current?.contains(target)
      ) {
        setChatMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatMenuOpen]);

  return {
    isChatMenuOpen,
    setChatMenuOpen,
    selectedChatOption,
    messages,
    messageDraft,
    setMessageDraft,
    messageInputRef,
    chatMenuRef,
    chatButtonRef,
    handleChatOptionSelect,
    handleMessageSubmit,
  };
};

export default useChat;
