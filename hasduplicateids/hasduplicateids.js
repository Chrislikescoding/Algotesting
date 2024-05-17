function hasDuplicateIds(root, idSet = new Set()) {
  if (!root) return false;
  if (idSet.has(root.id)) return true;

  root.id && idSet.add(root.id);

  // If result is a tag we're looking for

  if (root.hasChildNodes()) {
    for (let child of root.children) {
      const result = hasDuplicateIds(child, idSet);
      if (result) return true;
    }
  }

  return false;
}

module.exports = hasDuplicateIds;
