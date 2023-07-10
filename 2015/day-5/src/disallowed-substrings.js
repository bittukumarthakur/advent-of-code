const isContain = function (line, substring) {
  return (line.match(substring) !== null);
};

const isContainDisallowedSubstrings = function (text) {
  const disallowedSubstrings = ["ab", "cd", "pq", "xy"];

  for (const substring of disallowedSubstrings) {
    if (isContain(text, substring)) {
      return true;
    };

  };

  return false;
};

exports.isContainDisallowedSubstrings = isContainDisallowedSubstrings