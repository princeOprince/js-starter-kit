export default function getBaseUrl() {
  const inDevelopment = location.hostname === "localhost";
  return inDevelopment ? "http://localhost:4001/" : "/";
}
