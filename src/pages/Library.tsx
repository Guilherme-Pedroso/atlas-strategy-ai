
import React, { useState } from "react";
import { LibraryHeader } from "@/components/library/LibraryHeader";
import { LibrarySidebar } from "@/components/library/LibrarySidebar";
import { LibraryContent } from "@/components/library/LibraryContent";
import { LibraryAIModal } from "@/components/library/LibraryAIModal";
import { LibraryMobileFilters } from "@/components/library/LibraryMobileFilters";
import { useMobile } from "@/hooks/use-mobile";
import { FilterState, LibraryItem } from "@/types/library";
import { generateMockLibraryData } from "@/lib/mock-data";

const Library = () => {
  const isMobile = useMobile();
  const [items] = useState<LibraryItem[]>(generateMockLibraryData());
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    contentTypes: [],
    businessStages: [],
    thematicAreas: []
  });
  const [showAIModal, setShowAIModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);

  const filteredItems = items.filter(item => {
    // Search filter
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Content type filter
    if (filters.contentTypes.length > 0 && !filters.contentTypes.includes(item.type)) {
      return false;
    }
    
    // Business stage filter
    if (filters.businessStages.length > 0 && !filters.businessStages.some(stage => item.stages.includes(stage))) {
      return false;
    }
    
    // Thematic area filter
    if (filters.thematicAreas.length > 0 && !filters.thematicAreas.some(area => item.tags.includes(area))) {
      return false;
    }
    
    return true;
  });

  const handleOpenAIModal = (item: LibraryItem) => {
    setSelectedItem(item);
    setShowAIModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-atlas-background text-white">
      <LibraryHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && (
          <LibrarySidebar 
            filters={filters} 
            setFilters={setFilters} 
          />
        )}
        
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {isMobile && (
            <LibraryMobileFilters 
              filters={filters} 
              setFilters={setFilters} 
            />
          )}
          
          <LibraryContent 
            items={filteredItems} 
            onRequestAI={handleOpenAIModal} 
          />
        </div>
      </div>
      
      {showAIModal && selectedItem && (
        <LibraryAIModal 
          item={selectedItem}
          isOpen={showAIModal}
          onClose={() => setShowAIModal(false)}
        />
      )}
    </div>
  );
};

export default Library;
