module.exports = function transform(arr) {
  const controlSeq = [`--discard-next`,
                        `--double-prev`, 
                        `--double-next`,
                        `--discard-prev`]

  return arr.reduce((prev, cur, indx) => {
    if (controlSeq.includes(cur)) {
      return prev;
    }

    if (arr[indx - 1] == `--discard-next`) {
      return prev;
    }

    if (arr[indx - 1] == `--double-next`) {
      prev.push(cur, cur);
    } else {
      prev.push(cur);
    }

    if (arr[indx + 1] == `--discard-prev`) {
      prev.splice(prev.length - 1, 1)
    }

    if (arr[indx + 1] == `--double-prev`) {
      prev.push(cur)
    }
    return prev;
  }, []);
};