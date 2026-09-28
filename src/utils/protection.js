// Disable right-click
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Disable text selection
document.addEventListener("selectstart", (e) => {
  e.preventDefault();
});

// Disable dragging images/videos
document.addEventListener("dragstart", (e) => {
  if (e.target.closest('img, video')) e.preventDefault()
});

// Block common developer/browser shortcuts
document.addEventListener("keydown", (e) => {
  // F12
  if (e.key === "F12") {
    e.preventDefault();
    return;
  }

  // Ctrl + Shift + I / J / C
  if (
    e.ctrlKey &&
    e.shiftKey &&
    ["I", "J", "C"].includes(e.key.toUpperCase())
  ) {
    e.preventDefault();
    return;
  }

  // Ctrl + U (View Source)
  if (e.ctrlKey && e.key.toUpperCase() === "U") {
    e.preventDefault();
    return;
  }

  // Ctrl + S (Save page)
  if (e.ctrlKey && e.key.toUpperCase() === "S") {
    e.preventDefault();
    return;
  }
});