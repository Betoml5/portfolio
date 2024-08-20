import { promises as fs } from "fs";
import path from "path";

export async function getServerSideProps({ res }) {
  const filePath = path.join(process.cwd(), "public", "example.txt");
  const fileContents = await fs.readFile(filePath, "utf8");

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Disposition", "attachment; filename=example.txt");
  res.write(fileContents);
  res.end();

  return { props: {} };
}

export default function TxtPage() {
  return null; // No renderiza nada ya que el archivo se descarga automáticamente
}
