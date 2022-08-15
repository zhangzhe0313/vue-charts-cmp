
export const composeOptionsSource = (des, tar) => {
  if (!tar || typeof tar !== 'object' || Object.keys(tar).length === 0) {
    return des;
  }

  for(let item in tar) {
    if (tar[item]) {
      if (typeof tar[item] === 'object') {
        if (tar[item] instanceof Array) {
          tar[item].forEach((element, index) => {
            des[item][index] = Object.assign({}, des[item][index], element);
          });
        } else {
          composeOptionsSource(des, tar[item]);
        }
      } else {
        des[item] = tar[item];
      }
    }
  }

  return des;
};