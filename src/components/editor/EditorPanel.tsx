import React from 'react';
import { EditorSlide, EditorThemeToken } from '../../pages/types/launchPlan.types';

interface EditorPanelProps {
  isEditMode: boolean;
  activeSlide: EditorSlide;
  selectedLayerIndex: number;
  selectedThemeIndex: number;
  slides: EditorSlide[];
  layers: string[];
  themeTokens: EditorThemeToken[];
  onSlideSelect: (slideId: string) => void;
  onLayerSelect: (index: number) => void;
  onThemeSelect: (index: number) => void;
  onToggleEditMode: () => void;
  onPublish: () => Promise<void>;
  onShare: () => void;
  onUpgrade: () => void;
  isPublishing: boolean;
  publishStatus?: {
    success?: boolean;
    message?: string;
    publishedUrl?: string;
    showRetry?: boolean;
  };
}

const EditorPanel: React.FC<EditorPanelProps> = ({
  isEditMode,
  activeSlide,
  selectedLayerIndex,
  selectedThemeIndex,
  slides,
  layers,
  themeTokens,
  onSlideSelect,
  onLayerSelect,
  onThemeSelect,
  onToggleEditMode,
  onPublish,
  onShare,
  onUpgrade,
  isPublishing,
  publishStatus,
}) => {
  return (
    <div className="fixed left-4 top-4 bottom-4 w-72 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">
            {isEditMode ? 'Edit Mode' : 'Preview Mode'}
          </h2>
          <button
            onClick={onToggleEditMode}
            className="text-sm px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors"
          >
            {isEditMode ? 'Preview' : 'Edit'}
          </button>
        </div>
        <p className="text-sm text-gray-500">{activeSlide?.blurb}</p>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {isEditMode ? (
          <>
            {/* Slides */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Slides
              </h3>
              <div className="space-y-2">
                {slides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => onSlideSelect(slide.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeSlide?.id === slide.id
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <p className="font-medium">{slide.title}</p>
                    <p className="text-xs text-gray-500">{slide.blurb}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Layers */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Layers
              </h3>
              <div className="space-y-1">
                {layers.map((layer, index) => (
                  <button
                    key={layer}
                    onClick={() => onLayerSelect(index)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedLayerIndex === index
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {layer}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme */}
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                Theme
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {themeTokens.map((token, index) => (
                  <button
                    key={token.label}
                    onClick={() => onThemeSelect(index)}
                    className="flex flex-col items-center p-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-md mb-1 border border-gray-200"
                      style={{ backgroundColor: token.value }}
                    />
                    <span className="text-xs text-gray-700">{token.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-medium text-indigo-800 mb-2">Preview Mode</h3>
              <p className="text-sm text-indigo-700">
                Interact with the preview to see how your content will look to users.
              </p>
            </div>

            {publishStatus?.message && (
              <div
                className={`p-4 rounded-lg ${
                  publishStatus.success
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                <p className="text-sm">{publishStatus.message}</p>
                {publishStatus.publishedUrl && (
                  <a
                    href={publishStatus.publishedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline mt-1 inline-block"
                  >
                    View live site
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="space-y-2">
          <button
            onClick={onPublish}
            disabled={isPublishing}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isPublishing ? 'Publishing...' : 'Publish Changes'}
          </button>
          
          <div className="flex space-x-2">
            <button
              onClick={onShare}
              className="flex-1 bg-white text-indigo-600 py-2 px-4 rounded-md font-medium border border-indigo-200 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Share
            </button>
            <button
              onClick={onUpgrade}
              className="flex-1 bg-white text-indigo-600 py-2 px-4 rounded-md font-medium border border-indigo-200 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
