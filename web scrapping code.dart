  (() => {
    const data = {};

    // Title
    const titleEl = document.querySelector('[data-hook="post-title"]');
    data.title = titleEl?.innerText?.trim() || '';

    // Author
    const authorEl = document.querySelector('[data-hook="user-name"]');
    data.author = authorEl?.innerText?.trim() || '';

    // Date
    const dateEl = document.querySelector('[data-hook="time-ago"]');
    data.date = dateEl?.innerText?.trim() || '';

    // Read Time
    const readTimeEl = document.querySelector('[data-hook="time-to-read"]');
    data.readTime = readTimeEl?.innerText?.trim() || '';

    // Content
    const contentEl = document.querySelector('[data-id="content-viewer"]');
    data.content = contentEl?.innerHTML?.trim() || '';

    // Log or copy
    console.log("📝 Scraped Article Data:", data);
    copy(data); // Copies to clipboard in browser console

    return data;
  })();