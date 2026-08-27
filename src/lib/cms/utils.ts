export const CMSEnabled = (): boolean => {
  if (process.env.NEXT_PUBLIC_CMS_ENABLED === "false") {
    console.log("false")
    return false;
  }
  return true;
};
