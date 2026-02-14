// Reusable markdown loading and rendering functions

async function loadAndRenderMarkdown(mdFilePath, targetElement) {
    try {
        // Fetch the markdown file
        const response = await fetch(mdFilePath);
        if (!response.ok) throw new Error(`Failed to load ${mdFilePath}`);
        
        const markdown = await response.text();
        
        // Convert to HTML
        const html = marked.parse(markdown);
        
        // Sanitize
        const clean = DOMPurify.sanitize(html);
        
        // Insert into target element
        if (typeof targetElement === 'string') {
            document.getElementById(targetElement).innerHTML = clean;
        } else {
            targetElement.innerHTML = clean;
        }
        
        // Re-render math if MathJax is loaded
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
        
        // Re-highlight code if Prism is loaded
        if (window.Prism) {
            Prism.highlightAll();
        }
        
    } catch (error) {
        console.error('Error loading markdown:', error);
        return null;
    }
}

// Helper to load just the HTML (no DOM insertion)
async function markdownToHTML(mdFilePath) {
    try {
        const response = await fetch(mdFilePath);
        const markdown = await response.text();
        const html = marked.parse(markdown);
        return DOMPurify.sanitize(html);
    } catch (error) {
        console.error('Error converting markdown:', error);
        return null;
    }
}