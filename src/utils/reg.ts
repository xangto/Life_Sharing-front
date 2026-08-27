export const checkEmail = (_rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (reg.test(value)) {
    return callback(undefined);
  }
  callback(new Error('请输入合法的邮箱'));
};

export const checkUrl = (_rule: any, value: string, callback: (arg0: Error | undefined) => void) => {
  const reg =
    /^https?:\/\/([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  if (reg.test(value)) {
    return callback(undefined);
  }
  callback(new Error('请输入合法的 URL'));
};
