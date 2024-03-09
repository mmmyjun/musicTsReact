export async function getTvList(content) {
  const res = await fetch(`/api/video/list?s=${content}`);
  return await res.json();
}