// Each icon is raw inner-SVG markup rendered via set:html. Multiple primitives per icon
// avoid the single-path rendering failures seen with complex shapes like "road".
export const icons: Record<string, string> = {
  home: '<path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />',
  truck: '<path d="M3 6h11v9H3zM14 10h4l3 3v2h-7zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />',
  road: '<path d="M6 21 9 3h6l3 18" /><line x1="12" y1="5" x2="12" y2="9" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="12" y1="19" x2="12" y2="21" />',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" />',
  crate:
    '<rect x="4" y="5" width="16" height="15" rx="1" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="9" y1="5" x2="9" y2="20" /><line x1="15" y1="5" x2="15" y2="20" />',
  frame: '<rect x="3" y="3" width="18" height="18" rx="1" /><rect x="7" y="7" width="10" height="10" />',
  glove:
    '<path d="M8 2a1.5 1.5 0 0 1 1.5 1.5V10h.5V1.5a1.5 1.5 0 0 1 3 0V10h.5V3a1.5 1.5 0 0 1 3 0v7h.5V6a1.5 1.5 0 0 1 3 0v9a7 7 0 0 1-7 7H10a7 7 0 0 1-7-7v-4.5A1.5 1.5 0 0 1 4.5 9 1.5 1.5 0 0 1 6 10.5V10H6.5V3.5A1.5 1.5 0 0 1 8 2z" />',
  building:
    '<rect x="4" y="3" width="10" height="18" rx="1" /><rect x="14" y="9" width="6" height="12" rx="1" /><rect x="6.5" y="6" width="2" height="2" /><rect x="10.5" y="6" width="2" height="2" /><rect x="6.5" y="10.5" width="2" height="2" /><rect x="10.5" y="10.5" width="2" height="2" /><rect x="6.5" y="15" width="2" height="2" /><rect x="16.5" y="12" width="1.8" height="1.8" /><rect x="16.5" y="16" width="1.8" height="1.8" />',
};
