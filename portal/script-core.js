// Combined functionality for MCP Toolkit
// Define feature categories
const featureCategories = [
    "File Operations",
    "Database Access",
    "API Integration",
    "Web Automation",
    "AI Tools",
    "Development"
];

// Function to create card HTML for servers
function createServerCardHTML(server) {
    const badgeHTML = `<span class="badge official">Official</span>`;
    
    return `
        <div class="card" data-category="${server.category || ''}">
            <div class="card-header">${server.name}</div>
            <div class="card-body">
                <div class="card-description">
                    ${badgeHTML}
                    <p>${server.description}</p>
                </div>
                <div class="card-meta">
                    <span>${server.category}</span>
                </div>
                <div class="card-links">
                    <button class="action-button">Enable</button>
                    <button class="secondary-button">Details</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render servers to container
function renderServers() {
    const serversContainer = document.getElementById('official-servers-container');
    
    if (serversContainer) {
        // Clear existing content
        serversContainer.innerHTML = '';
        
        // Combine the server lists from part1 and part2
        const allServers = [...officialServers, ...officialServersSecondPart];
        
        // Add servers
        allServers.forEach(server => {
            const cardHTML = createServerCardHTML(server);
            serversContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
    
    // Populate the category filter
    populateCategoryFilter();
}

// Function to populate the category filter dropdown
function populateCategoryFilter() {
    const categoryFilter = document.getElementById('category-filter');
    
    if (categoryFilter) {
        // Clear existing options except the first one
        while (categoryFilter.options.length > 1) {
            categoryFilter.remove(1);
        }
        
        // Add each feature category
        featureCategories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
}

// Function to setup search and filtering
function setupSearch() {
    const searchInput = document.getElementById('server-search');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterServers);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterServers);
    }
}

// Function to filter servers based on search and category
function filterServers() {
    const searchTerm = document.getElementById('server-search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const cards = document.querySelectorAll('#official-servers-container .card');
    
    cards.forEach(card => {
        const cardTitle = card.querySelector('.card-header').textContent.toLowerCase();
        const cardDesc = card.querySelector('.card-description p').textContent.toLowerCase();
        const cardCategory = card.getAttribute('data-category');
        
        const matchesSearch = cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || cardCategory === categoryFilter;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to setup sidebar navigation
function setupSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('main section');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID
            const targetId = this.getAttribute('href');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the target section
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            
            // Update active state in sidebar
            sidebarLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Set initial active section
    const initialActiveLink = document.querySelector('.sidebar a.active');
    if (initialActiveLink) {
        const initialTargetId = initialActiveLink.getAttribute('href');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const initialTargetSection = document.querySelector(initialTargetId);
        if (initialTargetSection) {
            initialTargetSection.style.display = 'block';
        }
    }
}

// Function to check if all 110 servers are present
function verifyServerCount() {
    const allServers = [...officialServers, ...officialServersSecondPart];
    const expectedCount = 110;
    const actualCount = allServers.length;
    
    if (actualCount < expectedCount) {
        console.warn(`Warning: Expected ${expectedCount} servers, but only found ${actualCount}.`);
    } else {
        console.log(`All ${actualCount} servers are present.`);
    }
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', function() {
    // Render servers
    renderServers();
    
    // Setup search and filtering
    setupSearch();
    
    // Setup sidebar navigation
    setupSidebarNavigation();
    
    // Verify server count
    verifyServerCount();
    
    // Set last updated date
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = new Date().toLocaleString();
    }
});