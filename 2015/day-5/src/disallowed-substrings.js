const areContainDisallowedSubstrings = function (text) {
  const disallowedSubstrings = ["ab", "cd", "pq", "xy"];
  const disallowedSubstring =  disallowedSubstrings.find(substring => text.includes(substring));

  return disallowedSubstring !== undefined;
};

exports.areContainDisallowedSubstrings = areContainDisallowedSubstrings