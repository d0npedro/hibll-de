const CHECKLIST_KEY = "hibll_checklist";
const BOOKMARKS_KEY = "hibll_bookmarks";

function safeGetItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage quota exceeded or unavailable
  }
}

export function getChecklist(): Record<string, boolean> {
  const raw = safeGetItem(CHECKLIST_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    return {};
  }
}

export function setChecklistItem(stepId: string, checked: boolean): void {
  const current = getChecklist();
  current[stepId] = checked;
  safeSetItem(CHECKLIST_KEY, JSON.stringify(current));
}

export interface BookmarkItem {
  id: string;
  title: string;
  description?: string;
  href?: string;
  type: "step" | "offer";
}

export function getBookmarks(): BookmarkItem[] {
  const raw = safeGetItem(BOOKMARKS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as BookmarkItem[];
  } catch {
    return [];
  }
}

export function addBookmark(item: BookmarkItem): void {
  const current = getBookmarks();
  if (current.some((b) => b.id === item.id)) return;
  safeSetItem(BOOKMARKS_KEY, JSON.stringify([...current, item]));
}

export function removeBookmark(id: string): void {
  const current = getBookmarks();
  safeSetItem(BOOKMARKS_KEY, JSON.stringify(current.filter((b) => b.id !== id)));
}

export function isBookmarked(id: string): boolean {
  return getBookmarks().some((b) => b.id === id);
}
