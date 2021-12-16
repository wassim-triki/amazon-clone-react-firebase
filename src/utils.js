const randId = (max = 6) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz_#*-/+";
  const l = alphabet.length;
  let id = "";
  for (let i = 0; i < max; i++) {
    let j = Math.floor(Math.random() * l);
    id += alphabet[j];
  }
  return id;
};

export default randId;
