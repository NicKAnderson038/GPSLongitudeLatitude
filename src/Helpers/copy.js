import copy from "copy-to-clipboard";

export const copyData = data => {
  copy(data);

  // Copy with options
  copy(data, {
    debug: true,
    message: "Press #{key} to copy"
  });
};
