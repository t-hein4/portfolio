import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

const secret = "hello";
export default async function revalidate(req, res) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const body = await readBody(req);
  if (!isValidSignature(body, signature, secret)) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  res.revalidate("/");
  res.json({ success: true });
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
