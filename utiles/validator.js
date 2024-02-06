export const validMobile = mobile => {
  const reg = /^[6-9]\d{9}$/;
  return reg.test(mobile);
};

export const validPin = pin => {
  const reg = /^\d{4}$/;
  return reg.test(pin);
};
