export function getAuthorData({
  user: {
    entityUrl: { path: authorLink = "/" },
    fieldForename,
    fieldSurname
  }
}) {
  return {
    authorName: `${fieldForename} ${fieldSurname}`,
    authorLink
  };
}
