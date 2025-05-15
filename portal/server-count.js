// Function to update server counts
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