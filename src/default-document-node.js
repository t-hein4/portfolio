import Iframe from "sanity-plugin-iframe-pane";

export const defaultDocumentNode = function (S, { schemaType }) {
  switch (schemaType) {
    case `project`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `https://t-hein.vercel.app/api/preview`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
