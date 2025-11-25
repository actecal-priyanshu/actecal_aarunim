import { useState, useCallback } from 'react';
import { EditorSlide, EditorThemeToken, PublishStatus } from '../pages/types/launchPlan.types';

const useEditor = (initialSlides: EditorSlide[], initialThemes: EditorThemeToken[]) => {
  const [activeSlideId, setActiveSlideId] = useState(initialSlides[0]?.id || '');
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<PublishStatus>({});
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [isEditMode, setEditMode] = useState(false);

  const activeSlide = initialSlides.find((slide) => slide.id === activeSlideId) ?? initialSlides[0];
  const highlightColor = initialThemes[selectedThemeIndex]?.value ?? '#6366f1';

  const handleSlideSelect = useCallback((slideId: string) => {
    setActiveSlideId(slideId);
  }, []);

  const handleLayerSelect = useCallback((index: number) => {
    setSelectedLayerIndex(index);
  }, []);

  const handleThemeSelect = useCallback((index: number) => {
    setSelectedThemeIndex(index);
  }, []);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 2000);
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  }, []);

  const shareOnSocial = useCallback((platform: string, shareableLink: string, message: string) => {
    let url = '';
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareableLink)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableLink)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareableLink)}`;
        break;
      default:
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
  }, []);

  const handleUpgrade = useCallback(() => {
    // In a real app, this would redirect to checkout
    console.log(`Upgrading to ${selectedPlan} plan...`);
    setIsUpgradeOpen(false);
  }, [selectedPlan]);

  const publishSite = useCallback(async (projectSlug: string): Promise<PublishStatus> => {
    setIsPublishing(true);
    setPublishStatus({});
    
    try {
      // Simulate API call
      const result = await new Promise<PublishStatus>((resolve) => {
        setTimeout(() => {
          // Simulate 90% success rate
          const isSuccess = Math.random() > 0.1;
          if (isSuccess) {
            const publishedUrl = `https://${projectSlug}.yourdomain.com`;
            resolve({
              success: true,
              message: 'Successfully published your site!',
              publishedUrl,
              showRetry: false
            });
          } else {
            resolve({
              success: false,
              message: 'Failed to publish. The server is temporarily unavailable.',
              showRetry: true
            });
          }
        }, 1500);
      });
      
      setPublishStatus(result);
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      const status = {
        success: false,
        message: `Publishing failed: ${errorMessage}`,
        showRetry: true
      };
      setPublishStatus(status);
      return status;
    } finally {
      setIsPublishing(false);
    }
  }, []);

  return {
    // State
    activeSlideId,
    activeSlide,
    selectedLayerIndex,
    selectedThemeIndex,
    isPublishing,
    publishStatus,
    isShareOpen,
    isLinkCopied,
    isUpgradeOpen,
    selectedPlan,
    isEditMode,
    highlightColor,
    
    // Actions
    setEditMode,
    handleSlideSelect,
    handleLayerSelect,
    handleThemeSelect,
    copyToClipboard,
    shareOnSocial,
    handleUpgrade,
    publishSite,
    setIsShareOpen,
    setIsUpgradeOpen,
    setSelectedPlan,
  };
};

export default useEditor;
