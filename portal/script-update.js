// Add function to update server counts
function updateServerCounts() {
    // Get the count elements
    const totalCount = document.getElementById('total-server-count');
    const officialCount = document.getElementById('official-server-count');
    const enterpriseCount = document.getElementById('enterprise-server-count');
    const toolsCount = document.getElementById('tools-count');
    
    // Update the counts
    if (totalCount) {
        totalCount.textContent = officialServers.length + enterpriseServers.length + mcpTools.length;
    }
    
    if (officialCount) {
        officialCount.textContent = officialServers.length;
    }
    
    if (enterpriseCount) {
        enterpriseCount.textContent = enterpriseServers.length;
    }
    
    if (toolsCount) {
        toolsCount.textContent = mcpTools.length;
    }
}

// Update the renderServers function to call updateServerCounts
function renderServers() {
    const enterpriseContainer = document.getElementById('enterprise-cards');
    const toolsContainer = document.getElementById('tool-cards');
    const officialContainer = document.getElementById('official-servers');

    if (officialContainer) {
        // Clear existing content
        let officialCardsContainer = officialContainer.querySelector('.cards-container');
        
        // If it doesn't exist, create it
        if (!officialCardsContainer) {
            officialCardsContainer = document.createElement('div');
            officialCardsContainer.className = 'cards-container';
            officialContainer.appendChild(officialCardsContainer);
        } else {
            officialCardsContainer.innerHTML = '';
        }

        // Add official servers
        officialServers.forEach(server => {
            const cardHTML = createCardHTML(server);
            officialCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
    
    if (enterpriseContainer) {
        // Clear existing content
        enterpriseContainer.innerHTML = '';
        
        // Add enterprise servers
        enterpriseServers.forEach(server => {
            const cardHTML = createCardHTML(server);
            enterpriseContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
    
    if (toolsContainer) {
        // Clear existing content
        toolsContainer.innerHTML = '';
        
        // Add MCP tools
        mcpTools.forEach(server => {
            const cardHTML = createCardHTML(server);
            toolsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
    
    // Update the server counts in the sidebar
    updateServerCounts();
}