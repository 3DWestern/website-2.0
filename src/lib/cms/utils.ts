export const CMSEnabled = (): boolean => {
  if (process.env.NEXT_PUBLIC_CMS_ENABLED === "false") {
    return false;
  }
  return true;
};
